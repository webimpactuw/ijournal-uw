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
    const body = await req.json();
    const comment = await Comment.create(body);
    return NextResponse.json(comment);
}
