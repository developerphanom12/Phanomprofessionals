import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import styled from "styled-components";
const fileTypes = ["JPG", "PNG", "GIF"];
export default function CreatePortfolio() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <Port>
      <div className="top">
        <button>Cancle</button>
        <h5>Create New Project</h5>
        <div>
          <span>Add files</span>
          <button>Save & Publish</button>
        </div>
      </div>
      <div className="bottom">
        <div className="same_div">
          <p>Project Title</p>
          <input placeholder="Type your project title" />
        </div>
        <div className="same_div">
          <p>Describe your work</p>
          <div>
            <input placeholder="Write a short description about your work" />
          </div>
        </div>
        <div className="same_div">
          <p>Category</p>
          <div style={{ display: "flex", flex: "1", flexWrap: "wrap" }}>
            <select>
              <option>add</option>
            </select>
            <select>
              <option>add</option>
            </select>
          </div>
        </div>
        {/* <div className="drag_drop"> */}
          <FileUploader
            handleChange={handleChange}
            name="file"
            types={fileTypes}
          />
        </div>
      {/* </div> */}
    </Port>
  );
}
const Port = styled.section`
  background-color: #f2f2f2;
  .top {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
    h5 {
      text-align: center;
    }
  }
  .bottom {
    background-color: #fff;
    margin: auto;
    width: 60vw;
    padding: 20px;
    .same_div {
      padding: 5px 20px;
      input {
        width: 100%;
      }
      select {
        width: 50%;
      }
    }
    /* .drag_drop {
      height: 250px;
      margin: 20px 0px;
      padding:0px 20px; */
      label {
        width: 100%;
        height: 250px;
        padding: 20px;
      }
    }
  /* } */
`;
