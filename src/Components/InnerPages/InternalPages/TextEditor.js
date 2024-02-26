
import React, { useRef, useEffect } from 'react';
// import 'quill/dist/quill.snow.css';
import Quill from 'quill';

const TextEditor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      const quill = new Quill(editorRef.current, {
        theme: 'snow'
      });
    }
  }, []);

  return (
    <div>
      <div ref={editorRef}>
        <p>Hello World!</p>
        <p>Some initial <strong>bold</strong> text</p>
        <p><br /></p>
      </div>
    </div>
  );
};

export default TextEditor;
