import React from "react";
import marked from "marked";
import "../css/App.css";

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + "</a>";
};

const Preview = (props) => {
  const { text } = props;
  return (
    <div className="previewDiv">
      <span id="span">Preview</span>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(text, { renderer: renderer, breaks: true }),
        }}
      />
    </div>
  );
};

export default Preview;
