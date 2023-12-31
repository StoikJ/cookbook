import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import Recipe from "./pages/Recipe";
import ShoppingList from "./pages/ShoppingList"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/shoppinglist" element={<ShoppingList />} />
      </Routes>
    </BrowserRouter>
  );
}

/*export default App;
function App() {
  return (
    <div className=" w-screen text-white text-3xl font-bold underline bg-zinc-900 ">
      <h1>Cook Book </h1>
    </div>
  );
}*/


