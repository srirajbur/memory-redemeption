import React, { useState } from 'react';

const ScoreBoard = (props) => {
  const { currentScore, bestScore } = props;
  const styles = {
    textAlign: 'right',
    fontSize: '2rem',
    marginRight: '2rem',
  };

  return (
    <div className="scoreboard" style={styles}>
      <div>Score: {currentScore}</div>
      <div>Best Score: {bestScore}</div>
    </div>
  );
};

export default ScoreBoard;
