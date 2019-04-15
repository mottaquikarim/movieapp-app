import React, { Component, useState } from 'react';

import { Jumbotron, } from 'reactstrap';
import {AutoCompl} from './AutoCompl';

const Home = props => {
    return (<div>
        <Jumbotron>
            <h1 className="display-3">Ripe Tomato 🍅 🍅 </h1>
            <AutoCompl {...props} />
        </Jumbotron>
    </div>)
}

export {Home}
