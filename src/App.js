import './App.css';
import React from 'react';

import Nav from "./components/Nav";
import Home from "./components/Home";
import Aulas from "./components/Aulas";
import Sobre from "./components/Sobre";
import Aula from "./components/Aula"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path="/sobre">
            <Sobre />
          </Route>
          <Route>
            <Aula />
          </Route>
          <Route path="/aulas/:id">
            <Aulas />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App
