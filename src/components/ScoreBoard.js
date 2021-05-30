import React, { useState } from 'react';

const ScoreBoard = (props) => {
  const { currentScore, bestScore } = props;

  return (
    <div className="scoreboard">
      <div>Current Score: {currentScore}</div>
      <div>Best Score: {bestScore}</div>
    </div>
  );
};

export default ScoreBoard;
