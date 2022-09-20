import * as React from 'react';
import { useState, useEffect } from 'react';
import './style.css';

function ResultDisplayer({ getNewResult }) {
  const [result, setResult] = useState(null);

  function handleClick() {
    setResult(getNewResult());
  }

  return (
    <div>
      <button id="button" onClick={() => handleClick()}>
        Click
      </button>
      {result != null && <span id="result">{result}</span>}
    </div>
  );
}

export default function App() {
  return <ResultDisplayer getNewResult={() => 'test'} />;
}
