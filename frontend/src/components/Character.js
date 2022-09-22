
// function Character({character}) {
//     console.log(character)
//     return (
//         <>
//         <h2>Character Name: {character.name}</h2>
//         <h2>{character.description}</h2>
//         <img src={character.thumbnails} alt={character.name} />
        
//         </>
//     )
// }

// export default Character;

import { useParams } from 'react-router-dom';

function Character() {

    let {id} = useParams()
    const url = "http://gateway.marvel.com/v1/public/characters/characterId=" + id + "&ts=1&apikey=91e85c3b06b4658bfcbb6496f70a4a82&hash=9b58d5ae3e00a6cc57cf8c09cdf6d700"
    // const [characters, setCharacters] = useState([])
    return (
        <h2>Character Name</h2>
    )
}

export default Character;