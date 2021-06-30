import React, { useEffect, useState } from 'react';
import './App.css';
import characterCards from './characterCards';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import ScoreBoard from './components/ScoreBoard';

function App() {
  const [characters, setCharacters] = useState(characterCards);
  const [currentScore, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedChars, setClickChars] = useState([]);

  function shuffle(array) {
    //code from Stack Overflow
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  useEffect(() => {
    //best score
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }

    //shuffle characters
    setCharacters(shuffle(characters));
  });

  function findCharObj(id) {
    return characters.find((char) => {
      if (char.id === id) {
        return char;
      }
    });
  }

  function handleClick(e) {
    const currentChar = findCharObj(e.target.id);
    if (clickedChars.includes(currentChar.name)) {
      setScore(0);
      setClickChars([]);
    } else {
      setScore(currentScore + 1);
      clickedChars.push(currentChar.name);
    }
  }

  return (
    <div className="App">
      <Navbar />
      <ScoreBoard currentScore={currentScore} bestScore={bestScore} />
      <Cards handleClick={handleClick} characters={shuffle(characters)} />
    </div>
  );
}

export default App;
