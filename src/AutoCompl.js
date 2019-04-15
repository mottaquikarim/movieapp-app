import React, { Component, useState } from 'react';

import { Button, InputGroup, Input } from 'reactstrap';

import { MoviesList, } from './MoviesList'

const AutoCompl = props => {
    const [query, setQuery] = useState([]);

    const onChange = e => {
        const {value} = e.target;
        fetch(`http://localhost:5003/movies/search/${value}`)
            .then(resp => resp.json())
            .then(data => setQuery(data.data))
    }

    return <InputGroup>
        <Input placeholder="Search for a movie..." onChange={onChange} />
        <MoviesList data={query} />
    </InputGroup>
};

export {AutoCompl};
