import './App.css';
import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Navbar from './components/Navbar';
import ScoreBoard from './components/ScoreBoard';
import Cards from './components/Cards';
import arthur from './assets/arthur.png';
import charles from './assets/charles.png';
import dutch from './assets/dutch.png';
import hosea from './assets/hosea.png';
import john from './assets/john.png';
import josiah from './assets/josiah.png';
import lenny from './assets/lenny.png';
import micah from './assets/micah.png';
import sadie from './assets/sadie.png';
import sean from './assets/sean.png';
import tilly from './assets/tilly.png';
import uncle from './assets/uncle.png';

function App() {
  const [characters, setCharacters] = useState([
    { name: 'arthur', picture: arthur, id: nanoid() },
    { name: 'charles', picture: charles, id: nanoid() },
    { name: 'dutch', picture: dutch, id: nanoid() },
    { name: 'hosea', picture: hosea, id: nanoid() },
    { name: 'john', picture: john, id: nanoid() },
    { name: 'josiah', picture: josiah, id: nanoid() },
    { name: 'lenny', picture: lenny, id: nanoid() },
    { name: 'micah', picture: micah, id: nanoid() },
    { name: 'sadie', picture: sadie, id: nanoid() },
    { name: 'sean', picture: sean, id: nanoid() },
    { name: 'tilly', picture: tilly, id: nanoid() },
    { name: 'uncle', picture: uncle, id: nanoid() },
  ]);

  const [currentScore, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedChars, setClickChars] = useState([]);

  useEffect(() => {
    function shuffle(array) {
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

    setCharacters(shuffle(characters));
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  });

  function findCharObj(id) {
    return characters.find((char) => {
      if (char.id === id) {
        return char;
      }
    });
  }

  function handleClick(e) {
    //find current character obj
    //check if name is included in clickedChars? currentscore = 0 && clickedArray = []: currentscore + 1

    console.log(e.target.parentElement.id);
    console.log(e.target);
    const currentChar = findCharObj(e.target.parentElement.id);
    console.log(currentChar);
    if (clickedChars.includes(currentChar.name)) {
      setScore(0);
      setClickChars([]);
    } else {
      setScore(currentScore + 1);
      clickedChars.push(currentChar.name);
      console.log(clickedChars);
    }
  }

  return (
    <div className="App">
      <Navbar />
      <ScoreBoard currentScore={currentScore} bestScore={bestScore} />
      <Cards handleClick={handleClick} characters={characters} />
    </div>
  );
}

export default App;
