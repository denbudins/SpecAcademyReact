import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

import Home from './pages/Home';
import Events from './pages/Events';
import Speakers from './pages/Speakers';
import Registration from './pages/Registration';
import LogIn from './pages/LogIn';


function App() {
  return (
    <div className="App">
      <Header/>
      <Main>
        <Route exact path='/' component={Home}/>
        <Route path='/events' component={Events}/>
        <Route path='/speakers' component={Speakers}/>
        <Route path='/registration' component={Registration}/>
        <Route path='/login' component={LogIn}/>
      </Main>
    </div>
  );
}

export default App;
