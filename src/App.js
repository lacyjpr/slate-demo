import React, { Component } from 'react';
import './App.css';
//import Editor from './components/Editor';
import SlateEditor from './components/SlateEditor';
// import Speech from './components/Speech';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <p className="App-intro">Roll your own:</p>
        <Editor /> */}
        <p className="App-intro">
          ctrl-b for bold, ctrl-i for italic
        </p>
        <SlateEditor ref={editor => (this.editor = editor)} />
        {/* <p className="App-intro">Speech Recognition:</p> */}
        {/* <Speech editor={this.editor} /> */}
      </div>
    );
  }
}

export default App;
