import React, { Component } from "react";
import Editor from "./Components/Editor.jsx";
import Preview from "./Components/Preview.jsx";
import "./css/App.css";

const defaultText = `# This is a header

## This is a subheader

This is a [link](https://www.wikipedia.org/)

\`This\` is an inline code block! <span style="color:red;">This</span> is one too!

\`\`\` 
// This is multiline code:

function print() {
console.log("hello")
}; 
\`\`\`
You can make text **bold** and *italic*. You can also ~~strikethrough~~ text.

You can do numbered lists:
1. first item
2. second item
3. third item

> This is a quote

This is a ...
Single line break!

This is an image

![flower](https://upload.wikimedia.org/wikipedia/en/3/3f/Oxalis_tetraphylla_flower.jpg)
`;

class App extends Component {
  state = {
    text: defaultText,
  };
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };
  render() {
    const { text } = this.state;
    return (
      <div className="App">
        <h1 id="header">Markdown Previewer</h1>
        <div className="boxes">
          <Editor text={text} handleChange={this.handleChange} />
          <Preview text={text} />
        </div>
      </div>
    );
  }
}

export default App;
