import React, { Component } from 'react';

class Editor extends Component {
  bold = () => {
    document.execCommand('bold', false, null);
  };

  render() {
    return (
      <div>
        <button onClick={this.bold}>bold</button>
        <div contentEditable="true">This text can be edited by the user.</div>
      </div>
    );
  }
}

export default Editor;
