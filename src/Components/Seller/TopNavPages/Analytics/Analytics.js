import React, { useState } from 'react'
import styled from 'styled-components';
import RepeatBusiness from './RepeatBusiness';
import Overview from './Overview';
import { GigButton } from '../../../../GlobalStyles';

export default function Analytics() {
    const [active, setActive] = useState("overview");
  return (
    <Root>
      <div className="tab_button_area">
        <div className="nav_tab">
          <div>
            <GigButton
              className={active === "overview" ? "btn_1 active" : "btn_1"}
              onClick={() => {
                setActive("overview");
              }}
            >
              Overview
            </GigButton>
          </div>
          <div>
            <GigButton
              className={active === "repeatbusiness" ? "btn_1 active" : "btn_1"}
              onClick={() => {
                setActive("repeatbusiness");
              }}
            >
             Repeat Business
            </GigButton>
          </div>
        </div>
      </div>
      <div className="table">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              {active === "overview" ? (
                <Overview />
              ) : active === "repeatbusiness" ? (
                <RepeatBusiness />
              ) : (
                <Overview />
              )}
            </div>
          </div>
        </div>
      </div>
    </Root>
  )
}
const Root = styled.section`
display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: #f7f7f7;

  gap: 40px;
  .tab_button_area {
    background: #fff;
    display: flex;
    justify-content: space-between;
    border: 1px solid #99999973;
    .nav_tab {
      display: flex;
      gap: 10px;
      /* padding: 10px; */
      color: #999;
      font-size: 14px;
      line-height: 42px;
      font-weight: 400;
      text-decoration: none;
      text-transform: uppercase;
      @media (max-width: 786px) {
        flex-direction: column;
      }

      .btn_1 {
        background-color: transparent;
        border-bottom: 3px solid #fff;
        width: fit-content;
        padding: 8px;
        color: #999;

        @media (max-width: 566px) {
          min-width: 80px;
          width: 100%;
          padding: 5px;
          font-size: small;
          &:hover {
            background-color: transparent;
            color: black;
          }
        }
      }
      .active {
        color: #202020;
        font-weight: 600;
        border-bottom: 3px solid #1dbf73;
        @media (max-width: 400px) {
          .active {
            background-color: transparent;
            color: black;
            border-bottom: 2px solid #1dbf73;
          }
        }
      }
    }
    .create_btn {
      display: flex;
      align-items: center;
    }
  }
  .table {
    width: 100%;
    height: 100%;
    background-color: #f7f7f7 !important;
    @media (max-width: 600px) {
      padding: 0;
    }
  }
  .table > :not(caption) > * > * {
    background-color: #f7f7f7 !important;
  }
`