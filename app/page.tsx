import IngredientsList from "./containers/IngredientsList";

export default function Home() {
  return (
    <main className="w-full">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className=" font-semibold text-4xl  text-center">
          Select Ingredients
        </h2>
        <div>
          <IngredientsList />
        </div>
      </div>
    </main>
  );
}
