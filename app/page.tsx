async function getIngredients() {
  const res = await fetch("/api/ingredients");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Home() {
  const data = await getIngredients();
  console.log(data);
  return <main>{data}</main>;
}
