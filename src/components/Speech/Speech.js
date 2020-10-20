import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SpeechRecognition from 'react-speech-recognition';

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  finalTranscript: PropTypes.string,
  resetTranscript: PropTypes.func,
  startListening: PropTypes.func,
  stopListening: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
  listening: PropTypes.bool,
};

class Speech extends Component {
  // Only update if transcript has changed. Credit: jenovs https://github.com/jenovs/slate-voice-demo
  componentDidUpdate(prevProps) {
    if (prevProps.finalTranscript !== this.props.finalTranscript) {
      this.onTalk(this.props.finalTranscript);
    }
  }

  micToggle = () => {
    this.props.editor.focus();
    if (!this.props.listening) {
      this.props.startListening();
    } else {
      this.props.stopListening();
    }
  };

  onTalk = event => {
    if (typeof this.props.editor !== 'undefined' && event !== '') {
      // this.props.editor.change(change => {
      //   change.insertText(event + ' ');
      // });
      this.props.editor.insertText(event + ' ');
      this.props.resetTranscript();
    }
  };

  render() {
    const { browserSupportsSpeechRecognition, listening } = this.props;

    if (!browserSupportsSpeechRecognition) {
      return null;
    }

    return (
      <div>
        {!listening ? (
          <button onClick={this.micToggle}>Dictate</button>
        ) : (
          <button onClick={this.micToggle}>Stop Dictating</button>
        )}
      </div>
    );
  }
}

Speech.propTypes = propTypes;

const options = {
  autoStart: false,
};

export default SpeechRecognition(options)(Speech);
