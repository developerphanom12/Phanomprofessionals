import React, { useState } from "react";
import styled from "styled-components";
import { GigButton } from "../../../GlobalStyles";
import Gallery from "./gallery/Gallery";
import Requirements from "./requirements/Requirements";
import Pricing from "./pricing/Pricing";
import DescriptionFAQ from "./description/DescriptionFAQ";
import CreateOverview from "./createoverview/CreateOverview";
import { useParams } from "react-router-dom";

export default function CreatePage() {
  const [active, setActive] = useState("createoverview");
  const { id } = useParams(); 
  return (
    <Root>
      <div className="tab_button_area">
        <div className="nav_tab">
          <div>
            <div>
              <GigButton
                className={
                  active === "createoverview" ? "btn_1 active" : "btn_1"
                }
                onClick={() => {
                  setActive("createoverview");
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
        </div>
      </div>
      <div className="table">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
            {active === "createoverview" || (active === "createoverview" && id) ? (
                <CreateOverview />
              ) : active === "pricing" ? (
                <Pricing />
              ) : active === "descriptionFAQ" ? (
                <DescriptionFAQ />
              ) : active === "requirements" ? (
                <Requirements />
              ) : active === "gallery" ? (
                <Gallery />
              ) : (
                <CreateOverview />
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
    .container-fluid {
      display: flex;
      justify-content: center;
    }
  }
  .table > :not(caption) > * > * {
    background-color: #f7f7f7 !important;
  }

  @media (max-width: 567px) {
    .fizYSn .tab_button_area .nav_tab .btn_1 {
      font-size: 11px;
    }

    .tab_button_area .nav_tab {
      padding: unset;
    }
    .tab_button_area .nav_tab > div {
      gap: 0;
    }
    .tab_button_area .nav_tab .btn_1 {
      min-width: 63px;
    }
  }
  @media (min-width: 567px) and (max-width: 992px) {
    .tab_button_area .nav_tab {
      padding: 0px 120px;
    }
  }
`;
