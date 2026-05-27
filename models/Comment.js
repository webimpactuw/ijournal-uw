import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
 { //content
   user: { type: String, required: true },
   commentText: { type: String, required: true },
   article: { type: String, requried: true },
   reactions: {
      like: { 
        type: Boolean,
        default: false, required: true
      },
      clap: { 
        type: Boolean,
        default: false, required: true
      },
      heart: { 
        type: Boolean,
        default: false, required: true
      },
      idea: { 
        type: Boolean,
        default: false, required: true
      },
   }
   
 }, 
 { timestamps: true }
);

export default mongoose.models.Comment ||
 mongoose.model("Comment", CommentSchema);
