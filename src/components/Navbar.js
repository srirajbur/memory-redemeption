import React from 'react';
import '../App.css';

const Navbar = (props) => {
  const { currentScore, bestScore } = props;
  return (
    <nav>
      <h2>Memory Redemption</h2>
      <div className="scoreboard">
        <div>Score: {currentScore}</div>
        <div>Best Score: {bestScore}</div>
      </div>
    </nav>
  );
};

export default Navbar;
