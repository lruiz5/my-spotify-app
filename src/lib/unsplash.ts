import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export const randomImage = async () => {
  try {
    const response = await fetch(
      "https://source.unsplash.com/user/marius/1200x250"
    );
    if (response.ok) {
      const imageUrl = response.url;
      return NextResponse.json({ imageUrl }, { status: 200, statusText: "OK" });
    } else {
      throw new Error("Failed to fetch image");
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch image." },
      { status: 500, statusText: "Failed to fetch image." }
    );
  }
};
