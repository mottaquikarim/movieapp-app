import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import {StateProvider} from './context';
import {MyNavbar} from './Navbar';
import {Home} from './Home';
import {Movies} from './Movies';
import {MovieId} from './MovieId';
import {Genre} from './Genre';
import {GenreId} from './GenreId';

const App = props => {
    return (<div>
        <StateProvider>
            <HashRouter>
                <Route path='/' component={MyNavbar} />
                <div className="container">
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/movies' exact component={Movies} />
                        <Route path='/movies/:id' component={MovieId} />
                        <Route path='/genres' exact component={Genre} />
                        <Route path='/genres/:id' component={GenreId} />
                    </Switch>
                </div>
            </HashRouter>
        </StateProvider>
    </div>)
}

export default App;
