import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const twitchTags = await db.tag.findMany({
      include: {
        posts: true,
      },
    });

    const twitchTagsWithPostCount = twitchTags.map((tag) => ({
      ...tag,
      postCount: tag.posts.length,
    }));

    console.log(twitchTagsWithPostCount);
    return NextResponse.json(twitchTagsWithPostCount);
  } catch (error) {
    console.log('[Twitch_Tags_GET]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
