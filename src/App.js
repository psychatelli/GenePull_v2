import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';
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

import Profile  from './pages/profile/Home';
import ProfileGalleries from './pages/profile/Galleries';
import ProfileGallery from './pages/profile/Gallery';
import ProfileRecipies from './pages/profile/Recipies';
import ProfileRecipe from './pages/profile/Recipe';
import ProfileHealth from './pages/profile/Health';
import ProfileTree from './pages/profile/Tree';
import ProfileFullTree from './pages/profile/Tree/fullTree';
import ProfileGrandparentsTree from './pages/profile/Tree/grandparents';
// import { applyMiddleware } from '../../Library/Caches/typescript/3.1/node_modules/redux';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Nav/>
              <div className="Wrapper"> 
              <Route exact path="/public-profile" component={PublicHome} />
              <Route exact path="/galleries" component={PublicGalleries} />
              <Route exact path="/test-grid" component={TestGrid} />
              <Route exact path="/gallery" component={Gallery} />
              <Route exact path="/recipies" component={Recipies} />
              <Route exact path="/recipe" component={Recipe} />
              <Route exact path="/health-watch" component={Health} />
              <Route exact path="/tree" component={Tree} />
              <Route exact path="/tree/familyHub" component={FullTree} />
              <Route exact path="/tree/grandparents" component={GrandparentsTree} />


              <Route exact path="/profile" component={Profile} />
              <Route exact path="/profile/galleries" component={ProfileGalleries} />
              <Route exact path="/profile/gallery" component={ProfileGallery} />
              <Route exact path="/profile/recipies" component={ProfileRecipies} />
              <Route exact path="/profile/recipe" component={ProfileRecipe} />
              <Route exact path="/profile/health-watch" component={ProfileHealth} />
              <Route exact path="/profile/tree" component={ProfileTree} />
              <Route exact path="/profile/tree/familyHub" component={ProfileFullTree} />
              <Route exact path="/profile/tree/grandparents" component={ProfileGrandparentsTree} />


              </div>
          </div>
        </Router>
        </Provider>
      
    );
  }
}

export default App;
