
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

function Character() {

    let {charId} = useParams()
    const url = "http://gateway.marvel.com/v1/public/characters/" + charId + "?&ts=1&apikey=91e85c3b06b4658bfcbb6496f70a4a82&hash=9b58d5ae3e00a6cc57cf8c09cdf6d700"
    const [character, setCharacter] = useState([])

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((json) => {
            setCharacter(json.data.results[0]) // the results array has only one element which is an object containing the info on the character
        })
        .catch(console.error)
    }, []);
    console.log(character)
    console.log(character.name)


    return (
        <div>
            <br></br>
            {/* Note: The image loads the first time but then if you try to reload or open link for another character, nothing shows 
            because the character.thumbnail.path below gives error. The error is : "Uncaught TypeError: Cannot read properties of undefined (reading 'path')".
            This means that after an image loads the first time, second time when reloaded, the path property where the url is becomes undefined causing the issue. */}
            <img src= {String(character.thumbnail.path) + ".jpg"} alt={character.name} width="200" height="200"/>
            <h3> Name: {character.name}</h3>
            <h3> Id: {charId} </h3>
            <h3> Description: </h3> 
            <p> {character.description} </p>
        </div>
    )
}

export default Character;