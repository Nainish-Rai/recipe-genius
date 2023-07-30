/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import RecipeCard from "@/app/containers/RecipeCard";
import { ImageMain } from "@/types";
import Image from "next/image";
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

  const [data, setData] = useState([
    // {
    //   title: "Paneer Tikka",
    //   ingredients: [
    //     "200g paneer",
    //     "1 capsicum",
    //     "1 onion",
    //     "1 tomato",
    //     "2 tbsp yogurt",
    //     "1 tbsp ginger-garlic paste",
    //     "2 tsp tikka masala",
    //     "1 tsp turmeric powder",
    //     "1 tsp red chili powder",
    //     "1 tsp cumin powder",
    //     "1 tsp coriander powder",
    //     "Salt to taste",
    //     "2 tbsp oil",
    //   ],
    //   instructions: [
    //     "Cut paneer, capsicum, onion, and tomato into cubes.",
    //     "In a bowl, mix yogurt, ginger-garlic paste, tikka masala, turmeric powder, red chili powder, cumin powder, coriander powder, and salt.",
    //     "Add the paneer, capsicum, onion, and tomato to the marinade. Mix well and refrigerate for 30 minutes.",
    //     "Heat oil in a pan and cook the marinated paneer and vegetables until golden brown.",
    //     "Serve hot as an appetizer or with roti or naan.",
    //   ],
    // },
    // {
    //   title: "Palak Paneer",
    //   ingredients: [
    //     "200g paneer",
    //     "2 cups spinach (palak)",
    //     "1 onion",
    //     "1 tomato",
    //     "2 tbsp oil",
    //     "1 tbsp ginger-garlic paste",
    //     "1 tsp cumin seeds",
    //     "1 tsp turmeric powder",
    //     "1 tsp red chili powder",
    //     "1 tsp garam masala",
    //     "Salt to taste",
    //   ],
    //   instructions: [
    //     "Blanch the spinach in boiling water for 2 minutes. Drain and blend it into a smooth paste.",
    //     "Heat oil in a pan and add cumin seeds. Once they splutter, add onion and ginger-garlic paste. Saute until golden brown.",
    //     "Add tomatoes and cook until they turn soft.",
    //     "Add turmeric powder, red chili powder, garam masala, and salt. Mix well.",
    //     "Add the spinach paste and cook for 5 minutes.",
    //     "Add paneer cubes and cook for an additional 2 minutes.",
    //     "Serve hot with rice or roti.",
    //   ],
    // },
  ] as Data);

  let bodyContent = {
    ingredients: ingredients,
    language: "english",
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
      .then((res) =>
        setData(JSON.parse(res.choices[0].message.content).result)
      );
  }, [ingredients]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2>
        {data &&
          data.map((item, index) => {
            return <RecipeCard key={index} item={item} index={index} />;
          })}
      </h2>
    </div>
  );
}

export default page;
