import Admin from "./Components/Admin";
import Welcome from "./Components/Welcome";
import Login from "./Components/Login";
import Sign from "./Components/Sign";
import User from "./Components/User";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Quiz from "./Components/Quiz";

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome/>}></Route>
      <Route path="/admin" element={<Admin/>}></Route>
      <Route path="/Signup" element={<Sign/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Quiz" element={<Quiz/>}></Route>
      <Route path="/User" element={<User/>}></Route>
    </Routes>
    </BrowserRouter>  
    </>
  );
}

export default App;
