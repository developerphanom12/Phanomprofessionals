import React, { useEffect, useState } from "react";
import TextEditor from "./TextEditor";
import styled from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios";
import { EXCHANGE_URLS } from "../../../Important/URLS";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import TextEditor2 from "./TextEditor2";

export default function DescriptionFAQ() {
  const gigId = useSelector((state) => state.users.gigId);
  const [valuee, setValuee] = useState({
    gig_id: gigId ? gigId.toString() : "",
    content: "",
  });
  console.log("valudfee", valuee);
  const navigate = useNavigate();

  const [textCount, setTextCount] = useState({});
  console.log("staffCount", textCount);

  const allTextApi = async () => {
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await axios.get(
        `${EXCHANGE_URLS}/gigslist/${gigId}`,
        axiosConfig
      );
      if (res?.status === 201) {
        setTextCount(res?.data?.message[0]);
        navigate("/requirements");
      }
    } catch (err) {
      toast.error(err, "Error");
    }
  };
  useEffect(() => {
    allTextApi();
  }, []);

  const appApi = async () => {
    try {
      const axiosConfig = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const updatedData = {
        ...valuee,
        gig_id: gigId,
      };
      const res = await axios.post(
        `${EXCHANGE_URLS}/gigstexteditor`,
        updatedData,
        axiosConfig
      );
      if (res?.status === 201) {
        navigate("/edit");
        toast.success("Updated");
      }
    } catch (err) {
      toast.error("Firstly Fill Overview and Pricing Pages Detail");
    }
  };

  const handleSubmit = () => {
    appApi();
  };
  return (
    <Root>
      <div className="main_div_section">
        <header>
          <h3>Description</h3>
          <p>Briefly Describe Your Gig</p>
        </header>
        <TextEditor valuee={valuee} setValuee={setValuee} />
        <TextEditor2 textCount={textCount} />
      </div>
      <div className="div4">
        <a type="button" role="button" href="/edit">
          Cancle
        </a>
        <button
          type="submit"
          onClick={() => {
            handleSubmit();
          }}
        >
          Save
        </button>
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 50px;
  padding: 0px 40px;
  width: 100%;
  .main_div_section {
    display: flex;
    flex-direction: column;
    width: 75vw;
    header {
      width: 100%;

      padding-top: 4px;
      color: #62646a;
      h3 {
        font-weight: 400;
        color: #62646a;
        padding-bottom: 20px;
        margin-bottom: 30px;
        border-bottom: 1px solid #dadbdd;
        font-size: 28px;
      }
      p {
        padding-top: 15px;
        padding-bottom: 20px;
      }
    }
  }
  .div4 {
    width: 75vw;
    display: flex;
    justify-content: space-between;
    a,
    button {
      padding: 11px 20px;
      -webkit-box-pack: center;
      justify-content: center;
      align-items: center;
      gap: 8px;
      box-sizing: border-box;
      position: relative;
      border-radius: 8px;
      font-weight: 600;
      line-height: 24px;
      font-size: 16px;
      text-decoration: none;
      cursor: pointer;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      transition: 70ms cubic-bezier(0.75, 0, 0.25, 1);
    }
    a {
      color: #222325;
      border: 1px solid #e4e5e7;
    }
    button {
      background: #222325;
      border: 1px solid #fff;
      color: #fff;
    }
  }
`;
