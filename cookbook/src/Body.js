import React, { useEffect, useState } from "react";
import axios from "axios";


const [items, setitems] = useState([]);

function Body() {
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        console.log(res.data);

        setitems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemslist=items.map((obj) => {
    return (
      <div>
       <p>{obj.strMeal}</p>
        <img src={obj.strMealThumb} className="img-fluid" />
        <p>{obj.idMeal}</p>
      </div>
    );
  });

  return (
    <div>
      <div className="row">{itemslist}</div>
    </div>
  );
}

export default Body;
