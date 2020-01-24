import React from 'react';
import './App.css';
import Friend from './components/Friend'
import DogGallery from './components/PhotoGallery/DogGallery'
import RandomJoke from './components/Joke/RandomJoke'

function App() {
  return (
    <div className="App">
      <Friend />
      <DogGallery />
      <RandomJoke />
    </div>
  );
}

export default App;
