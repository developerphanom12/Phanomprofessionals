import React, { useState } from "react";
import styled from "styled-components";
import { ImCross } from "react-icons/im";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

export default function FinancialDocument() {
  const [modal, setmodal] = useState(false);
  const ModalHeader = styled.h5`
    color: #404145;
    font-size: 24px;
    font-weight: 700;
    padding-left: 15px;
    padding-top: 30px;
  `;

  return (
    <Root>
      <div className="main_div">
        <div className="earning_row">
          <div className="earning_col_one">
            <h6>Statement of earnings</h6>
            <p>
              Choose a date range and download a statement summarizing your
              yearly earnings.
            </p>
            <div className="btn_div">
              <button onClick={() => setmodal(true)}>Choose date range</button>
            </div>
          </div>
          <div className="earning_col_two"></div>
        </div>
      </div>
      <Modal size="lg" isOpen={modal} toggle={() => setmodal(!modal)}>
        <ModalHeader toggle={() => setmodal(!modal)}>
          Get your statement of earnings
        </ModalHeader>
        <CustomModalBody>
          <div className="modal_paragraph">
            <p>
              Select a month and year—your statement will cover a 12-month
              period.
            </p>
            <p>
              Check your billing info to make sure your statement shows the
              correct details
            </p>
          </div>
          <div className="form_div">
            <div className="row">
              <div className="col-lg-6 mt-3">
                <div>
                  <span>12-month period from</span>
                  <HiQuestionMarkCircle />
                </div>
                <select>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
              </div>
              <div className="col-lg-6 mt-3">
                <div>
                  <span>Year</span>
                  <HiQuestionMarkCircle />
                </div>
                <select>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bill_content">
            <span>Billing info</span>
            <a href="#">Update</a>
          </div>

          <div className="address mt-2">
            <div>developerphanom</div>
            <div>Chandigarh</div>
            <div>India</div>
          </div>

          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6 actin_btn">
              <button className="cancel_btn" onClick={() => setmodal(false)}>Cancel</button>
              <button className="download_btn">Download Statement</button>
            </div>
          </div>
        </CustomModalBody>
      </Modal>
    </Root>
  );
}
const Root = styled.section`
  .main_div {
    padding: 0 32px;
    min-height: 440px;
    .earning_row {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      .earning_col_one {
        border: 1px solid #e4e5e7;
        border-radius: 8px;
        padding: 24px;
        flex: 1;
        h6 {
          font-size: 18px;
          font-weight: 700;
          color: #404145;
        }
        p {
          font-size: 18px;
          color: #62646a;
        }
        .btn_div {
          display: flex;
          justify-content: flex-end;
          button {
            color: #222325;
            border: 1px solid black;
            background-color: #fff;
            font-weight: 600;
            border-radius: 4px;
            text-align: center;
            cursor: pointer;
            padding: 8px 16px;
            font-size: 14px;
            &:hover {
              background-color: #404145;
              color: white;
            }
          }
        }
      }
      .earning_col_two {
        flex: 1;
      }
    }
  }
`;

const CustomModalBody = styled(ModalBody)`
  .modal_paragraph {
    p {
      margin: 0;
      color: #62646a;
      font-size: 16px;
      font-weight: 500;
    }
  }
  span {
    font-weight: 600;
    margin-right: 8px;
    color: #404145;
  }
  svg {
    color: rgb(116, 118, 126);
    width: 20px;
    height: 20px;
  }
  select {
    width: 100%;
    border: 1px solid #c5c6c9;
    border-radius: 4px;
    font-size: 16px;
    line-height: 24px;
    padding: 12px 32px 12px 12px;
    margin-top: 15px;
  }

  .bill_content {
    margin-top: 40px;
    border-top: 1px solid #e4e5e7;
    padding-top: 15px;
    span {
      font-weight: 600;
      margin-right: 8px;
      color: #62646a;
      font-size: 16px;
    }
    a {
      text-decoration: underline;
      color: #62646a;
      font-size: 16px;
      line-height: 24px;
    }
  }

  .address {
    div {
      font-size: 16px;
      color: #62646a;
      font-weight: 400;
    }
  }

.actin_btn{
  
    .cancel_btn {
      background: #e4e5e7;
      color: #404145;
      padding: 12px 24px;
      border-radius: 4px;
      font-weight: 600;
      font-size: 16px;
      line-height: 100%;
      text-align: center;
      cursor: pointer;
      border: 1px solid transparent;
    }
    .download_btn{
      background: black;
      color: #fff;
      padding: 12px 24px;
      border-radius: 4px;
      font-weight: 600;
      font-size: 16px;
      line-height: 100%;
      text-align: center;
      cursor: pointer;
      border: 1px solid transparent;
      margin-left:20px;
    }
  }
 
`;
