import React from "react";

function Navbar() {
  return (
    <div style={{ backgroundColor: "#9c500e" }}>
      <h1>Cook Book</h1>
      <a style={{ margin: "10px", color: "white" }} class="nav-link" href="#">
        Home <span class="sr-only">(current)</span>
      </a>

      <a style={{ margin: "10px", color: "white" }} class="nav-link" href="#">
        Recipes
      </a>

      <a style={{ margin: "10px", color: "white" }} class="nav-link" href="#">
        Contact Us
      </a>

      <a style={{ margin: "10px", color: "white" }} class="nav-link" href="#">
        Login
      </a>
    </div>
  );
}
export default Navbar;
