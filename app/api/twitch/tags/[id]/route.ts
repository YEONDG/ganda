import { NextResponse } from "next/server"

import { db } from "@/lib/db"

export async function GET(
  req: Request,

  { params }: { params: { id: string } }
) {
  try {
    const tagId = Number(params.id)

    const twitchTag = await db.twitchPost.findMany({
      where: {
        tags: {
          some: {
            id: tagId,
          },
        },
      },
      include: {
        likes: true,
        tags: true,
        author: {
          select: {
            username: true,
          },
        },
      },
    })

    return NextResponse.json(twitchTag)
  } catch (error) {
    console.log("[Twitch_Tags_GET]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}
