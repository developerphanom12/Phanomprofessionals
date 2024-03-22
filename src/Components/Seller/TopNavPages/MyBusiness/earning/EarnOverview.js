import React, { useState } from "react";
import styled from "styled-components";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GrDocumentCsv } from "react-icons/gr";

export default function EarnOverview() {
  const [show, setShow] = useState(false);
  const [activity, setActivity] = useState(false);

  function toggleShowName() {
    setShow((prevState) => !prevState);
  }

  function toggleActivity() {
    setActivity((prevState) => !prevState);
  }
  return (
    <Root>
      <div className="main_div">
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
            <button onClick={toggleShowName}>
              <span>Date range</span>
              <MdKeyboardArrowDown />
            </button>

            <button onClick={toggleActivity}>
              <span>Acitivity</span>
              <MdKeyboardArrowDown />
            </button>
          </div>

          {show && (
            <div className="table_filter">
              <div className="table_filter_header">
                <h6 className="table_heading">Date range</h6>
              </div>
              <div className="table_filter_body">
                <select>
                  <option>Select a month</option>
                  <option>Mar 2024</option>
                  <option>Feb 2024</option>
                  <option>Jan 2024</option>
                  <option>Dec 2023</option>
                  <option>Nov 2023</option>
                  <option>Oct 2023</option>
                  <option>Sep 2023</option>
                  <option>Aug 2023</option>
                  <option>Jul 2023</option>
                  <option>Jun 2023</option>
                  <option>May 2023</option>
                  <option>Apr Month</option>
                </select>

                <div className="date_maindiv">
                  <div className="from_date">
                    <h6>From</h6>
                    <input type="date" placeholder="Date"></input>
                  </div>
                  <div className="to_date">
                    <h6>To</h6>
                    <input type="date" placeholder="Date"></input>
                  </div>
                </div>
              </div>

              <div className="table_filter_footer">
                <div className="clear_btn">
                  <a href="#">Clear all</a>
                </div>
                <div className="submit_btn">
                  <a href="#">Apply</a>
                </div>
              </div>
            </div>
          )}

          {activity && (
            <div className="activity_div">
              <div className="activity_div_header">
                <h6 className="activity_heading">Activity</h6>
              </div>

              <div className="activity_footer">
                <div className="submit_btn">
                  <a href="#">Apply</a>
                </div>
              </div>
            </div>
          )}

          <div className="table_status">
            <div className="status_content">
              <span>Showing 0 results.</span>
            </div>

            <div className="email_tooltip">
              <button>
                <GrDocumentCsv />
                <span>Email activity report</span>
                <span className="tooltiptext">
                  Your report will include data based on the date range and
                  activity filters selected. Future payments will not appear in
                  the report.
                </span>
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
      display: flex;
      button {
        border-radius: 4px;
        border: 1px solid #dadbdd;
        padding: 10px 17px;
        background-color: #fff;
        margin-right: 20px;
        position: relative;
        span {
          color: #404145;
          font-weight: 600;
          font-size: 16px;
          text-align: center;
          cursor: pointer;
        }
      }
    }

    .table_status {
      margin-top: 24px;
      display: flex;
      justify-content: space-between;

      .status_content {
        span {
          color: #62646a;
          font-size: 16px;
          font-weight: 500;
        }
      }
      .email_tooltip {
        button {
          border: none;
          background: #fff;
          position: relative;
          display: inline-block;
          svg {
            color: green;
            width: 20px;
            height: 27px;
          }
          span {
            font-weight: 600;
            margin-left: 8px;
            color: #404145;
            cursor: pointer;
            font-size: 16px;
          }
        }
        button .tooltiptext {
          visibility: hidden;
          width: 260px;
          font-size: 15px;
          font-weight: 400;
          background-color: #404145;
          color: #fff;
          text-align: left;
          border-radius: 6px;
          padding: 15px 15px;
          position: absolute;
          z-index: 1;
          bottom: 125%;
          left: 0;
          margin-left: -60px;
          opacity: 0;
          transition: opacity 0.3s;
        }

        button .tooltiptext::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          margin-left: -5px;
          border-width: 5px;
          border-style: solid;
          border-color: #555 transparent transparent transparent;
        }

        button:hover .tooltiptext {
          visibility: visible;
          opacity: 1;
        }
      }
    }
    .table_body {
      margin-top: 24px;
      border: 1px solid #dadbdd;
      border-radius: 6px;
      height: 400px;
      .table_body_header {
        background-color: #fafafa;
        display: flex;
        padding: 15px 20px;
        span {
          flex: 1;
          color: #404145;
          font-size: 14px;
          font-weight: 700;
          text-align: center;
        }
      }
    }
  }

  .table_filter {
    width: 420px;
    border: 1px solid #dadbdd;
    padding: 24px 24px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 4px;
    margin-top: 20px;
    position: absolute;
    .table_heading {
      color: #222325;
      font-size: 18px;
      font-weight: 700;
    }
    .table_filter_body {
      margin-top: 15px;
      select {
        width: 100%;
        height: 45px;
        border-radius: 4px;
        border: 1px solid #dadbdd;
        color: #b5b6ba;
        margin-bottom: 24px;
        option {
          color: black;
          padding: 20px 0;
        }
      }

      .date_maindiv {
        display: flex;
        .from_date {
          width: 100%;
          margin-right: 12px;
          h6 {
            font-weight: 600;
            font-size: 14px;
            margin-bottom: 8px;
          }
          input {
            width: 100%;
            height: 45px;
            border-radius: 4px;
            border: 1px solid #dadbdd;
            color: #b5b6ba;
            margin-top: 5px;
          }
        }
        .to_date {
          width: 100%;
          margin-left: 12px;
          h6 {
            font-weight: 600;
            font-size: 14px;
            margin-bottom: 8px;
          }
          input {
            width: 100%;
            height: 45px;
            border-radius: 4px;
            border: 1px solid #dadbdd;
            color: #b5b6ba;
            margin-top: 5px;
          }
        }
      }
    }

    .table_filter_footer {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid #efeff0;
      margin-top: 30px;
      padding-top: 25px;
      .clear_btn {
        a {
          text-decoration: none;
          text-align: center;
          cursor: pointer;
          font-weight: 600;
          color: #62646a;
        }
      }
      .submit_btn {
        a {
          background-color: #1dbf73;
          color: #fff;
          padding: 10px 16px;
          font-size: 14px;
          text-decoration: none;
          border-radius: 4px;
          font-weight: 600;
          text-align: center;
          &:hover {
            background-color: #19a463;
          }
        }
      }
    }
  }

  .activity_div {
    width: 264px;
    border: 1px solid #dadbdd;
    padding: 24px 24px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 4px;
    margin-top: 20px;
    left: 14%;
    position: absolute;
    .activity_div_header {
      .activity_heading {
        color: #222325;
        font-size: 18px;
        font-weight: 700;
      }
    }
    .activity_footer {
      display: flex;
      justify-content: flex-end;
      border-top: 1px solid #efeff0;
      margin-top: 30px;
      padding-top: 25px;
      .submit_btn {
        a {
          background-color: #1dbf73;
          color: #fff;
          padding: 10px 16px;
          font-size: 14px;
          text-decoration: none;
          border-radius: 4px;
          font-weight: 600;
          text-align: center;
          &:hover {
            background-color: #19a463;
          }
        }
      }
    }
  }


  @media(max-width: 567px){
.main_div {
    padding: 0px 32px 10px;
}


.main_div_one .column_two {
    margin: 20px 0;
}

 .main_div_two .table_menubar {
    justify-content: space-between;
}
 .main_div_two .table_status {
    margin-top: 44px;
}

.main_div_two .table_body .table_body_header {
    padding: 15px 0;
    span {
    font-size: 8px;
}
}

 .table_filter {
    width: 329px;
    z-index:1;
}

 .activity_div {
  z-index:1;
}

}

@media(min-width: 567px) and ( max-width: 992px){
  .main_div {
    padding: 0px 10px 10px;
}


}

`;
