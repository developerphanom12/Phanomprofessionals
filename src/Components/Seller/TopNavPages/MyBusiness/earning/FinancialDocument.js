import React, { useState } from "react";
import styled from "styled-components";
import { ImCross } from "react-icons/im";
import { HiQuestionMarkCircle } from "react-icons/hi";

const Modal = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export default function FinancialDocument() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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
              <button onClick={openModal}>
                Choose date range
                {/* <FinancialModal/> */}
              </button>
            </div>
          </div>
          <div className="earning_col_two"></div>
        </div>
      </div>
      <Modal isOpen={modalOpen} onClick={()=>{closeModal()}}>
        <ModalContent>
          {/* Your modal content here */}
          <div className="header">
            <h4>Get your statement of earnings</h4>
            <ImCross />
          </div>
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
            <div className="col_one">
              <div>
                <span>12-month period from</span>
                <HiQuestionMarkCircle/>
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
            <div className="col_two"></div>
          </div>
        </ModalContent>
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
const ModalContent = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h4 {
      color: #404145;
      font-size: 24px;
      font-weight: 700;
    }
  }

  .modal_paragraph {
    margin-top: 12px;
    p {
      margin: 0;
      color: #62646a;
      font-size: 16px;
      font-weight: 500;
    }
  }
  .form_div {
    display: flex;
    margin-top:25px;
    .col_one {
      flex:1;
      span{
        font-weight: 600;
        margin-right: 8px;
        color: #404145;
        font-size:400;

      }
      svg{
        width:20px;
        height:20px;
        color:rgb(116, 118, 126);
      }
      select {
    word-wrap: normal;
    padding: 12px 5px;
    width: 100%;
    margin-top:10px;
}
    }
    
    .col_two{
      flex:1;
    }
  }
`;