import React from "react";
import "../css/App.css";

const Editor = (props) => {
  return (
    <div className="editorDiv">
      <span id="span">Editor</span>
      <textarea id="editor" value={props.text} onChange={props.handleChange} />
    </div>
  );
};

export default Editor;
