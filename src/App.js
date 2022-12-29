import React from 'react'
import { useState, useEffect } from 'react'
import SearchIcon from './search.svg'
import './App.css'
import MovieCard from './MovieCard.jsx'
//import
//9c234eef

const API_URI = 'http://omdbapi.com?apikey=9c234eef'


const movie1 = {
    "Title": "Spiderman the Verse",
    "Year": "2019–",
    "imdbID": "tt12122034",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg"
}
const App = () => {
    const [movie, setMovie] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const searchMovie = async (title) => {
        const response = await fetch(`${API_URI}&s=${title}`)
        const data = await response.json();
        setMovie(data.Search);
    }

    useEffect(() => {
        searchMovie('Spiderman')
    },[])

    return (

        <div className='app'>
            <h1>
                   MovieHome
            </h1>
            <div className='search'>
                <input placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                >

                </input>
                <img src={SearchIcon} alt='Search' onClick={() => searchMovie(searchTerm)}

                >

                </img>

            </div>
            {
                movie?.length > 0
                    ? (
                    <div className='container'

                        >
                            {movie.map((movie) => (
                                <MovieCard movie={movie}/>
                                ))}

                    </div>
                    ) : (
                        <div className='empty'>
                            <h2>No movies found</h2>
                        </div>

                        )
            }


           
        </div>
        )
}

export default App