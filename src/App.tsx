import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import ReduxCounter from './containers/ReduxCounter';

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
