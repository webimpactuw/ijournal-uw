export default function IndividualComment({ comment }) {
    return(
        <section className="mx-auto py-4">
            <h2 className="font-bold pb-2">{comment.user}</h2>
            <p>{comment.commentText}</p>
            <hr/>
        </section>
    )
}