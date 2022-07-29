import React from "react";

export default function Recipe ({ title, calories, image, ingredients, url }) {
  return (<>
  <section class=" h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden body-font">
    <div class="flex flex-wrap ">
      <div class="flex flex-col items-start col space-y-3 sm:col-span-6 xl:col-span-4">
        <a href={url} class="block">
          <img
            class="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-56"
            alt=""
            src={image}
          />
        </a>
        <div class="m-auto bg-orange-600 items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
          <span>Nutrition</span>
        </div>
        <h2 class="text-lg font-bold sm:text-xl md:text-2xl">{title}</h2>
        <ol class="list text-sm text-black-500">
          {ingredients.slice(0,5).map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
        <p class="pt-2 text-xs font-medium">
          <span class="mx-1">Calories : {calories}</span>
        </p>
      </div>
    </div>
   
  </section> </>);
};

