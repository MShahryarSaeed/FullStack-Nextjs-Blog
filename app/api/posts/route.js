import Post from "@/models/Post";
import { NextResponse } from "next/server";
import DatabaseConnection from "@/utils/DatabaseConnection";

//POST-Create

export async function POST(request) {

    // Connect to Database
    await DatabaseConnection();

    // Get Payload 
    const data = await request.json();

    try {

        const post = await Post.create(data);

        // return NextResponse.json({post});
        return new NextResponse(JSON.stringify({ post }))

    } catch (error) {

        return new NextResponse(JSON.stringify({ message: error.message }), { status: 500,});

    }
}

//GET - Lists all posts

export async function GET(request){

    // Connect to Database
    await DatabaseConnection();

    try{

        const posts = await Post.find();

        return new NextResponse(JSON.stringify({ posts }));
        

    }catch(error){

        return new NextResponse(JSON.stringify({ message: error.message }), {
            status: 500,
          });


    }
}