import React, { useState } from 'react';
import { Stars } from "./Stars";

import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const MovieId = props => {
    const [movie, setMovie] = useState({})
    if (!movie.id) {
        fetch('http://localhost:5003/movies/'+props.match.params.id)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setMovie(data.data)
            })
    }

    return (<div className="container">
        <div className="row">
            <div className="col-sm-4">
                <img src={movie.image_url} style={{width: "100%"}} />
            </div>
            <div className="col-sm-8">
                <h1>{movie.title}</h1>
                <Stars avg_rating={movie.avg_rating || 0} />
                <Button>
                    <Link to={`/genres/${movie.genre_id}`} style={{color: 'white'}}>{movie.genre_name}</Link>
                </Button>
            </div>
        </div>
    </div>)
}

export {MovieId}
