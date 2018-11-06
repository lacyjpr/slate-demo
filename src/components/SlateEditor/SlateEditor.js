import React from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';
import Speech from '../Speech';

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
                text: '',
              },
            ],
          },
        ],
      },
    ],
  },
});

function MarkHotkey(options) {
  const { type, key } = options;

  // Return our "plugin" object, containing the `onKeyDown` handler.
  return {
    onKeyDown(event, editor, next) {
      // Check that the key pressed matches our `key` option.
      if (!event.ctrlKey || event.key != key) return next();

      // Prevent the default characters from being inserted.
      event.preventDefault();

      // Toggle the mark `type`.
      editor.toggleMark(type);
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

  componentDidMount() {
    this.editor.focus();
  }

  // On change, update the app's React state with the new editor value.
  onChange = ({ value }) => {
    console.log('value', value);
    console.log('typeof editor', typeof this.editor);
    console.log('SlateEditor', this.editor);
    //value.stopImmediatePropagation();
    this.setState({ value });
    return false;
  };

  // Render the editor.
  render() {
    return (
      <div>
        <Editor
          plugins={plugins}
          value={this.state.value}
          onChange={this.onChange}
          renderMark={this.renderMark}
          ref={editor => (this.editor = editor)}
          placeholder={'Tell me a story!'}
        />
        <Speech editor={this.editor} />
      </div>
    );
  }

  renderMark = (props, editor, next) => {
    switch (props.mark.type) {
      case 'bold':
        return <strong>{props.children}</strong>;
      case 'italic':
        return <em>{props.children}</em>;
      default:
        return next();
    }
  };
}

export default SlateEditor;
