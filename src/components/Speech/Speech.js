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
  // Only update if transcript has changed credit jenovs https://github.com/jenovs/slate-voice-demo
  componentDidUpdate(prevProps) {
    if (prevProps.transcript !== this.props.transcript) {
      this.onTalk(this.props.transcript);
    }
  }

  onTalk = (event, prevProps) => {
    //transcript.stopPropagation();
    console.log('onTalk called');
    console.log('transcript', event);
    console.log('props', this.props);
    console.log('prevProps', prevProps);
    console.log(typeof this.props.editor);

    // this.props.editor.change(change => {
    //   change.insertText(transcript);
    // });
    // if (transcript.target.name !== 'speech') {
    //   return;
    // }
    if (typeof this.props.editor !== 'undefined' && event !== '') {
      console.log('updating', typeof this.props.editor);
      console.log(event);
      this.props.editor.change(change => {
        change.insertText(event);
      });
      this.props.resetTranscript();
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
        {/* Infinity: onTalk fires every time SlateEditor updates, updating SlateEditor. */}
        <span value={transcript} id="speech">
          {transcript}
        </span>
      </div>
    );
  }
}

// Speech.propTypes = propTypes;

export default SpeechRecognition(Speech);
