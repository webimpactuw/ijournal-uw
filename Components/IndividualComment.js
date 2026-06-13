import Reactions from "./Reactions";

export default function IndividualComment({ comment }) {
    const initialReactions = [
        comment.reactions.like, 
        comment.reactions.clap, 
        comment.reactions.heart, 
        comment.reactions.idea
    ];

    return(
        <section className="mx-auto py-4 font-serif">
            <h2 className="font-bold pb-2 text-black">{comment.user}</h2>
            <p className="mb-3 text-black">{comment.commentText}</p>
            <Reactions commentId={comment._id.toString()} initialReactions={initialReactions}/>
            <hr/>
        </section>
    )
}