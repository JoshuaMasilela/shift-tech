import Navbar from "./components/NavBar/Navbar";
import { navObj } from "./components/StaticData";
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
