import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Blog from './components/Blog'
import About from './components/About'


function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/about' exact component={About} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App