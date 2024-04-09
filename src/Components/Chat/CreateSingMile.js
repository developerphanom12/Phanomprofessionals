import React, { useState } from "react";
import styled from "styled-components";
import imgg from "../Images/chainimg.png";
import { GiCornerFlag } from "react-icons/gi";
import { IoInformationCircleOutline } from "react-icons/io5";
import { BackButton, BlueButton } from "../../GlobalStyles";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function CreateSingMile() {
  const [isSinglePayment, setIsSinglePayment] = useState(true);
  const [select, setSelect] = React.useState("");

  const handleChange = (event) => {
    setSelect(event.target.value);
  };
  const handleSwitch = () => {
    setIsSinglePayment(!isSinglePayment);
  };
  return (
    <Root>
      <h5>Choose how you want to get paid</h5>
      <ul className="ul">
        <p>
          {" "}
          Get paid in full once the project is completed, or break it into
          smaller chunks, called milestones, to get paid as you go.
        </p>
        <li>
          <GiCornerFlag />
          <div>
            <h6 onClick={() => setIsSinglePayment(true)}>Single Payment</h6>
            <span>Get paid in full after each order is completed.</span>
          </div>
        </li>

        <li>
          <GiCornerFlag />
          <div>
            <h6 onClick={() => setIsSinglePayment(false)}> Milestone</h6>
            <span>
              Work in gradual steps and get paid for each completed milestone.
            </span>
          </div>
        </li>
      </ul>

      {isSinglePayment ? (
        <div className="Single_milestone_page">
          <div className="create_heading">
            <h5>Create a single-payment offer</h5>
          </div>
          <div className="heading_body">
            <header>
              <h6>title</h6>
              <BackButton>Select a Package</BackButton>
            </header>
            <div className="input_img_textarea">
              <span>
                <img src={imgg} alt="img" />
              </span>
              <div>
                <textarea placeholder="Describe your offer"></textarea>
              </div>
            </div>
          </div>
          {/* -----------------------------singlepayment------------------------------ */}
          <div className="single_to_milestone_div">
            <h6>
              Set up your offer or
              <BlueButton onClick={handleSwitch}>
                {isSinglePayment
                  ? "Switch to Milestone"
                  : "Switch to Single Payment"}
              </BlueButton>
            </h6>
            <p>Define the terms of your offer and what it includes.</p>
            <div className="list_section">
              <ul>
                <li>
                  <b>Revision (Optional)</b>
                  <div>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <Select
                        value={select}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem value=""></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </li>
                <li>
                  <b>Delivery</b>
                  <div>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <Select
                        value={select}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem value=""></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </li>
                <li>
                  <b>Price</b>
                  <div className="input_div">
                    $
                    <textarea placeholder=" 20000max" />
                  </div>
                </li>
              </ul>
              <div>
                <div>
                  <input type="checkbox" />
                  <b>Add a coupon</b>
                </div>
                <div>Offers with coupons are more likely to be accepted.</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="Single_milestone_page">
          <div className="create_heading">
            <h5>Create a milestones offer</h5>
          </div>
          <div className="heading_body">
            <header>
              <h6>
                {" "}
                titletitletitletitletitletitletitletitl
                titletitletitletitletitletitletitle
                etitletitletitletitletitletitle titletitle
              </h6>
              <BackButton>Select a Package</BackButton>
            </header>
            <div className="input_img_textarea">
              <span>
                <img src={imgg} alt="img" />
              </span>
              <div>
                <textarea placeholder="Describe your offer"></textarea>
              </div>
            </div>
          </div>
          <div className="milestone_to_single_div">
            <h6>
              Set up your offer or
              <BlueButton onClick={handleSwitch}>
                {isSinglePayment
                  ? " Switch to Milestone"
                  : " Switch to Single Payment"}
              </BlueButton>
            </h6>
            <p>
              Divide your work into pre-defined steps with specific goals
              (minimum $50 for each milestone).
            </p>

            <div className="border_only">
              <div className="list_section">
                <ul>
                  <li>
                    <b>1st milestone name</b>
                    <div className="input_div">
                      <textarea placeholder="enter a mildstone name"></textarea>
                    </div>
                  </li>
                  <li>
                    <b>Revision (Optional)</b>
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                          value={select}
                          onChange={handleChange}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                        >
                          <MenuItem value=""></MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </li>
                  <li>
                    <b>Delivery</b>
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                          value={select}
                          onChange={handleChange}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                        >
                          <MenuItem value=""></MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </li>
                  <li>
                    <b>Price</b>
                    <div className="input_div">
                      $
                      <textarea placeholder=" 0" />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="below_list_section">
                <div className="text_div">
                  <textarea placeholder="Describe your offer in detail (optional)" />
                </div>
                <p>Adding a description helps set expectations with buyers.</p>
              </div>
              <div>
                {" "}
                <button>Save</button>
              </div>
              <div className="total_day_pay">
                <p>
                  {" "}
                  Total: 0 days
                  <b class="amount">$0</b>
                </p>
                <p>
                  You'll get paid for each milestone once it's marked as
                  completed.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <ul>
        <li>
          <div>
            <input type="checkbox" />
            <b>Offer expires in</b>
          </div>
          <select>
            <option>1 Day</option>
          </select>
        </li>
        <li>
          <div>
            <input type="checkbox" />
            <b>Request for requirements</b>
          </div>
          <div>
            <IoInformationCircleOutline />
            <span>
              The order will start immediately upon payment. Make sure you have
              all of the required information to start working.
            </span>
          </div>
        </li>
      </ul>
      <div>
        <h6>Offer includes</h6>
        <ul>
          <li>
            <label>
              <input type="checkbox" />
              <b>Number of pages</b>
            </label>
            <input />
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <b>Design customization</b>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <b>Content upload</b>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <b>Responsive design</b>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <b>Include Source Code</b>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <b>Licensed images</b>
            </label>
            <input />
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <b>Detailed code comments</b>
            </label>
          </li>
        </ul>
      </div>
      <div>
        <button>Back</button>
        <button>Send Offer</button>
      </div>
    </Root>
  );
}
const Root = styled.section`
  h5 {
    padding: 16px 20px;
    background: #f5f5f5;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    font-weight: 600;
    border-bottom: 1px solid lightgray;
  }
  .ul {
    padding: 0;
    list-style: none;
    p {
      color: #62646a;
      padding: 20px;
      font-size: 18px;
      line-height: 26px;
    }
    li {
      display: flex;
      margin: 0px 20px 20px;
      padding: 20px;
      border: 1px solid lightgray;
      border-radius: 3px;
      svg {
        font-size: 35px;
        margin: 10px;
      }
      > div {
        flex-direction: column;
        padding: 0px 10px;
        h6 {
          font-size: 18px;
          color: #404145;
          font-weight: 600;
        }
        span {
          color: #62646a;
          font-size: 16px;
          line-height: 26px;
        }
      }
      &:hover {
        border: 1px solid darkgreen;
        cursor: pointer;
      }
    }
  }

  .Single_milestone_page {
    .heading_body {
      padding: 20px 20px 0px;
      header {
        padding-bottom: 20px;
        display: flex;
        justify-content: space-between;
        h6 {
          font-size: 16px;
          color: #404145;
          line-height: 140%;
          font-weight: 600;
          height: auto;
        }
        .BackButton {
          margin-left: 20px;
        }
      }
      .input_img_textarea {
        padding-bottom: 20px;
        display: flex;
        justify-content: space-between;
        width: 100%;
        img {
          width: 180px;
          height: 100%;
          object-fit: contain;
        }

        > div {
          border: 1px solid #c5c6c9;
          border-radius: 4px;
          box-sizing: border-box;
          color: #404145;
          display: inline-block;
          height: 150px;
          padding: 12px 14px;
          width: 65%;
          position: relative;
          transition: 0.15s ease-in-out;
          textarea {
            outline: none;
            border: none;
            text-decoration: none;
            height: 100%;
          }
        }
      }
    }
    .milestone_to_single_div,
    .single_to_milestone_div {
      padding: 20px 20px 0px;
      h6 {
        display: flex;
        color: #404145;
        align-items: center;
        font-weight: 600;
        margin: 0;
        align-items: center;
      }
      p {
        padding: 10px 0px;
        color: #62646a;
      }
      .list_section {
        border: 1px solid rgb(197, 198, 201);
        border-radius: 4px;
        padding: 20px;
        ul {
          display: flex;
          padding: 0;
          color: #62646a;
          font-size: 14px;
          list-style: none;
          li {
            flex-direction: column;
            padding-bottom: 0px;
            padding-right: 16px;
            b {
              display: flex;
              padding-bottom: 8px;
              white-space: nowrap;
            }
            .input_div {
              border: 1px solid lightgray;
              border-radius: 4px;
              display: flex;
              padding: 0px 5px;
              margin-top: 7px;
              input,
              textarea {
                border: none;
                width: 120px;
                outline: none;
                background-color: transparent;
                font: inherit;
              }
            }
          }
        }
      }
      .below_list_section {
        padding-top: 12px;
        .text_div {
          width: 100%;
          background-color: #fff;
          padding-bottom: 45px;
          textarea {
            border: 1px solid #c5c6c9;
            border-radius: 4px;
            width: 100%;
            box-sizing: border-box;
            color: #404145;
            height: 150px;
            padding: 12px 14px;
            position: relative;
            transition: 0.15s ease-in-out;
          }
        }
      }
    }

    .milestone_to_single_div {
      .border_only {
        border: 1px solid #c5c6c9;
        border-radius: 4px;
        padding: 20px;
      }
    }
  }

  .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border: 1px solid lightgray;
    font-weight: 700;
    outline: none;
  }

  .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    padding-right: 32px;
    color: #62646a;
    font-weight: 600;
    line-height: 42px;
    text-decoration: none;
    font-size: 16px;
  }

  .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 0px 5px;
  }
`;
