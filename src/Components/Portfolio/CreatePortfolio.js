import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
import styled from "styled-components";

export default function CreatePortfolio() {
  const [imagePreview, setImagePreview] = useState("");

  const selectContainerStyle = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "250px",
    padding: "10px",
    borderRadius: "3px",
    margin: "15px",
    border: "1px dashed #888",
    color: "#444",
    cursor: "pointer",
    transition: "background .2s ease-in-out, border .2s ease-in-out",
  };

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    // if (file) {
    //   setFormData({ ...formData, university_image: file });
    //   setUniversityImagePreview(URL.createObjectURL(file));
    // } else {
    //   setFormData({ ...formData, university_image: "" });
    //   setUniversityImagePreview("");
    // }
  };
  return (
    <Port>
      <div className="top">
        <button className="cancle">Cancle</button>
        <h5>Create New Project</h5>
        <div>
          <span className="add_files">
            <FaPlusCircle />
            Add Files
          </span>
          <button className="save">Save & Publish</button>
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
            <textarea placeholder="Write a short description about your work"></textarea>
            <footer>
              <strong>0</strong>/1400
            </footer>
          </div>
        </div>
        <div className="same_div">
          <p>Category</p>
          <div
            style={{
              display: "flex",
              flex: "1",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <select>
              <option>Select Category</option>
              <option>Programming & Tech.</option>
              <option>Digital Marketing</option>
              <option>AI Services</option>
              <option>Business Management</option>
              <option>Graphic & Designing</option>
              <option>Video & Animation</option>
              <option>Writing & Translation</option>
              <option>Branding</option>
            </select>
            <select>
              <option>add</option>
            </select>
          </div>
        </div>
        <div className="imgg" style={selectContainerStyle}>
          {imagePreview || <IoCloudUploadOutline />}
          <b
            style={{
              display: "flex",
              fontSize: "14px",
              gap: "5px",
              color: "#000",
            }}
          >
            Select & Drop files here or{" "}
            <b style={{ color: "green" }}> browse </b> to Upload
          </b>
          <input
            type="file"
            onChange={handleImagePreview}
            accept="jpeg,jpg,png,gif"
          />
        </div>
      </div>
    </Port>
  );
}
const Port = styled.section`
  background-color: #f2f2f2;
  img {
    width: 40px;
  }
  .top {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
    h5 {
      text-align: center;
      font-weight: 700;
      line-height: 120%;
      font-size: 18px;
      color: #404145;
      margin: 0;
    }
    .cancle {
      font-size: 14px;
      line-height: 115%;
      transition: color 0.2s;
      background-color: #fff;
      font-weight: 600;
      display: inline-block;
      padding: 9px 20px 8px;
      margin: 0;
      cursor: pointer;
      border: 1px #b3b3b3 solid;
      border-radius: 3px;
      &:hover {
        color: #1dbf73;
        text-decoration: none;
      }
    }
    .add_files {
      font-size: 14px;
      line-height: 115%;
      padding-right: 20px;
      cursor: pointer;
      color: #777;
      svg {
        margin-right: 5px;
        width: 14px;
        height: 14px;
        background-color: #fff;
      }
    }
    .save {
      font-weight: 700;
      text-transform: none;
      color: #fff;
      border: 1px solid #ddd;
      background-color: #ddd;
      border-radius: 3px;
      padding: 9px 10px 8px;
      font-size: 12px;
      line-height: 12px;
      text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.2);
      &:hover {
        border: 1px solid #1dbf73;
      }
    }
  }
  p {
    color: #000;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    display: block;
    padding-bottom: 5px;
    margin: 0;
  }
  .bottom {
    background-color: #fff;
    margin: auto;
    width: 60vw;
    padding: 20px;
    .same_div {
      padding: 5px 20px;
      textarea {
        overflow-y: auto;
        outline: none;
        margin-bottom: 2px;
        font-size: 14px;
        line-height: 120%;
        color: #7a7d85;
        border: 1px #b5b6ba solid;
        width: 100%;
        padding: 10px 7px;
        height: 120px;
      }

      input {
        background-color: #fff;
        font: 400 16px macan, helvetica neue, Helvetica, Arial, sans-serif;
        color: #7a7d85;
        border: 1px #b5b6ba solid;
        padding: 6px 7px 7px;
        margin: 0;
        resize: none;
        border-radius: 3px;
        box-sizing: border-box;
        overflow-y: auto;
        outline: none;
        width: 100%;
      }
      footer {
        padding: 7px;
        border-bottom: 1px solid #b5b6ba;
        border-left: 1px solid #b5b6ba;
        border-right: 1px solid #b5b6ba;
        margin-top: -8px;
        color: #7a7d85;
      }
      select {
        width: 23vw;
        background: #fff
          url(https://assetsv2.fiverrcdn.com/assets/v2_globals/select-caret-cf0558e10bbeef187909f5a1d9c2922a.gif)
          no-repeat right center;
        font: 400 16px macan, helvetica neue, Helvetica, Arial, sans-serif;
        color: #62646a;
        border: 1px #b5b6ba solid;
        padding: 5px 25px 7px 10px;
        margin: 0;
        border-radius: 2px;
        box-sizing: border-box;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        text-indent: 0.01px;
        outline: none;
      }
    }

    label {
      width: 100%;
      height: 250px;
      padding: 20px;
    }
  }
  .imgg {
    display: flex;
    svg {
      color: #7a7d85;
      width: 60px;
      height: 60px;
    }
  }
`;
