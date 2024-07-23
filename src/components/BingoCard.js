import React from 'react';
import './BingoCard.css';

const BingoCard = () => {
  const words = ["あか", "あお", "りんご", "みどり", "とけい"];
  const rows = 5;
  const cols = 5;

  // シャッフル関数
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // 25個のランダムな単語リストを作成
  let randomWords = [];
  while (randomWords.length < rows * cols) {
    randomWords = randomWords.concat(shuffleArray([...words]));
  }
  randomWords = randomWords.slice(0, rows * cols);

  const grid = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(<div key={`${i}-${j}`} className="cell">{randomWords[i * cols + j]}</div>);
    }
    grid.push(<div key={i} className="row">{row}</div>);
  }

  return (
    <div className="bingo-card">
      {grid}
    </div>
  );
};

export default BingoCard;
