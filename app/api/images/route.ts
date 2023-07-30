import { NextResponse } from "next/server";
import google from "googlethis";
export const GET = async (req: Request) => {
  let query = req.url.split("?q=")[1];
  console.log(query);
  try {
    const images = await google.image(query, { safe: false });
    console.log(images);
    const lessimages = images.slice(0, 4);
    return NextResponse.json(lessimages);
  } catch (error) {
    return NextResponse.error();
  }
};
