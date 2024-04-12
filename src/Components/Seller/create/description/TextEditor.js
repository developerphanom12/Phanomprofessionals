import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import 'react-quill/dist/quill.bubble.css';


function TextEditor({ valuee, setValuee }) {
  const [editorHtml, setEditorHtml] = useState(valuee && valuee.content ? valuee.content : '');
  const [characterCount, setCharacterCount] = useState(0);

  useEffect(() => {
    if (valuee && valuee.content) {
      setEditorHtml(valuee.content);
      setCharacterCount(valuee.content.length);
    }
  }, [valuee]);

  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, {'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ]
  };

  // const handleChange = (html, delta, source, editor) => {
  //   const plainText = editor.getText().trim();
  //   setCharacterCount(plainText.length);
    
  //   if (plainText.length <= 1200) {
  //     setEditorHtml(html);
  //     if (setValuee) {
  //       setValuee({ ...valuee, content: html });
  //     }
  //   } else {
  //     const truncatedHtml = editor.clipboard.dangerouslyPasteHTML(0, html.substring(0, 1200));
  //     setEditorHtml(truncatedHtml);
  //     if (setValuee) {
  //       setValuee({ ...valuee, content: truncatedHtml });
  //     }
  //   }
  // };


  const handleChange = (html, delta, source, editor) => {
    const plainText = editor.getText().trim();
    const textLength = plainText.length;
  
    // Check if input is empty
    if (textLength === 0) {
      setCharacterCount(0);
      setEditorHtml(""); // Clear the editor content
      if (setValuee) {
        setValuee({ ...valuee, content: "" });
      }
      return; // Stop further execution of the function
    }
  
    // Check if input length exceeds 1200 characters
    if (textLength > 1200) {
      // Truncate the input to 1200 characters
      const truncatedText = plainText.substring(0, 1200);
      const truncatedHtml = editor.clipboard.dangerouslyPasteHTML(0, truncatedText);
      setEditorHtml(truncatedHtml);
      setCharacterCount(1200); // Update character count to 1200
      if (setValuee) {
        setValuee({ ...valuee, content: truncatedHtml });
      }
    } else {
      // If input length is within the limit, update the editor content and character count
      setEditorHtml(html);
      setCharacterCount(textLength);
      if (setValuee) {
        setValuee({ ...valuee, content: html });
      }
    }
  };
  
  return (
    <div>
      <ReactQuill
        theme="snow"
        value={editorHtml || ""}
        onChange={handleChange}
        modules={modules}
      />
      <div>Characters: {characterCount} / 1200</div>
    </div>
  );
}

export default TextEditor;
