import React, { useState } from 'react';
import './Game.css';

const choices = ['rock', 'paper', 'scissors'];

export default function Game() {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const playGame = (choice) => {
    const computer = choices[Math.floor(Math.random() * 3)];
    setPlayerChoice(choice);
    setComputerChoice(computer);

    if (choice === computer) {
      setResult('Draw!');
    } else if (
      (choice === 'rock' && computer === 'scissors') ||
      (choice === 'paper' && computer === 'rock') ||
      (choice === 'scissors' && computer === 'paper')
    ) {
      setResult('You Win!');
      setPlayerScore(playerScore + 1);
    } else {
      setResult('Computer Wins!');
      setComputerScore(computerScore + 1);
    }
  };

  return (
    <div className="game-container">
      <h1>Rock Paper Scissors</h1>
      <div className="choices">
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => playGame(choice)}
            className="choice-button"
          >
            <i className={`fas fa-hand-${choice} fa-2x`}></i>
            <span className="choice-text">{choice}</span>
          </button>
        ))}
      </div>

      <div className="results">
        <p>Player: {playerChoice || '-'}</p>
        <p>Computer: {computerChoice || '-'}</p>
        <h2>{result}</h2>
        <p>Score - You: {playerScore} | Computer: {computerScore}</p>
      </div>
    </div>
  );
}
