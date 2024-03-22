import React, { useEffect, useState } from "react";
import { GigButton, CreateButton } from "../../../../../GlobalStyles";
import styled from "styled-components";
import Active from "./Active";
import PendingApprove from "./PendingApprove";
import Modification from "./Modification";
import Draft from "./Draft";
import Paused from "./Paused";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { EXCHANGE_URLS } from "../../../../Important/URLS";

export default function RenderPages() {
  const [active, setActive] = useState("active");
  const gigId = useSelector((state) => state.users.gigId);
  const [formData, setFormData] = useState({
    id: gigId,
    is_open: "",
  });
  console.log(gigId,"formDataformData")

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const appApi = async () => {
    try {
      const axiosConfig = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const updatedData = {
        ...formData,
        gig_id: gigId,
      };
      const res = await axios.post(
        `${EXCHANGE_URLS}/activategig `,
        updatedData,
        axiosConfig
      );
      console.log("formData", formData);
      if (res?.status === 201) {
        navigate("/dashboard");
        toast.success("activate successfull");
      }
    } catch (err) {
      toast.error("error");
    }
  };

  const handleSubmit = () => {
    appApi();
  };

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
          {/* <div>
            <GigButton
              className={active === "denied" ? "btn_1 active" : "btn_1"}
              onClick={() => {
                setActive("denied");
              }}
            >
              DENIED
            </GigButton>
          </div> */}
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
              handleGigCreate();
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
                <Active />
              ) : active === "pendingapprove" ? (
                <PendingApprove />
              ) : active === "modification" ? (
                <Modification />
              ) : active === "draft" ? (
                <Draft
                  formData={formData}
                  setFormData={setFormData}
                  handleSubmit={handleSubmit}
                />
              ) : // ) : active === "denied" ? (
              //   <Denied />
              active === "paused" ? (
                <Paused
                  formData={formData}
                  setFormData={setFormData}
                  handleSubmit={handleSubmit}
                />
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
    flex-wrap: wrap;

    .nav_tab {
      display: flex;
      width: 80vw;
      gap: 10px;
      /* / padding: 10px; / */
      color: #999;
      font-size: 14px;
      line-height: 42px;
      font-weight: 400;
      text-decoration: none;
      text-transform: uppercase;
      /* @media (max-width: 786px) {
        flex-direction: column;
      } */

      .btn_1 {
        width: 15vw;
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
    /* / border: 1px solid #99999973; / */
    background: #f7f7f7;
    @media (max-width: 600px) {
      padding: 0;
    }
  }

  @media (max-width: 567px) {
    .tab_button_area {
      padding-bottom: 20px;
    }

    .tab_button_area .nav_tab {
      display: unset;
    }

    .tab_button_area .create_btn {
      margin-left: 100px;
    }
  }
  @media (min-width: 567px) and (max-width: 992px) {
    .tab_button_area {
      flex-wrap: unset;
      gap: 30px;
    }
  }
`;
