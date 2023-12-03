import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const ChuckNorrisJokesApp = () => {
  const [joke, setJoke] = useState('');
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true); 

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      setJoke(data.value);
      setIsButtonClicked(true);
    } catch (error) {
      console.error('Error fetching Chuck Norris joke:', error);
    }
  };

  const resetState = () => {
    setJoke('');
    setIsButtonClicked(false);
  };

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div className={`App ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <header className="App-header">
        <h1>Chuck Norris Jokes App</h1>
        <button className="btn btn-primary" onClick={fetchJoke}>
          Get Chuck Norris Joke
        </button>
        {isButtonClicked && (
          <div className="mt-4">
            <p className="lead">{joke}</p>
            <button className="btn btn-secondary" onClick={resetState}>
              Reset
            </button>
          </div>
        )}
        <button className="btn btn-info mt-4" onClick={toggleTheme}>
          Toggle Theme
        </button>
      </header>
    </div>
  );
};

export default ChuckNorrisJokesApp;
