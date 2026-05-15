import Comment from "@/models/Comment";
import IndividualComment from "./IndividualComment";
import dbConnect from "@/lib/mongodb";

export default async function CommentSection({articleInfo}) {
    await dbConnect();
    const articleTitle = articleInfo.title;
    const comments = await Comment.find({article: articleTitle});

    //TODO sort comments with newest at the top
    return (
        <div className="mx-auto w-[min(92vw,650px)] pb-30">
            <h1 className="text-[#7a1b74] text-3xl"><i>Comments</i></h1>
            {comments.map((comment) => (
                <IndividualComment key={comment._id} comment={comment} />
            ))}
        </div>
    );

}