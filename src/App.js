import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import {StateProvider} from './context';
import {MyNavbar} from './Navbar';
import {Home} from './Home';
import {Movies} from './Movies';
import {Genre} from './Genre';

const App = props => {
    return (<div>
        <StateProvider>
            <HashRouter>
                <Route path='/' component={MyNavbar} />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/movies' exact component={Movies} />
                    <Route path='/genres' component={Genre} />
                </Switch>
            </HashRouter>
        </StateProvider>
    </div>)
}

export default App;
