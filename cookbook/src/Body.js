import React, { useEffect, useState } from "react";
import axios from "axios";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

const [items, setitems] = useState([]);

function Body() {
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>This is Body</h1>
    </div>
  );
}

export default Body;
