import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


function TextEditor2({ textCount }) {
  
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


  return (
    <div>
      <ReactQuill
        theme="snow"
        modules={modules}
        value={textCount?.EditorData?.content}  
      />
      
    </div>
  );
}

export default TextEditor2;