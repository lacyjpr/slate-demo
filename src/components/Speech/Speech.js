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
  // Only update if transcript has changed. Credit: jenovs https://github.com/jenovs/slate-voice-demo
  componentDidUpdate(prevProps) {
    console.log('prevProps', prevProps);
    if (prevProps.finalTranscript !== this.props.finalTranscript) {
      this.onTalk(this.props.finalTranscript);
    }
  }

  micToggle = () => {
    !this.props.listening
      ? this.props.startListening()
      : this.props.stopListening();
  };

  onTalk = event => {
    //transcript.stopPropagation();
    console.log('onTalk called');
    console.log('transcript', event);
    console.log('props', this.props);
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
        change.insertText(event + ' ');
      });
      this.props.resetTranscript();
    }
  };

  render() {
    const {
      browserSupportsSpeechRecognition,
      listening,
      autoStart,
    } = this.props;

    if (!browserSupportsSpeechRecognition) {
      return null;
    }

    return (
      <div>
        {!listening ? (
          <button onClick={this.micToggle}>Listen</button>
        ) : (
          <button onClick={this.micToggle}>Stop Listening</button>
        )}
      </div>
    );

    // const {
    //   transcript,
    //   finalTranscript,
    //   resetTranscript,
    //   browserSupportsSpeechRecognition,
    // } = this.props;

    // if (!browserSupportsSpeechRecognition) {
    //   return null;
    // }

    //return null;
    // <div>
    //   {/* <p className="App-intro">Speech Recognition</p>
    //   <button onClick={resetTranscript}>Reset</button> */}
    //   {/* Infinity: onTalk fires every time SlateEditor updates, updating SlateEditor. */}
    //   <span value={finalTranscript} id="speech">
    //     {finalTranscript}
    //   </span>
    // </div>
  }
}

// Speech.propTypes = propTypes;

const options = {
  autoStart: false,
};

export default SpeechRecognition(options)(Speech);
