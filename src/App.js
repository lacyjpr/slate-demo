import React, { Component } from 'react';
import './App.css';
//import Editor from './components/Editor';
import SlateEditor from './components/SlateEditor';
import Speech from './components/Speech';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <p className="App-intro">Roll your own:</p>
        <Editor /> */}
        <p className="App-intro">
          Slate.js:(use ctrl-b for bold, ctrl-i for italic)
        </p>
        <SlateEditor />
        <p className="App-intro">Speech Recognition:</p>
        <Speech />
      </div>
    );
  }
}

export default App;
