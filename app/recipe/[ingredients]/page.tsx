/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
type Props = {};
type Data = Recipe[];
type Recipe = {
  title: string;
  ingredients: string[];
  instructions: string[];
};

function page({}: Props) {
  const { ingredients } = useParams();
  const [data, setData] = useState([] as Data);
  console.log(data);
  let bodyContent = {
    ingredients: ingredients,
  };
  let headersList = {
    Accept: "*/*",
  };

  useEffect(() => {
    fetch(`/api/generate`, {
      method: "POST",
      body: JSON.stringify(bodyContent),
      headers: headersList,
    })
      .then((res) => res.json())
      .then((res) => setData(JSON.parse(res!.choices[0]!.message.content)));
  }, [ingredients]);
  return (
    <div>
      <h2>
        {data &&
          data.map((item, index) => {
            return (
              <div key={index}>
                <h2>{item.title}</h2>
                <div>{item.ingredients.map((i) => i)}</div>
              </div>
            );
          })}
      </h2>
    </div>
  );
}

export default page;
