"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

//comment animal list
const animalOptions = [
  {id: "option1", value: "Finch"},
  {id: "option2", value: "Quail"},
  {id: "option3", value: "Bluejay"},
  {id: "option4", value: "Raven"},
  {id: "option5", value: "Penguin"}
]



export default function AddComment({articleInfo}) {
    const router = useRouter();
    const [selectedAnimal, setAnimal] = useState("Finch");
    const [commentText, setCommentText] = useState("");
    const [number, setNumber] = useState("");
    const [error, setError] = useState("");
    const [charCount, setCount] = useState(300);

    function commentBoxUpdate(e) {
        setCommentText(e);
        setCount(300 - e.length);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");
        const article = articleInfo.title;
        try {
            
            const num = Number(number);
            if (!Number.isInteger(num)) {
                setError("Please enter a number between 1 and 99!");
                throw new Error("Please enter a number between 1 and 99!");
            }
            
            const userNum = parseInt(number, 10);
            //error handling
           if (Number.isNaN(userNum)) {
                setError("Please enter a number between 1 and 99!");
                throw new Error("Please enter a number between 1 and 99!");
            } else if (userNum <= 0 || userNum > 99) {
                setError("Number most be between 1 and 99!");
                throw new Error("Number most be between 1 and 99!");
            } else if (commentText == "") {
                setError("Please don't submit an empty comment");
                throw new Error("Please don't submit an empty comment");
            } 
            const user = "Anonymous" + selectedAnimal + userNum;
            
            const res = await fetch("/api/comments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user,
                    commentText,
                    article,
                }),
            });
            
            //more error handling
            if(!res.ok) {
                setError("Failed to post comment");
                throw new Error("Failed to post comment");
            }

            setCommentText("");
            setNumber("");
            setAnimal("Finch");
            setCount(300);
            router.refresh();
        } catch (err) {
            console.log(err);
        }
        
    }
    
    return(
        <>
            {/* Comment section */}
            <section className="mx-auto w-[min(92vw,650px)] py-14">
                <h1 className="text-[#7a1b74] text-3xl font-batmip"><i>New Comment</i></h1>

                {(charCount >= 0) && (
                    <p className="mt-3 font-serif text-black">{charCount} characters left</p>
                )}

                {/*Comment textbox*/}
                <form onSubmit={handleSubmit} className="pb-10 font-serif">
                    <div className="pb-8">
                        <textarea maxLength="300" className="bg-gray-200 w-full text-[20px] h-35 p-2 text-black max-h-96 min-h-40" id="commentText"
                                onChange={(e) => commentBoxUpdate(e.target.value)}
                                value={commentText} />
                        <input type="submit" value="Post" id="submit" className="bg-[#7a1b74] rounded px-3 text-white hover:bg-[#d512c8] duration-200 hover:cursor-pointer" />
                    </div>
                    
                    {/*Animal selection*/}
                    <h2 className="text-[#7a1b74] text-xl">Before posting, let's create your anonymous nickname...</h2>
                    <h2 className="text-red-600 px-1 inline-block">*</h2><h2 className="inline-block text-black">First pick an animal</h2>
                    <div>
                        {animalOptions.map((animal) => (
                            <button
                                key={animal.id} 
                                type="button"
                                onClick={() => setAnimal(animal.value)}
                                className={`px-4 rounded m-2 hover:bg-[#7a1b74] hover:text-white duration-200 hover:cursor-pointer ${ selectedAnimal == animal.value ? "bg-[#7a1b74] text-white" : "bg-gray-200 text-black"}`}
                            >
                                {animal.value}
                            </button>
                        ))}
                    </div>
            
                    <br/>

                    {/*Number 1-99 input*/}
                    <h2 className="text-red-600 px-1 inline-block">*</h2><h2 className="inline-block text-black">Now, enter a number between 1-99...</h2>
                    <div>
                        <input type="text" id="number" maxLength="2" className="bg-gray-200 mx-2 w-10 h-8 rounded p-2 text-[#7a1b74]"
                        onChange={(e) => setNumber(e.target.value)}
                        value={number}/> 
                    </div>
                </form>
                {error ? (
                    <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                        {error}      
                    </div>
                ) : null}
            </section>
        </>
    )
}