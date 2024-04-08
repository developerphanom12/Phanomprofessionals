import React from "react";
import styled from "styled-components";
import imgg from "../Images/chainimg.png";
import { IoInformationCircleOutline } from "react-icons/io5";

export default function MileStone() {
  return (
    <Root>
      <div className="Single_milestone_page">
        <div className="create_heading">
          <h5>Create a Milestone offer</h5>
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
        {/* ------------------------------mmmmmmm----------------------------- */}

        <div className="milestone_to_single_div">
          <h6>
            Set up your offer or
            <button>Switch to Single payment</button>
          </h6>
          <p>
            Divide your work into pre-defined steps with specific goals (minimum
            $50 for each milestone).
          </p>

          <div className="list_section">
            <ul>
              <li>
                <b>1st milestone name</b>
                <div>
                  <input placeholder="enter a mildstone name" />
                </div>
              </li>
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
                  <textarea placeholder="0" />
                </div>
              </li>
            </ul>
          </div>
          <div className="below_list_section">
            <div>
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
              You'll get paid for each milestone once it's marked as completed.
            </p>
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
img{
  width: 200px;
}
`;
