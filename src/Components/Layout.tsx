/** @format */

import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Favorites from "./Favorites/FavoritesCities";
import Header from "./Header/Header";
import Home from "./Home/Home";

const Layout: React.FC = () => {
  return (
    <div className='layout'>
      <Router>
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route exact path='/favorites' component={Favorites} />
            <Route exact path='/' component={Home} />
            <Redirect exact from='/' to='home' />
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default Layout;
