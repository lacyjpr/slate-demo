import React, { Component } from 'react';
import './App.css';
//import Editor from './components/Editor';
import SlateEditor from './components/SlateEditor';

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
      </div>
    );
  }
}

export default App;
