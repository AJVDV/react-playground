import React, { Component } from 'react';
import { Route, Switch } from './react-router-dom';
import './App.css';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import WorkoutsPage from './WorkoutsPage';
import NotFoundPage from './NotFoundPage';

export default class App extends Component {
  render() {
    return (
      <div className='App' >
        <header>
          <Nav />
          <Header />
        </header>
        <main>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/workouts' component={WorkoutsPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
