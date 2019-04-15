import React, { useState } from 'react';

import { MoviesList, } from './MoviesList'

const GenreId = props => {
    const [genre, setGenre] = useState({})
    const [movies, setMovies] = useState([])

    if (!genre.id) {
        fetch('http://localhost:5003/genres/'+props.match.params.id)
            .then(resp => resp.json())
            .then(data => {
                setGenre(data.data)
                return fetch('http://localhost:5003/genres/'+props.match.params.id+'/movies')
            })
            .then(resp => resp.json())
            .then(data => {
                setMovies(data.data)
            })
    }

    return (<div className="container">
        <div className="row">
            <h1>{genre.name}</h1>
        </div>
        <div className="row">
            <MoviesList data={movies} />
        </div>
    </div>)
}

export {GenreId}
