/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { ImageMain } from "@/types";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  item: {
    title: string;
    ingredients: string[];
    instructions: string[];
  };
  index: number;
};

function RecipeCard({ item, index }: Props) {
  const [imgs, setImgs] = useState([] as ImageMain[]);
  console.log(imgs);
  const fetchImage = (query: string) => {
    fetch(`/api/images/?q=${query} dish images`)
      .then((res) => res.json())
      .then((res) => setImgs(res));
  };

  useEffect(() => {
    fetchImage(item.title);
  }, []);
  return (
    <div className="shadow-md border p-4 px-6 rounded-2xl my-2" key={index}>
      <h2 className="font-semibold text-5xl my-2">{item.title}</h2>
      <div className="pl-1">
        <div className="h-100 flex">
          <div className="my-4 w-full max-w-md">
            <h4 className="font-medium text-xl underline py-1">
              Ingredients Required
            </h4>
            <ul className="ml-4">
              {item.ingredients.map((i, index3) => (
                <li key={index3} className="my-1 list-disc">
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className=" columns-2 w-full flex-wrap">
            {imgs != null &&
              imgs != undefined &&
              imgs.map((item, i) => {
                return (
                  <Image
                    key={i}
                    src={item.url}
                    height={item.height}
                    width={item.width}
                    className="h-48 w-full    rounded-lg p-1"
                    alt=""
                  />
                );
              })}
          </div>
        </div>
        <div>
          <h4 className="font-medium text-xl underline my-2">Instructions</h4>
          <ul className="ml-4">
            {item.instructions.map((i, index2) => (
              <li key={index2} className="my-1 list-disc ">
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
