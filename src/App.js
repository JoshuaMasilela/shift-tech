import Navbar from "./components/NavBar/Navbar";
import { navObj } from "./components/ObjData";
import HomeScreen from "./screens/home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewEditScreen from "./screens/edit";
import BannedScreen from "./screens/banned";


function App() {
  return (
    <Router>
      <Navbar {...navObj} />
      <Routes>
        <Route
          path="/"
          exact='true'
          element={<HomeScreen />} />
        <Route
          path="/banned"
          exact='true'
          element={<BannedScreen />} />

        <Route
          path="/edit_user/:id"
          exact='true'
          element={<ViewEditScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
