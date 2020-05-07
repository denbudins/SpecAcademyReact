import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

import Home from './pages/Home';
import Events from './pages/Events';
import Speakers from './pages/Speakers';
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
      <Header/>
      <Main>
        <Route exact path='/' component={Home}/>
        <Route path='/events' component={Events}/>
        <Route path='/speakers' component={Speakers}/>
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login}/>
      </Main>
    </div>
  );
}

export default App;
