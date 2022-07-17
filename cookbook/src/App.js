import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import Recipe from './pages/Recipe'

function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/recipe" element={<Recipe/>}  />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
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

export default App;
