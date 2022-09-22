import React from 'react';
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import Characters from "./charactersPage"

function CharactersList () {
    const url = 'http://gateway.marvel.com/v1/public/characters?limit=50&ts=1&apikey=91e85c3b06b4658bfcbb6496f70a4a82&hash=9b58d5ae3e00a6cc57cf8c09cdf6d700'
    const [characters, setCharacters] = useState([])

useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((json) => {
        setCharacters(json.data.results)
    })
    .catch(console.error)
}, []);

return (
    <div>
        { characters ?
        characters.map((character) => {
            return (
                <Link key={character.id} to={`/${character.id}`}>
            <h1>{character.name}</h1>
            </Link>
            )
        }) : <h1>Loading...</h1>}
    </div>
)
}

export default CharactersList