import { NextResponse } from "next/server";
import { prisma } from "../../client";

type Params = { params: { id: string } };

export async function PATCH(request: Request, { params }: Params) {
  try {
    const { id } = params;
    const { title, content } = await request.json(); // get title and content from request body object
    const post = await prisma.post.update({
      where: { id: id },
      data: { title, content },
    }); // sending information to the database
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error("request error", error);
    return NextResponse.json({ error: "error updating post" }, { status: 500 });
  }
}