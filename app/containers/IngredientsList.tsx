"use client";
import meals from "../../constants/ingredients.json";
import { Meal } from "@/types";
import IngredientCard from "../components/IngredientCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type Props = {};

function IngredientsList({}: Props) {
  const data = meals.meals; // getting array of ingredients
  const [selectedList, setSelectedList] = useState<Meal[]>([] as Meal[]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchList, setSearchList] = useState([] as Meal[]);

  function removeItem(arr: Meal[], value: Meal) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
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
    <div>
      <div>
        <h4>Selected Items</h4>
        <div className="flex flex-wrap">
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
