import React, { Component } from 'react';

const Stars = props => {
    const {avg_rating} = props;
    const avg = Math.ceil(parseInt(avg_rating, 10));

    return (<div>
        {Array.from(new Array(avg).keys())
            .map(_ => <span>⭐</span>)}
    </div>)
}

export {Stars}
