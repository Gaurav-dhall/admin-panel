import { NextResponse } from "next/server";
import Post from "@/models/Post";
import { connectDB } from "@/lib/db";

export async function GET(request) {
    try {
        await connectDB();
        const posts = await Post.find({}).sort({ createdAt: -1 });
        
        return NextResponse.json({ success: true, data: posts }, { status: 200 });
      } catch (error) {
        console.error('Error fetching posts:', error);
        return NextResponse.json(
          { success: false, message: 'Failed to fetch posts' },
          { status: 500 }
        );
      }
}
