import Navbar from "./components/NavBar/Navbar";
import { navObj } from "./components/ObjData";
import HomeScreen from "./screens/home";


function App() {
  return (
    <>
    <Navbar {...navObj}/>
       <HomeScreen/>
    </>
 
  );
}

export default App;
