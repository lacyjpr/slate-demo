import React, { Component } from 'react';
import './App.css';
import Editor from './components/Editor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">Roll your own</p>
        <Editor />
      </div>
    );
  }
}

export default App;
