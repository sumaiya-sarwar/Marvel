
import './App.css';
import Header from "./components/Header";
import {Route, Routes } from "react-router-dom";
import Character from './components/Character';
import Home from './pages/Home';
import Characters from './pages/charactersList';
import CharacterPage from './pages/charactersPage';

function App() {
  return (
    <div>
     
      <Header/>
      <Characters />
        <Routes >
          <Route path = "/" element={<Home/>} />
          <Route index element='/:idx' element={<Character/>} />
      
        </Routes>
      
    </div>
  );
}

export default App;
