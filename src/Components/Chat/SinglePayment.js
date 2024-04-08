import React from "react";
import styled from "styled-components";
import imgg from "../Images/chainimg.png";
import { IoInformationCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Link } from "@mui/icons-material";

export default function SinglePayment() {
  const navigate = useNavigate();

  return (
    <Root>
      <div className="Single_milestone_page">
        <div className="create_heading">
          <h5>Create a single-payment offer</h5>
        </div>
        <div className="heading_body">
          <header>
            <h6>title</h6>
            <button>Select a Package</button>
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
        {/* -----------------------------ssssss------------------------------ */}
        <div className="single_to_milestone_div">
          <h6>
            Set up your offer or
            <button>Switch to Milestones</button>
          </h6>
          <p>Define the terms of your offer and what it includes.</p>
          <div className="list_section">
            <ul>
              <li>
                <b>Revision (Optional)</b>
                <div>
                  <select>
                    <option>11111</option>
                  </select>
                </div>
              </li>
              <li>
                <b>Delivery</b>
                <div>
                  <select>
                    <option>11111</option>
                  </select>
                </div>
              </li>
              <li>
                <b>Price</b>
                <div>
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
                The order will start immediately upon payment. Make sure you
                have all of the required information to start working.
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
      </div>
    </Root>
  );
}
const Root = styled.section`
  img {
    width: 200px;
  }
`;
