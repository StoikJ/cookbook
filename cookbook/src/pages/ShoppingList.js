import React from 'react'
function ShoppingList(){
    return(
        <div class="ShoppingList">
            <div class="bg-indigo-100 h-screen">
  
  <div>
    <h2 class="bg-indigo-500 text-gray-50 text-center max-w-2xl text-5xl shadow-xl font-medium m-auto mt-5 p-5 rounded-lg" >Shopping List</h2>
  </div>

  <div class="grid justify-items-center">
    <div class="bg-white text-center m-5 rounded-xl p-6 w-2/6">
      <div class="flex justify-between space-x-5">
        <h5 class="font-sans font-semibold text-2xl">Chicken</h5>
        <button class="bg-red-600 hover:bg-red-800 text-white rounded font-medium">Remove Item</button>
      </div>
    </div>
  </div>
  <div class="flex justify-center">
    <form>
      <div class="space-x-5">
          <input placeholder="Grocery Item" type="text" class="pl-2 p-2 border-2 border-indigo-300 rounded w-64"/>
          <button type="submit" class="bg-green-600 hover:bg-green-800 text-white rounded font-medium">Add New Item</button>
      </div>
    </form>
  </div>
</div>
        </div>
    )
}

export default ShoppingList