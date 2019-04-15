import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const Genre = props => {
    const [genres, setGenres] = useState([])
    if (genres.length === 0) {
        fetch('http://localhost:5003/genres')
            .then(resp => resp.json())
            .then(data => {
                setGenres(data.data)
            })
    }

    return (<div className="container">
        <div className="row">
            {genres.map(genre => {
                return <div style={{width: '100%'}}><strong>
                    <Link to={`/genres/${genre.id}`} style={{color: 'black'}}>{genre.name}</Link>
                </strong></div>
            })}
        </div>
    </div>)
}

export {Genre}
