import React, { useState } from "react";
import styled from "styled-components";
import { RiApps2Line } from "react-icons/ri";
import { IoInformationCircle } from "react-icons/io5";
import { PiTextT } from "react-icons/pi";
import { GigButton } from "../../../../GlobalStyles";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { EXCHANGE_URLS } from "../../../Important/URLS";

export default function Requirements() {
  const gigId = useSelector((state) => state.users.gigId);
  const [data, setData] = useState({
    gig_id: gigId ? gigId.toString() : "",
    questionsAnswers: [{ question: "", answer: "" }],
  });
  const [isSectionVisible, setSectionVisible] = useState(true);

  const handleDismissClick = () => {
    setSectionVisible(false);
  };

  const navigate = useNavigate();
  console.log("gigId", gigId);
  const appQues = async () => {
    try {
      const axiosConfig = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      const res = await axios.post(
        `${EXCHANGE_URLS}/gigsquestion`,
        data,
        axiosConfig
      );
      if (res?.status === 201) {
        toast.success("Updated");
        navigate("/gallery");
      }
    } catch (err) {
      toast.error("error");
    }
  };

  const handleSubmit = () => {
    appQues();
  };

  const handleQuestionChange = (index, e) => {
    const newData = [...data.questionsAnswers];
    newData[index].question = e.target.value;
    setData({ ...data, questionsAnswers: newData });
  };

  const handleAnswerChange = (index, e) => {
    const newData = [...data.questionsAnswers];
    newData[index].answer = e.target.value;
    setData({ ...data, questionsAnswers: newData });
  };

  const addQuestion = () => {
    setData({
      ...data,
      questionsAnswers: [
        ...data.questionsAnswers,
        { question: "", answer: "" },
      ],
    });
  };
  return (
    <Root>
      <div className="main_req_div">
        <header>
          <h6>Get all the information you need from buyers to get started</h6>
          <p>
            Add questions to help buyers provide you with exactly what you need
            to start working on their order.
          </p>
        </header>
        <div className="sectionnn">
          <div className="sectionn_div">
            <hr />
            <strong>
              <div>
                <span>PHANOM QUESTIONS</span>
              </div>
            </strong>
          </div>
          <p className="p_tag">
            These optional questions will be added for all buyers.
          </p>
          <ul>
            <li>
              <div className="li_div">
                <div className="li_div_div">
                  <RiApps2Line />
                  <span>Multiple Choice</span>
                </div>
                <span className="li_div_span">
                  1. If you’re ordering for a business, what’s your industry?
                </span>
                <p className="li_div_p">
                  3D design, e-commerce, accounting, marketing, etc.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="sectionnn">
          <div className="sectionn_div">
            <hr />
            <strong>
              <div>
                <span>Your QUESTIONS</span>
              </div>
            </strong>
          </div>
        </div>
        {isSectionVisible && (
          <div className="section_2">
            <span className="icon_span">
              <IoInformationCircle />
            </span>
            <div className="section_2_div">
              <div>
                <p>
                  <span>
                    Take a moment to make sure your questions aren’t asking for
                    the same information requested above.
                  </span>
                </p>
              </div>
              <button onClick={handleDismissClick}>Dismiss</button>
            </div>
          </div>
        )}

        <div className="sectionnn">
          <ul>
            <li>
              <div className="li_div">
                <div className="li_div_div">
                  <PiTextT />
                  <span>FREE TEXT</span>
                  <GigButton>...</GigButton>
                </div>
                <span className="li_div_span">
                  1. Is this order for personal use, business use, or a side
                  project?
                </span>
              </div>
            </li>
          </ul>
        </div>
        <button className="add_question" onClick={addQuestion}>
          + Add New Questions
        </button>

        {data.questionsAnswers.map((item, index) => (
          <div key={index} className="your_question">
            <div className="your_question_div">
              <span>Question</span>
              <input
                placeholder="Add Your Question"
                value={item.question}
                onChange={(e) => handleQuestionChange(index, e)}
              />
            </div>
            <div className="your_question_div">
              <span>Answer</span>
              <input
                placeholder="Add Your Answer"
                value={item.answer}
                onChange={(e) => handleAnswerChange(index, e)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="div4">
        <a type="button" role="button" href="link">
          Cancle
        </a>
        <button onClick={handleSubmit}>Save</button>
      </div>
    </Root>
  );
}
const Root = styled.section`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 50px;
  padding: 0px 40px;
  width: 75vw;
  color: #62646a;
  .main_req_div {
    width: 100%;
    margin-bottom: 20px;
    position: relative;
    padding: 28px;
    background: #fff;
    border-radius: 5px 5px 0 0;
    border: 1px solid #dadbdd;
    header {
      h6 {
        margin-bottom: 6px;
        margin-top: 12px;
        font-size: 18px;
        line-height: 140%;
        font-weight: 700;
        color: #404145;
      }
      p {
        font-size: 14px;
        font-weight: 400;
        color: #95979d;
      }
    }
    .sectionnn {
      .sectionn_div {
        margin-bottom: 26px;
        position: relative;
        margin: 48px 0 36px;
        hr {
          display: block;
          height: 1px;
          border: 0;
          border-top: 1px solid #ccc;
          margin: 1em 0;
          padding: 0;
        }
        strong {
          position: absolute;
          padding: 0 16px;
          z-index: 1;
          top: 0;
          transform: translateY(-50%) translateX(50%);
          right: 50%;
          background: #fff;
          text-transform: uppercase;
          font-size: 12px;
          line-height: 1;
          span {
            text-transform: uppercase;
            background: #fff;
            font-size: 12px;
            font-weight: 700;
            color: #62646a;
            height: 15px;
            line-height: 18px;
          }
        }
      }
      .p_tag {
        line-height: 21px;
        margin-bottom: 32px;
        font-size: 14px;
        color: #95979d;
      }
      ul {
        list-style: none;
        padding: 0px;
        li {
          position: relative;
          .li_div {
            border: 1px solid #dadbdd;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
            border-radius: 3px;
            margin-bottom: 16px;
            padding: 24px;
            position: relative;
            .li_div_div {
              margin-bottom: 16px;
              svg {
                width: 12px;
                height: 12px;
              }
              span {
                text-transform: uppercase;
                font-weight: 700;
                font-size: 10px;
                line-height: 17px;
                color: #95979d;
                margin-left: 8px;
              }
            }
            .li_div_span {
              color: #404145;
              font-size: 14px;
              line-height: 21px;
              font-weight: 600;
              padding-bottom: 4px;
            }
            .li_div_p {
              color: #404145;
              font-size: 14px;
              line-height: 21px;
            }
          }
        }
      }
    }
    .section_2 {
      background: #f0f4ff;
      color: #284389;
      margin-bottom: 32px;
      display: flex;
      align-items: center;
      padding: 16px;
      border-radius: 4px;
      .icon_span {
        width: 20px;
        height: 20px;
        margin-right: 12px;
        fill: #284389;
        svg {
          width: 16px;
          height: 16px;
          float: left;
          height: 100%;
          width: 100%;
          fill: #284389;
        }
      }
      .section_2_div {
        display: flex;
        justify-content: space-between;
        flex: 1 1;
        p {
          margin: 0px;
        }
        button {
          margin-top: 0;
          margin-left: 16px;
          align-self: center;
          display: inline-block;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          position: relative;
          padding: 12px 24px;
          border: 1px solid transparent;
          border-radius: 4px;
          font-weight: 600;
          font-size: 16px;
          line-height: 100%;
          text-decoration: none;
          text-align: center;
          cursor: pointer;
          transition: 70ms cubic-bezier(0.75, 0, 0.25, 1);
          background-color: #4a73e8;
          color: #fff;
        }
      }
    }
    .add_question {
      border: 1px solid #446ee7;
      color: #446ee7;
      background: none;
      justify-content: center;
      align-items: center;
      gap: 8px;
      position: relative;
      padding: 8px 15px;
      border-radius: 8px;
      font-weight: 600;
      line-height: 24px;
      font-size: 16px;
      text-decoration: none;
      cursor: pointer;
      -webkit-transition: 70ms cubic-bezier(0.75, 0, 0.25, 1);
      transition: 70ms cubic-bezier(0.75, 0, 0.25, 1);
      margin-top: 8px;
    }
    .your_question {
      display: flex;
      flex-direction: column;
      padding: 20px;
      margin: 10px;
      background-color: #dadbdd4a;
      border: 1px solid #dadbdd;
      .your_question_div {
        display: flex;
        flex-direction: column;
        span {
          color: #404145;
          font-size: 14px;
          line-height: 21px;
          font-weight: 600;
          padding-bottom: 4px;
        }
        input {
          outline: none;
          border: none;
          font-size: 14px;
          padding-bottom: 4px;
          background-color: #dadbdd0a;
        }
      }
    }
  }
  .div4 {
    width: 100%;
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
