import React from 'react'
import { useState, useEffect } from 'react'
//import
//9c234eef

const API_URI ='http://omdbapi.com?apikey=9c234eef'

const App = () => {
    const searchMovie = async (title) => {
        const response = await fetch(`${API_URI}&s=${title}`)
        const data = await response.json();
        console.log(data.Search);
    }

    useEffect(() => {
        searchMovie('Spiderman')
    },[])

    return (
        <h1>App</h1>
        )
}

export default App