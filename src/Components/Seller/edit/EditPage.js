import React, { useState } from "react";
import styled from "styled-components";
import { GigButton } from "../../../GlobalStyles";
import Gallery from "./gallery/Gallery";
import Requirements from "./requirements/Requirements";
import Pricing from "./pricing/Pricing";
import DescriptionFAQ from "./description/DescriptionFAQ";
import EditOverview from "./editoverview/EditOverview";

export default function EditPage() {
  const [active, setActive] = useState("editoverview");
  const [user, setUser] = useState();
  return (
    <Root>
      <div className="tab_button_area">
        <div className="nav_tab">
          <div>
            <div>
              <GigButton
                className={active === "editoverview" ? "btn_1 active" : "btn_1"}
                onClick={() => {
                  setActive("editoverview");
                }}
              >
                Overview
              </GigButton>
            </div>
            <div>
              <GigButton
                className={active === "pricing" ? "btn_1 active" : "btn_1"}
                onClick={() => {
                  setActive("pricing");
                }}
              >
                Pricing
              </GigButton>
            </div>
            <div>
              <GigButton
                className={
                  active === "descriptionFAQ" ? "btn_1 active" : "btn_1"
                }
                onClick={() => {
                  setActive("descriptionFAQ");
                }}
              >
                Description & FAQ
              </GigButton>
            </div>
            <div>
              <GigButton
                className={active === "requirements" ? "btn_1 active" : "btn_1"}
                onClick={() => {
                  setActive("requirements");
                }}
              >
                Requirements
              </GigButton>
            </div>
            <div>
              <GigButton
                className={active === "gallery" ? "btn_1 active" : "btn_1"}
                onClick={() => {
                  setActive("gallery");
                }}
              >
                Gallery
              </GigButton>
            </div>
          </div>
          <div className="button_nav_div">
            <button>Save</button>
            <button>Save & Preview</button>
          </div>
        </div>
      </div>
      <div className="table">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              {active === "editoverview" ? (
                <EditOverview />
              ) : active === "pricing" ? (
                <Pricing detail={user} />
              ) : active === "descriptionFAQ" ? (
                <DescriptionFAQ detail={user} />
              ) : active === "requirements" ? (
                <Requirements detail={user} />
              ) : active === "gallery" ? (
                <Gallery detail={user} />
              ) : (
                <EditOverview />
              )}
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
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
    border-bottom: 1px solid #dadbdd;
    .nav_tab {
      padding: 0px 130px;
      display: flex;
      gap: 10px;
      width: 100%;
      justify-content: space-between;
      color: #999;
      font-size: 14px;
      line-height: 42px;
      font-weight: 400;
      text-decoration: none;
      text-transform: uppercase;
      > div {
        display: flex;
        gap: 20px;
      }
      .button_nav_div {
        padding: 10px;
        display: flex;
        gap: 20px;
        button {
          padding: 6px 11px;
          line-height: 21px;
          font-size: 14px;
          background-color: #fff;
          color: #222325;
          border: 1px solid #e4e5e7;
          border-radius: 5px;
          font-weight: 600;
        }
      }
      @media (max-width: 786px) {
        flex-direction: column;
      }

      .btn_1 {
        background-color: transparent;
        border-bottom: 3px solid #fff;
        width: fit-content;
        padding: 8px;
        color: #62646a;

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
    .container-fluid{
      display: flex;
      justify-content: center;
    }
  }
  .table > :not(caption) > * > * {
    background-color: #f7f7f7 !important;
  }
`;
