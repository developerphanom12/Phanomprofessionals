import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GigButton } from "../../../../../../GlobalStyles";
import IndexO from "./editOverview/IndexO";
import IndexP from "./editPricing/IndexP";
import IndexD from "./editDescription/IndexD";
import IndexR from "./editRequirements/IndexR";
import IndexG from "./editGallery/IndexG";
import axios from "axios";
import { EXCHANGE_URLS } from "../../../../../Important/URLS";
import { toast } from "react-toastify";


export default function EditGigsPage() {
  const [active, setActive] = useState("editoverview");
  const [editGetGig, setEditGetGig] = useState([]);


  useEffect(() => {
    const getApi = async () => {
      try {
        const res = await axios.get(`${EXCHANGE_URLS}/gigslist/8`);
        if (res?.status === 201) {
          setEditGetGig(res?.data?.message || []);
        }
      } catch (err) {
        toast.error(err, "Error");
      }
    };

    getApi();
  }, []);

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
                className={active === "editpricing" ? "btn_1 active" : "btn_1"}
                onClick={() => {
                  setActive("editpricing");
                }}
              >
                Pricing
              </GigButton>
            </div>
            <div>
              <GigButton
                className={
                  active === "editdescriptionFAQ" ? "btn_1 active" : "btn_1"
                }
                onClick={() => {
                  setActive("editdescriptionFAQ");
                }}
              >
                Description & FAQ
              </GigButton>
            </div>
            <div>
              <GigButton
                className={
                  active === "editrequirements" ? "btn_1 active" : "btn_1"
                }
                onClick={() => {
                  setActive("editrequirements");
                }}
              >
                Requirements
              </GigButton>
            </div>
            <div>
              <GigButton
                className={active === "editgallery" ? "btn_1 active" : "btn_1"}
                onClick={() => {
                  setActive("editgallery");
                }}
              >
                Gallery
              </GigButton>
            </div>
          </div>
        </div>
      </div>
      <div className="table">EDIT GIGS
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-12">
              {active === "editoverview" ? (
                <IndexO editGetGig={editGetGig}/>
              ) : active === "editpricing" ? (
                <IndexP editGetGig={editGetGig}/>
              ) : active === "editdescriptionFAQ" ? (
                <IndexD editGetGig={editGetGig}/>
              ) : active === "editrequirements" ? (
                <IndexR editGetGig={editGetGig}/>
              ) : active === "editgallery" ? (
                <IndexG editGetGig={editGetGig}/>
              ) : (
                <IndexO editGetGig={editGetGig}/>
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
    .tab_button_area {
      padding-left: 20px;
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
