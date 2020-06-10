import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const Editor = () => {
  const [text, setText] = useState("");

  const handleChange = (value) => {
    setText(value);
  };

  return (
    <ReactQuill
      theme="bubble"
      modules={modules}
      value={text}
      onChange={handleChange}
    />
  );
};

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

export default Editor;
