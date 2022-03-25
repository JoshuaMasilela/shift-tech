import Navbar from "./components/NavBar/Navbar";
import { navObj } from "./components/ObjData";
import HomeScreen from "./screens/home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewEditScreen from "./screens/edit";


function App() {
  return (
 <Router>
   <Routes>
     <Route
     path="/"
     exact
     element={<HomeScreen/>}/>

     <Route
     path="/edit_user/:id"
     exact
     element={<ViewEditScreen/>}/>
   </Routes>
 </Router>
  );
}

export default App;
