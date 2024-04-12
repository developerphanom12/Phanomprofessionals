import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function TextEditor2({ initialValue, onChange }) {
  const [wordCount, setWordCount] = useState(0); // State to store word count

  useEffect(() => {
    // Calculate and set the word count when initialValue changes
    if (initialValue) {
      const words = initialValue.trim().split(/\s+/);
      setWordCount(words.length);
    }
  }, [initialValue]);

  const handleEditorChange = (content, delta, source, editor) => {
    if (content.trim() !== "" && editor.getLength() <= 1200) {
      onChange(content);
      // Update word count
      const text = editor.getText();
      const words = text.trim().split(/\s+/);
      setWordCount(words.length);
    } else {
      console.error(
        "Content must not be empty and should have less than or equal to 1200 words."
      );
    }
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  return (
    <div>
      <ReactQuill theme="snow" modules={modules} value={initialValue} onChange={handleEditorChange} />
      <div>
        {wordCount}/1200 words {/* Display word count */}
      </div>
    </div>
  );
}

export default TextEditor2;
