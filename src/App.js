import React from 'react';
import BingoCard from './components/BingoCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bingo code</h1>
      </header>
      <main className='App-main'>
        <BingoCard />
      </main>
    </div>
  );
}

export default App;
