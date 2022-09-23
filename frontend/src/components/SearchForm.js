
import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';



function SearchForm() {
    
    const [searchInput, setSearchInput] = useState('')

    function getSearchResults(query) {
        // console.log("query: ", query, query[0])
        // query = String(query)
        const url = "http://gateway.marvel.com/v1/public/characters?&nameStartsWith=" + query + "&ts=1&apikey=91e85c3b06b4658bfcbb6496f70a4a82&hash=9b58d5ae3e00a6cc57cf8c09cdf6d700"
        console.log(url)
        // const url = "https://gateway.marvel.com/v1/public/characters?name=thor&nameStartsWith=t&ts=1&apikey=91e85c3b06b4658bfcbb6496f70a4a82&hash=9b58d5ae3e00a6cc57cf8c09cdf6d700"
        fetch(url)
        .then((res) => res.json())
        .then((json) => {
            console.log(json.data.results)
            setSearchInput(json.data.results)
        })
        .catch(console.error)
        console.log("API CALLED")
        // console.log(searchInput)
    }

    function handleSearch() {
        console.log('You clicked submit.');
        
        setSearchInput(searchInput.searchInput)
        console.log(searchInput.searchInput)

        getSearchResults(searchInput.searchInput)
        
    };


    return (
        <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value = {searchInput.searchInput}
                onChange={e => setSearchInput({searchInput: e.target.value})}
            />
            <Button variant="outline-success" onClick={handleSearch}> Search</Button>
        </Form>
    )    
}

export default SearchForm;