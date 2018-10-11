import React from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';
import SpeechRecognition from 'react-speech-recognition';

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'This text can be edited by the user.',
              },
            ],
          },
        ],
      },
    ],
  },
});

//const transcript = '';

function MarkHotkey(options) {
  const { type, key } = options;

  // Return our "plugin" object, containing the `onKeyDown` handler.
  return {
    onKeyDown(event, change) {
      // Check that the key pressed matches our `key` option.
      if (!event.ctrlKey || event.key != key) return;

      // Prevent the default characters from being inserted.
      event.preventDefault();

      // Toggle the mark `type`.
      change.toggleMark(type);
      return true;
    },
  };
}

const plugins = [
  MarkHotkey({ key: 'b', type: 'bold' }),
  MarkHotkey({ key: 'i', type: 'italic' }),
];

// Define our app...
class SlateEditor extends React.Component {
  // Set the initial value when the app is first constructed.
  state = {
    value: initialValue,
  };

  // On change, update the app's React state with the new editor value.
  onChange = ({ value }) => {
    console.log('onChange called');
    this.setState({ value });
    console.log(value);
    return;
  };

  onTalk = transcript => {
    console.log(transcript);
    console.log('ontalk called');
    console.log(this.editor);
    if (typeof this.editor !== 'undefined' && transcript !== '') {
      console.log(typeof this.editor);
      this.editor.change(change => {
        change.insertText(transcript);
        return;
      });
    }
    // } else if (typeof this.editor !== undefined) {
    //   console.log(typeof this.editor.change);
    //   console.log('editor not undefined');
    //   this.editor.change(change => {
    //     change.extendToStartOfBlock();
    //   });
    //}
  };

  // Render the editor.
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
        <Editor
          ref={editor => (this.editor = editor)}
          plugins={plugins}
          value={this.state.value}
          onChange={this.onChange}
          renderMark={this.renderMark}
        />
        <div>
          <button onClick={resetTranscript}>Reset</button>
          <span onChange={this.onTalk(transcript)}>{transcript}</span>
        </div>
      </div>
    );
  }

  renderMark = props => {
    switch (props.mark.type) {
      case 'bold':
        return <strong>{props.children}</strong>;
      case 'italic':
        return <em>{props.children}</em>;
    }
  };
}

export default SpeechRecognition(SlateEditor);
