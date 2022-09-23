import CharactersList from "./charactersList";
import HomeSlider from "../components/HomeSlider";

function Home() {
  return (
    <>
    <HomeSlider />
    <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '15vh', fontWeight: 'bold' }}> CHARACTERS LIST</h1>
    <CharactersList/>
    </>
  )
  }
  
export default Home;