import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Comment from "@/models/Comment";

export async function GET() {
    await dbConnect();
    const comments = await Comment.find({});
    return NextResponse.json(comments);
}

export async function POST(req) {
    await dbConnect();

    const { commentId, reaction } = await req.json();
    await Comment.findByIdAndUpdate(commentId, {
        $set: {
        [`reactions.${reaction}`]: true
        }
    });
    return NextResponse.json({success: true});
}