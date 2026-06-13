import Comment from "@/models/Comment";
import IndividualComment from "./IndividualComment";
import dbConnect from "@/lib/mongodb";

export default async function CommentSection({articleInfo}) {
    await dbConnect();
    const articleTitle = articleInfo.title;
    const comments = await Comment.find({article: articleTitle}).sort({createdAt: -1});

    return (
        <div className="mx-auto w-[min(92vw,650px)] pb-30">
            <h1 className="text-[#7a1b74] text-3xl font-batmip"><i>Comments</i></h1>

            {(comments.length > 0) && (
                <>
                    {comments.map((comment) => (
                        <IndividualComment key={comment._id} comment={comment} />
                    ))}
                </>
            )}

            {(comments.length == 0) && (
                <h2 className="mt-1 font-serif text-black">Nothing to see here yet. Be the first to comment!</h2>
            )}
            
        </div>
    );

}