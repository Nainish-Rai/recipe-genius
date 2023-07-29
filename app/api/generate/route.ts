import { NextResponse } from "next/server";

export const POST = async (req: any) => {
  try {
    const body = await req.json();
    console.log(body.ingredients);
    let headersList = {
      Accept: "*/*",
      Authorization: `Bearer ${process.env.API_KEY}`,
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a Chef",
        },
        {
          role: "user",
          content: `i have ${body.ingredients}. Give detailed recipes using these ingredients in JSON format in given schema {result:[{title:string,ingredients:[],instructions:[]}]}.Give only JSON response with no extra text`,
        },
      ],
    });

    let response = await fetch(process.env.API_URL!, {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    let data = await response.json();
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.error();
  }
};
