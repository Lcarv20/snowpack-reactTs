import React, { useState, useEffect } from 'react';
import LogoIcon from './logoIcon.svg';
import './App.scss';
import { funq } from './funq';
import { Button, Checkbox } from '@material-ui/core';

function App() {
  // Create the count state.

  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <header className="App-header">
        <LogoIcon className="App-logo" />
        <p>
          Edit
          <Button variant="outlined" color="secondary">
            src/App.tsx
          </Button>
          <Checkbox />
          and save to reload.
        </p>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
        <div className="bubb">
          <p>
            This is a custom <code>diveiro</code>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
