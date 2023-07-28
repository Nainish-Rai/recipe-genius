/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import meals from "../../constants/ingredients.json";
import { Meal } from "@/types";
import IngredientCard from "../components/IngredientCard";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type Props = {};

function IngredientsList({}: Props) {
  const router = useRouter();
  const data = meals.meals; // getting array of ingredients
  const [selectedList, setSelectedList] = useState<Meal[]>([] as Meal[]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchList, setSearchList] = useState([] as Meal[]);
  //   const [ingredientsList, setIngredientsList] = useState([] as string[]);
  //   const [ingredientsString, setIngredientString] = useState("");

  const handleClick = (meal: Meal) => {
    if (!selectedList.includes(meal)) {
      setSelectedList((prev) => [...prev, meal]);
    } else {
      setSelectedList((prev) => prev.filter((item) => item != meal));
    }
  };
  const isSelected = (meal: Meal) => {
    if (selectedList.includes(meal)) {
      return true;
    }
    return false;
  };

  return (
    <div className="">
      <div className="pl-2 my-2">
        <Button
          onClick={() => {
            const list = selectedList.map((item) => item.strIngredient);
            const stringlist = list.join(",");
            router.push(`/recipe/${stringlist}/`);
          }}
        >
          Generate Recipe
        </Button>
      </div>
      {selectedList.length != 0 && (
        <div>
          <h4 className="font-medium text-xl ml-4">Selected Items</h4>
          <div className="flex flex-wrap my-1">
            {selectedList.map((item: Meal, index) => {
              return (
                <IngredientCard
                  data={item}
                  variant="2"
                  handleClick={handleClick}
                  key={index}
                  isSelected={isSelected}
                />
              );
            })}
          </div>
        </div>
      )}
      <form className="ml-2">
        <input
          className="border p-2 border-black rounded-md mx-2"
          value={searchTerm}
          placeholder="search ingredients"
          onChange={(e) => {
            setSearchTerm(e.target.value);
            if (searchTerm != "") {
              setSearchList(
                data.filter((item) =>
                  item.strIngredient
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                )
              );
            }
          }}
          type="text"
          name=""
          id=""
        />
        <Button>Button</Button>
      </form>
      <div className="flex flex-wrap">
        {searchTerm == ""
          ? data.map((item: Meal, index) => {
              return (
                <IngredientCard
                  data={item}
                  handleClick={handleClick}
                  isSelected={isSelected}
                  key={index}
                />
              );
            })
          : searchList.map((item: Meal, index) => {
              return (
                <IngredientCard
                  data={item}
                  handleClick={handleClick}
                  isSelected={isSelected}
                  key={index}
                />
              );
            })}
      </div>
    </div>
  );
}

export default IngredientsList;
