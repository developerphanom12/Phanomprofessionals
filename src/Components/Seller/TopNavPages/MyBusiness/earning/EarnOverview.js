import React, { useState } from "react";
import styled from "styled-components";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GrDocumentCsv } from "react-icons/gr";


export default function EarnOverview() {
  const [show, setShow] = useState(false);
  function toggleShowName(){
    setShow(prevState => !prevState);
  };
  return (
    <Root>
      <div className="main_div"  onClick={() => setShow(!show)}>
        <div className="main_div_one">
          <div className="column_one">
            <h6>Available funds</h6>
            <div className="column_border">
              <div className="conten_div_one">
                <h4>Balance available for use</h4>
                <h2>$0.00</h2>
              </div>
              <div className="content_div_two">
                <a href="#" className="withdraw_link">
                  Withdraw balance
                </a>
                <a href="#" className="payout_link">
                  Manage payout methods
                </a>
              </div>
            </div>
          </div>

          <div className="column_two">
            <h6>Future payments</h6>
            <div className="column_border">
              <div className="conten_div_one">
                <div className="content_icon">
                  <h4>Payments being cleared</h4>
                  <HiQuestionMarkCircle />
                </div>

                <h2>$0.00</h2>
              </div>

              <div className="content_div_two">
                <div className="content_icon">
                  <h4>Payments for active orders</h4>
                  <HiQuestionMarkCircle />
                </div>

                <p className="hypen">-</p>
                <p className="coming_soon">Coming soon</p>
              </div>
            </div>
          </div>

          <div className="column_three">
            <div class="column_three_head">
              <h6>Earnings & expenses</h6>
              <select>
                <option>Since joining</option>
                <option>This Year</option>
                <option>This Month</option>
              </select>
            </div>

            <div className="column_border">
              <div className="conten_div_one">
                <div className="content_icon">
                  <h4>Earnings this year</h4>
                  <HiQuestionMarkCircle />
                </div>

                <h2>$0.00</h2>
                <p>Your earnings this year.</p>
              </div>

              <div className="content_div_two">
                <div className="content_icon">
                  <h4>Expenses this year</h4>
                  <HiQuestionMarkCircle />
                </div>

                <p className="expense-value">$0.00</p>
                <p className="coming_soon">
                  Earnings spent on purchases this year.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="main_div_two">
          <div className="table_menubar">
            <button  onClick={toggleShowName}>
              <span>Date range</span>
              <MdKeyboardArrowDown/>
            </button>
            <div className="show-content"> 
              {show && <h1>Hello Gagan</h1>}
            </div>
            
            <button>
              <span>Acitivity</span>
              <MdKeyboardArrowDown />
            </button>
          </div>

          <div className="table_status">
                  <div className="status_content">
                    <span>Showing 0 results.</span>
                  </div>

                  <div className="email_tooltip">
                    <button>
                    <GrDocumentCsv />
                      <span>Email activity report</span>
                    </button>
                  </div>

                
          </div>

          <div className="table_body">
            <div className="table_body_header">
                  <span>Date</span>
                  <span>Activity</span>
                  <span>Description</span>
                  <span>From</span>
                  <span>Other</span>
                  <span>Amount</span>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}

const Root = styled.section`
  .main_div {
    padding: 32px 32px 64px;
  }

  .main_div_one {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    gap: 15px;
    .column_one {
      flex: 1;
      h6 {
        font-weight: 700;
        color: #404145;
        font-size: 18px;
      }
      .column_border {
        border: 1px solid #e4e5e7;
        padding: 24px 32px 33px;
        .conten_div_one {
          h4 {
            font-weight: 600;
            color: #62646a;
            font-size: 16px;
          }
          h2 {
            font-size: 40px;
            font-weight: 700;
            margin-top: 24px;
            color: #404145;
          }
        }

        .content_div_two {
          margin-top: 120px;

          .withdraw_link {
            padding: 12px 24px;
            border-radius: 4px;
            text-align: center;
            cursor: pointer;
            background-color: #f5f5f5;
            font-weight: 600;
            line-height: 100%;
            font-size: 16px;
            color: #62646a;
            text-decoration: none;
          }
          .payout_link {
            display: block;
            text-decoration: underline;
            margin-top: 24px;
            color: #404145;
            font-size: 18px;
          }
        }
      }
    }

    .column_two {
      flex: 1;
      h6 {
        font-weight: 700;
        color: #404145;
        font-size: 18px;
      }
      .column_border {
        border: 1px solid #e4e5e7;
        padding: 24px 32px;
        .conten_div_one {
          border-bottom: 1px solid #e4e5e7;
          padding-bottom: 50px;
          .content_icon {
            display: flex;

            h4 {
              font-weight: 600;
              color: #62646a;
              font-size: 16px;
            }
            svg {
              width: 16px;
              height: 16px;
              fill: rgb(181, 182, 186);
              margin-left: 5px;
            }
          }

          h2 {
            font-size: 32px;
            font-weight: 700;
            margin-top: 24px;
            color: #404145;
          }
        }
        .content_div_two {
          margin-top: 20px;
          .content_icon {
            display: flex;

            h4 {
              font-weight: 600;
              color: #62646a;
              font-size: 16px;
            }
            svg {
              width: 16px;
              height: 16px;
              fill: rgb(181, 182, 186);
              margin-left: 5px;
            }
          }

          .hypen {
            font-weight: 500;
            font-size: 30px;
            color: #404145;
          }
          .coming_soon {
            font-weight: 400;
            font-size: 14px;
            color: #62646a;
          }
        }
      }
    }

    .column_three {
      flex: 1;
      .column_three_head {
        display: flex;
        justify-content: space-between;
        h6 {
          font-weight: 700;
          color: #404145;
          font-size: 18px;
        }
        select {
          border: none;
          font-size: 14px;
          color: #62646a;
          padding: 5px;
        }
      }

      .column_border {
        border: 1px solid #e4e5e7;
        padding: 24px 32px 0;
        .conten_div_one {
          border-bottom: 1px solid #e4e5e7;
          padding-bottom: 18px;
          .content_icon {
            display: flex;

            h4 {
              font-weight: 600;
              color: #62646a;
              font-size: 16px;
            }
            svg {
              width: 16px;
              height: 16px;
              fill: rgb(181, 182, 186);
              margin-left: 5px;
            }
          }

          h2 {
            font-size: 32px;
            font-weight: 700;
            margin-top: 24px;
            color: #404145;
          }
          p {
            margin-top: 8px;
            font-weight: 400;
            font-size: 14px;
            color: #62646a;
          }
        }
        .content_div_two {
          margin-top: 20px;
          .content_icon {
            display: flex;

            h4 {
              font-weight: 600;
              color: #62646a;
              font-size: 16px;
            }
            svg {
              width: 16px;
              height: 16px;
              fill: rgb(181, 182, 186);
              margin-left: 5px;
            }
          }

          .expense-value {
            font-weight: 500;
            font-size: 30px;
            font-weight: 700;
            color: #404145;
            margin-top: 24px;
          }
          .coming_soon {
            font-weight: 400;
            font-size: 14px;
            color: #62646a;
          }
        }
      }
    }
  }

  .main_div_two {
    margin-top: 40px;
    .table_menubar {
      display:flex;
      button {
        border-radius: 4px;
        border: 1px solid #dadbdd;
        padding:10px 17px;
        background-color:#fff;
        margin-right:20px;
        span {
          color: #404145;
          font-weight: 600;
          font-size: 16px;
          text-align: center;
          cursor: pointer;
        }
      }
    }

    .table_status{
      margin-top:24px;
      display: flex;
      justify-content: space-between;

      .status_content{
        span{
          color: #62646a;
          font-size:16px;
          font-weight:500;


        }
      }
      .email_tooltip{
        button{
          border:none;
          background:#fff;
          svg{
            color:green;
            width: 20px;
            height:27px;
          }
          span{
          font-weight: 600;
          margin-left: 8px;
          color: #404145;
          cursor: pointer;
          font-size:16px;
        }
        }
        

      }
    }

    .table_body{
      margin-top: 24px;
      border: 1px solid #dadbdd;
      border-radius: 6px;
      height:400px;
      .table_body_header{
        background-color:#fafafa;
          display:flex;
          padding:15px 20px;
          span{
            flex:1;
            color:#404145;
            font-size: 14px;
            font-weight: 700;
            text-align:center;
          }
      }
    }
  }
`;