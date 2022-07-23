import React, { useEffect, useState } from "react";
import GlobalHeader from "../components/GlobalHeader";
import Recipe from "../components/Recipe";

export default function RecipePage() {
  const APP_ID = "663a0cf4";
  const APP_KEY = "4109f40935f4df57d2eba7fd5b2a588f";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
      // console.log(data);
    };
    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <>
      <GlobalHeader />
      <div class="container w-screen h-screen">
        <form class="flex mt-8 " onSubmit={getSearch}>
          <input
            class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <button
            class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            type="submit"
          >
            Search
          </button>
        </form>
        <div class="grid grid-cols-4 ">
          {recipes.map((recipe) => (
            <Recipe
              url={recipe.recipe.url}
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    </>
  );
}
