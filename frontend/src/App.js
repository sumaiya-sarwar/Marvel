
import './App.css';
import Header from "./components/Header";
import {Route, Routes } from "react-router-dom";
import Character from './components/Character';
import Home from './pages/Home';
// import Characters from './pages/charactersList';
// import HomeSlider from './components/HomeSlider';
// import Navbar from './components/Navbar';
import NavComponent from './components/Navbar';




function App() {
  return (
    <div>
     
      <Header/>
      <NavComponent />

        <Routes >
          <Route index element={<Home/>} />
          <Route path = "/:charId" element={<Character/>} />
        </Routes>
        
      
    </div>
  );
}

export default App;
