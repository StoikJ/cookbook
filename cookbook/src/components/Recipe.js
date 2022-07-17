import React from "react";
  
const Recipe = ({title,calories,image,ingredients}) =>{
    return(
        <div class="flex">
            <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
    <a href="#_" class="block">
    <img class="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-56" src={image}/>
    </a>
<div class="bg-yellow-400 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
    <span>Nutrition</span>
</div>
<h2 class="text-lg font-bold sm:text-xl md:text-2xl">{title}</h2>
<ol class="list text-sm text-gray-500">
{ingredients.map(ingredient=>(
    <li>{ingredient.text}</li>
))}</ol>
<p class="pt-2 text-xs font-medium"><span class="mx-1">Calories : {calories}</span></p>
</div>
  
        </div>
    );
  
}
export default Recipe;
