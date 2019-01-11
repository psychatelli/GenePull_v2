import React, { Component } from 'react';
import './App.css';
import  {BrowserRouter as Router, Route, Switch}  from 'react-router-dom';
import Nav from './components/Nav';
import PublicHome  from './pages/public/home';
import TestGrid  from './components/TestGrid';
import PublicGalleries from './pages/public/Galleries';
import Gallery from './pages/public/Gallery';
import Recipies from './pages/public/Recipies';
import Recipe from './pages/public/Recipe';


class App extends Component {
  render() {
    return (
        <Router>
          <div>

          <Nav/>
          <div className="Wrapper"> 
          <Route exact path="/" component={PublicHome} />
          <Route exact path="/galleries" component={PublicGalleries} />
          <Route exact path="/test-grid" component={TestGrid} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/recipies" component={Recipies} />
          <Route exact path="/recipe" component={Recipe} />

          </div>
          </div>
        </Router>
      
    );
  }
}

export default App;
