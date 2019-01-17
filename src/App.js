import React, { Component } from 'react';
import './App.css';
import  {BrowserRouter as Router, Route, Switch}  from 'react-router-dom';
import Nav from './components/Nav';
import PublicHome  from './pages/public/Home';
import TestGrid  from './components/TestGrid';
import PublicGalleries from './pages/public/Galleries';
import Gallery from './pages/public/Gallery';
import Recipies from './pages/public/Recipies';
import Recipe from './pages/public/Recipe';
import Health from './pages/public/Health';
import Tree from './pages/public/Tree';
import FullTree from './pages/public/Tree/fullTree';
import GrandparentsTree from './pages/public/Tree/grandparents';



class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Nav/>
              <div className="Wrapper"> 
              <Route exact path="/profile" component={PublicHome} />
              <Route exact path="/galleries" component={PublicGalleries} />
              <Route exact path="/test-grid" component={TestGrid} />
              <Route exact path="/gallery" component={Gallery} />
              <Route exact path="/recipies" component={Recipies} />
              <Route exact path="/recipe" component={Recipe} />
              <Route exact path="/health-watch" component={Health} />
              <Route exact path="/tree" component={Tree} />
              <Route exact path="/tree/familyHub" component={FullTree} />
              <Route exact path="/tree/grandparents" component={GrandparentsTree} />

              </div>
          </div>
        </Router>
      
    );
  }
}

export default App;
