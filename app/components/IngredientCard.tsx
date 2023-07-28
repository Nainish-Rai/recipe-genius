import { Meal } from "@/types";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type Props = {
  data: Meal;
  handleClick: any;
  variant?: string;
  isSelected: (meal: Meal) => boolean;
};

function IngredientCard({ data, handleClick, variant, isSelected }: Props) {
  return (
    <HoverCard closeDelay={0}>
      <HoverCardTrigger
        onClick={() => handleClick(data)}
        className="w-1/6  h-60   p-4 "
      >
        <div
          className={`h-full w-full rounded shadow-md hover:border-black hover:cursor-pointer duration-100 border ${
            isSelected(data)
              ? " border-2 border-sky-500  hover:border-red-500"
              : "border-black"
          }`}
        >
          <div className="w-full h-full p-4">
            <Image
              src={`https://www.themealdb.com/images/ingredients/${data.strIngredient}-small.png`}
              height="200"
              width={100}
              className="p-1 w-full"
              alt="x"
            />
            <h4 className="text-center text-sm py-2 font-medium">
              {data.strIngredient}
            </h4>
          </div>
        </div>
      </HoverCardTrigger>
      {data.strDescription != null && variant != "2" && (
        <HoverCardContent side="bottom" avoidCollisions={false}>
          <p className="font-medium text-xs">{data.strDescription}</p>
        </HoverCardContent>
      )}
    </HoverCard>
  );
}

export default IngredientCard;
