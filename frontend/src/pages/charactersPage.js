import { useState, useEffect } from 'react';
import { useParams } from "react-router";
import Character from '../components/Character';

function CharacterPage() {
    
    const URL = 'https://gateway.marvel.com:443/v1/public/characters?apikey=91e85c3b06b4658bfcbb6496f70a4a82'
    const [character, setCharacter] = useState([]);

    const getCharacters = async () => {
        try{
            const res = await fetch(URL);
            const allCharacters = await res.json();
            console.log(allCharacters)
            setCharacter(allCharacters);
          } catch(err) {
            console.log(err);
        }
    }

useEffect(() => {
    getCharacters();
}, [])

return(
    <>
    <div>
    { character ?
        <div>
            <p>Name: {character.name}</p>
            <p>Description: {character.description}</p>
            <p>Thumbnail: {character.thumbnail}</p>
            <p>Comics: {character.comics}</p>
        </div>
       
    
          : <h1>Loading...</h1>}

          </div>
    </>
)

}
export default CharacterPage;