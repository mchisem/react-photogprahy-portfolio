import React from 'react';
import { Button } from '@material-ui/core';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button color="primary">Maya Chisem</Button>
        <p>
          “You don’t take a photograph. You ask quietly to borrow it.”
          <code>— Unknown</code>
        </p>
        <a
          className="App-link"
          href=""
          // target="portfolio"
          // rel="noopener noreferrer"
        >
          Enter
        </a>
      </header>
    </div>
  );
}

export default App;
