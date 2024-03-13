import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoInformationCircle } from "react-icons/io5";
import styled from "styled-components";
import Metadata from "./Metadata";
import axios from "axios";
import { toast } from "react-toastify";
import { EXCHANGE_URLS } from "../../../Important/URLS";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateGigId } from "../../../../redux/users/action";

export default function EditOverview() {
  const [data, setData] = useState({
    gig_title: "",
    category_id: 1,
    subcategory_id: 1,
    service_type: "",
    tags: "",
    programing_language: [],
    website_feature: [],
  });


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const appApi = async () => {
    try {
      const axiosConfig = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res = await axios.post(
        `${EXCHANGE_URLS}/giggscreate`,
        data,
        axiosConfig
      );
      if (res?.status === 200) {
        const gigId = res.data.id; // Assuming the gig ID is returned in the response
        dispatch(updateGigId(gigId));
        navigate("/pricing")
        toast.success("Updated");
      }
    } catch (err) {
      toast.error("error");
    }
  };

  const handleSubmit = () => {
    appApi();
  };
  return (
    <Root>
      <div className="main_div_section">
        <div className="input_group">
          <div className="input_label">
            <span>Gig title</span>
            As your Gig storefront, your{" "}
            <b>title is the most important place</b> to include keywords that
            buyers would likely use to search for a service like yours.
          </div>
          <div className="input_div">
            <textarea
              placeholder="text"
              value={data.gig_title}
              onChange={(e) => {
                setData({ ...data, gig_title: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="input_group">
          <div className="input_label">
            <span>Category</span>
            Choose the category and sub-category most suitable for your Gig.
          </div>
          <div className="input_div">
            {/* <select
              value={data.programing_language}
              onChange={(e) => {
                // Convert selected option values to an array
                const selectedLanguages = Array.from(
                  e.target.selectedOptions,
                  (option) => option.value
                );
                setData({
                  ...data,
                  programing_language: selectedLanguages, // Update with an array
                });
              }}
            >
              PROGRAMMING & TECH <IoIosArrowDown />
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
            </select> */}
            
            <select>
              SOFTWARE DEVELOPMENT <IoIosArrowDown />
              <option>Option A</option>
              <option>Option B</option>
              <option>Option C</option>
            </select>
          </div>
        </div>
        <div className="input_group">
          <div className="input_label">
            <span>Service type</span>
          </div>
          <div className="input_div">
            <select
              value={data.service_type}
              onChange={(e) => {
                setData({
                  ...data,
                  service_type: e.target.value,
                });
              }}
            >
              WEB APPLICATIONS <IoIosArrowDown />
              <option>Option A</option>
              <option>Option B</option>
              <option>Option C</option>
            </select>
          </div>
        </div>
        <button onClick={handleSubmit}>add</button>
        <div className="input_group">
          <div className="input_label">
            <span>Gig metadata</span>
          </div>
          <div className="input_divv">
            <Metadata  value={data}/>
          </div>
        </div>
        <div className="input_group">
          <div className="input_label">
            <span>Search tags</span>
            Tag your Gig with buzz words that are relevant to the services you
            offer. Use all 5 tags to get found.
          </div>
          <div className="input_div_area">
            <div>
              <h6>Positive keywords</h6>
            </div>
            <div>
              <span>
                Enter search terms you feel your buyers will use when looking
                for your service.
              </span>
            </div>
            <input placeholder="tag here" value={data.tags}
              onChange={(e) => {
                setData({ ...data, tags: e.target.value });
              }}/>
          </div>
        </div>
        <div className="input_group">
          <div className="input_label"></div>
          <div className="information">
            <span>
              <IoInformationCircle />
              Please note:
            </span>
            Some categories require that sellers verify their skills.
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 50px;
  padding: 0px 40px;
  .main_div_section {
    background: #fff;
    display: flex;
    flex-direction: column;
    border: 1px solid #dadbdd;
    border-radius: 5px;
    width: 75vw;
    .input_group {
      display: flex;
      width: 100%;
      padding: 10px;
      justify-content: space-between;
      .input_label {
        width: 22vw;
        padding: 28px;
        display: flex;
        flex-direction: column;
        color: #404145;
        font-size: 14px;
        line-height: 21px;
        span {
          color: #222325;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 7px;
        }
      }
      .input_div_area {
        display: flex;
        padding: 10px;
        width: 45vw;
        justify-content: center;
        flex-direction: column;
        span {
          margin-bottom: 16px;
          font-size: 14px;
          line-height: 21px;
          color: #7a7d85;
        }
        h6 {
          color: #404145;
          line-height: 24px;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 7px;
        }

        input {
          width: 100%;
          border: 1px solid #dadbdd;
          padding: 8px;
          outline: none;
          margin-top: 10px;
        }
      }
      .information {
        display: flex;
        padding: 10px;
        align-items: center;
        width: 45vw;
        color: #62646a;
        font-size: 14px;
        span {
          color: #fc832b;
          font-weight: 600;
          display: flex;
          align-items: center;
          padding: 0px 5px;
          svg {
            width: 20px;
            height: 20px;
          }
        }
      }
      .input_divv {
        width: 45vw;
        position: relative;
        padding: 10px;
        justify-content: space-between;
        display: flex;
        align-items: center;
      }
      .input_div {
        width: 45vw;
        position: relative;
        padding: 10px;
        justify-content: space-between;
        display: flex;
        align-items: center;
        textarea {
          width: 100%;
          border: 1px solid #dadbdd;
          border-radius: 7px;
          padding: 8px;
          height: 22vh;
          outline: none;
        }
        button {
          display: flex;
          justify-content: space-between;
          width: 250px;
          height: 35px;
          padding: 5px;
          background-color: #fff;
          border: 1px solid #dbdbdb;
          font-size: 14px;
          font-weight: 500;
          color: #202020;
        }
      }
    }
  }
`;
