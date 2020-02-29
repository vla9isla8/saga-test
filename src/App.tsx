import React from 'react';
import './App.css';
import ReduxCounter from './containers/ReduxCounter';
import logo from './logo.svg';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ReduxCounter/>
    </div>
  );
}

export default App;
