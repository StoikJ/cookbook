import React, { useEffect, useState } from 'react'
import Recipe from '../components/Recipe';

export default function RecipePage(){
    const APP_ID = "663a0cf4";
    const APP_KEY = "4109f40935f4df57d2eba7fd5b2a588f";
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken");
    useEffect(() => {
        const getRecipes = async () => {
        const response = await fetch
            (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
      setRecipes(data.hits);
      // console.log(data);
    
    };
      getRecipes();
    }, [query])
    
    const updateSearch = e => {
      setSearch(e.target.value);
    };
    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch("");
    }
    
    return (
      <div className="App">
        <form className="mt-8 space-y-6" onSubmit={getSearch}  >
          <input className="search-bar" type="text" value={search}
               onChange={updateSearch} />
          <button className="search-button" type="submit" >
               Search
          </button>
        </form>
        <div className="recipes">
          {recipes.map(recipe => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
    
          ))}
        </div>
    
      </div>
    );
  }