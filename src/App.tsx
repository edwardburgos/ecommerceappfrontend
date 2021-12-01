import React from 'react';
import s from './App.module.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';

export default function App() {
  return (
    <div>
      <NavBar />
      <Home />
    </div>
  );
}
