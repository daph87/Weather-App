/** @format */

import React from "react";
import {
  BrowserRouter as Router,
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
            <Route exact path='/' component={Home} />
            <Route exact path='/favorites' component={Favorites} />
            <Redirect exact from='/' to='home' />
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default Layout;
