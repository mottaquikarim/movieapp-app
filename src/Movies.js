import React, { useState } from 'react';
import { MoviesList, } from './MoviesList'

const Movies = props => {
    const [movies, setMovies] = useState([])
    if (movies.length === 0) {
        fetch('http://localhost:5003/movies')
            .then(resp => resp.json())
            .then(data => {
                setMovies(data.data)
            })
    }

    return (<div className="container">
        <div className="row">
            <MoviesList data={movies} />
        </div>
    </div>)
}

export {Movies}
