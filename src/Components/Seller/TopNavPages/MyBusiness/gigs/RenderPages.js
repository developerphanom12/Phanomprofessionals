import React, { useState } from "react";
import { GigButton, CreateButton } from "../../../../../GlobalStyles";
import styled from "styled-components";
import Active from "./Active";
import PendingApprove from "./PendingApprove";
import Modification from "./Modification";
import Draft from "./Draft";
import Denied from "./Denied";
import Paused from "./Paused";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function RenderPages() {
  const [active, setActive] = useState("active");
  const [user, setUser] = useState();

  const navigate = useNavigate();

  const handleGigCreate = () => {
    toast.warn("Complete Steps In Sequence");
    navigate("/create");
  };
  return (
    <Root>
      <div className="tab_button_area">
        <div className="nav_tab">
          <div>
            <GigButton
              className={active === "active" ? "btn_1 active" : "btn_1"}
              onClick={() => {
                setActive("active");
              }}
            >
              ACTIVE
            </GigButton>
          </div>
          <div>
            <GigButton
              className={active === "pendingapprove" ? "btn_1 active" : "btn_1"}
              onClick={() => {
                setActive("pendingapprove");
              }}
            >
              PENDING APPROVAL
            </GigButton>
          </div>
          <div>
            <GigButton
              className={active === "modification" ? "btn_1 active" : "btn_1"}
              onClick={() => {
                setActive("modification");
              }}
            >
              REQUIRES MODIFICATION
            </GigButton>
          </div>
          <div>
            <GigButton
              className={active === "draft" ? "btn_1 active" : "btn_1"}
              onClick={() => {
                setActive("draft");
              }}
            >
              DRAFT
            </GigButton>
          </div>
          <div>
            <GigButton
              className={active === "denied" ? "btn_1 active" : "btn_1"}
              onClick={() => {
                setActive("denied");
              }}
            >
              DENIED
            </GigButton>
          </div>
          <div>
            <GigButton
              className={active === "paused" ? "btn_1 active" : "btn_1"}
              onClick={() => {
                setActive("paused");
              }}
            >
              PAUSED
            </GigButton>
          </div>
        </div>
        <div className="create_btn">
          <CreateButton
            onClick={() => {
              handleGigCreate()
            }}
          >
            CREATE A NEW GIG
          </CreateButton>
        </div>
      </div>
      <div className="table">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              {active === "active" ? (
                <Active detail={user} />
              ) : active === "pendingapprove" ? (
                <PendingApprove detail={user} />
              ) : active === "modification" ? (
                <Modification detail={user} />
              ) : active === "draft" ? (
                <Draft detail={user} />
              ) : active === "denied" ? (
                <Denied />
              ) : active === "paused" ? (
                <Paused />
              ) : (
                <Active />
              )}
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  background: #f7f7f7;
  .tab_button_area {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #99999973;
    margin: 20px 0px;
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
        border: none;
        width: fit-content;
        padding: 10px;
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
        @media (max-width: 400px) {
          .active {
            background-color: transparent;
            color: black;
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
    /* border: 1px solid #99999973; */
    background: #f7f7f7;
    @media (max-width: 600px) {
      padding: 0;
    }
  }
`;
