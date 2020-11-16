import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./searchResult.css"
import MovieCard from "./MovieCard"
function SearchResult({title}) {
    const [Movies, setMovies] = useState([])

    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + title

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(urlString)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [urlString])

    console.log(Movies)


    return (
        <div className = "searchResult" >
            <h2>Search result for... <span className="searchResult__title">{title}</span></h2>
            <div className="searchResult__MovieList">
                {Movies.map(movie => {
                    return(
                        <MovieCard Movie = {movie} />
                    )
                })}
            </div>
        </div>
    )
}

export default SearchResult
