import React, { Component } from 'react';
import SpeechRecognition from 'react-speech-recognition';

// Todo: Add propTypes
//const propTypes = {
// // Props injected by SpeechRecognition
//transcript: PropTypes.string,
//resetTranscript: PropTypes.func,
//browserSupportsSpeechRecognition: PropTypes.bool,
//};

class Speech extends Component {
  onTalk = transcript => {
    //transcript.stopPropagation();
    console.log('onTalk called');
    console.log('transcript', transcript);
    console.log('props', this.props);
    console.log(typeof this.props.editor);
    // this.props.editor.change(change => {
    //   change.insertText(transcript);
    // });
    if (typeof this.props.editor !== 'undefined' && transcript !== '') {
      console.log(typeof this.props.editor);
      this.props.editor.change(change => {
        change.insertText(transcript);
      });
    }
  };

  render() {
    const {
      transcript,
      resetTranscript,
      browserSupportsSpeechRecognition,
    } = this.props;

    if (!browserSupportsSpeechRecognition) {
      return null;
    }

    return (
      <div>
        <p className="App-intro">Speech Recognition</p>
        <button onClick={resetTranscript}>Reset</button>
        <span name="Speech" onChange={this.onTalk(transcript)}>
          {transcript}
        </span>
      </div>
    );
  }
}

// Speech.propTypes = propTypes;

export default SpeechRecognition(Speech);
