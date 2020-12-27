import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CHART from './CHART'
import Nav from './Nav'
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'

ReactDOM.render(
  <Router>
  <div>
    <Nav />
    <Switch>
            <Route path="/Reactproject/" exact component={App}/>
            <Route path="/Reactproject/Home"  component={App} />
            <Route path="/Reactproject/Chart"  component={CHART}/>
            
    </Switch>
    </div>
    </Router>,
  document.getElementById('root')
);


