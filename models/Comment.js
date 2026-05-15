import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
 { //content
   user: { type: String, required: true },
   commentText: { type: String, required: true },
   article: { type: String, requried: true },
 }, 
 { timestamps: true }
);

export default mongoose.models.Comment ||
 mongoose.model("Comment", CommentSchema);
