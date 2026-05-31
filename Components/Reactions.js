"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Reactions({commentId, initialReactions}) {
    const [reactionStates, setStates] = useState(initialReactions);
    const router = useRouter();

    const reactions = [
        {
            emoji: "👍",
            react: "like",
            index: 0
        },
        {
            emoji: "👏",
            react: "clap",
            index: 1
        },
        {
            emoji: "❤️",
            react: "heart",
            index: 2
        },
        {
            emoji: "💡",
            react: "idea",
            index: 3
        }
    ];
    
    async function handleClick(reaction, index) {
        await fetch("/api/reactions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                commentId,
                reaction: reaction
            })
        });

        router.refresh();
        reactionStates[index] = true;
    }

    return (
        <div className="flex justify-left">
            {reactions.map((reaction) => (
                <button 
                    key={reaction.react} 
                    className={`border rounded-2xl w-8 mr-2 hover:bg-navBar duration-200 hover:cursor-pointer ${reactionStates[reaction.index] ? "bg-navBar" : ""}`} 
                    onClick={() => handleClick(reaction.react, reaction.index)}
                >
                    {reaction.emoji}
                </button>
            ))}
        </div>
    )
}