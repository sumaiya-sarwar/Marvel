import React from 'react';
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import '../App.css';
import {Card}from 'react-bootstrap';

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
    <div className="grid">
        { characters ?
        characters.map((character) => {
            return (
            
        <Link key={character.id} to={`/${character.id}`}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {String(character.thumbnail.path) + ".jpg"} alt="character's pic" width="200" height="200"/>
                <Card.Body>

                <Card.Text className="card-name">
                    {character.name}
                </Card.Text>
            
                </Card.Body>
            </Card>
    </Link>
    
    
        
      )
        }) : <h1>Loading...</h1>}
        
    </div>
)

}

export default CharactersList