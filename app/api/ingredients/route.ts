import { NextResponse } from "next/server";
export const GET = async (req: Request) => {
  try {
    const result = await fetch(
      "www.themealdb.com/api/json/v1/1/list.php?i=list"
    );
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.error();
  }
};
