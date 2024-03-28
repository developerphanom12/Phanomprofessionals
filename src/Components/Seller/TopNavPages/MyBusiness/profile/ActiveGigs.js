import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosAdd, IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  EXCHANGE_URLS,
  EXCHANGE_URLS_IMAGES,
} from "../../../../Important/URLS";
import { toast } from "react-toastify";

export default function ActiveGigs() {
  const [isChecked, setIsChecked] = useState(false);
  const [showDropdown, setShowDropdown] = useState([]);
  const navigate = useNavigate();

  const [gigGet, setGigGet] = useState([]);

  useEffect(() => {
    const getSliderApi = async () => {
      try {
        const axiosConfig = {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        };
        const active = "active";
        const res = await axios.get(
          `${EXCHANGE_URLS}/gigsdatatat?selection=${active}`,
          axiosConfig
        );
        if (res?.status === 200) {
          setGigGet(res?.data?.data);
        }
      } catch (err) {
        toast.error(err, "Error");
      }
    };

    getSliderApi();
  }, []);
  useEffect(() => {
    const initializeDropdownStates = () => {
      // Initialize dropdown states for each row
      const dropdownStates = new Array(gigGet.length).fill(false);
      setShowDropdown(dropdownStates);
    };

    initializeDropdownStates();
  }, [gigGet]);

  const handleDropdownClick = (index) => {
    // Toggle dropdown state for the clicked row
    const newDropdownStates = [...showDropdown];
    newDropdownStates[index] = !newDropdownStates[index];
    setShowDropdown(newDropdownStates);
  };
  return (
    <Root>
      <div className="gig_box">
        <div
          className="svg_file"
          onClick={() => {
            navigate("/create");
          }}
        >
          <IoIosAdd />
        </div>
        <div className="text_gig">
          <a href="create">Create a new gig</a>
        </div>
      </div>

      {gigGet &&
        gigGet.map((gigData, index) => (
          <tbody>
            <tr>
              <td colSpan={2}>
                <img
                  className="img"
                  src={`${EXCHANGE_URLS_IMAGES}/${gigData?.gigsimages?.image1}`}
                  alt={`Image 1`}
                  onClick={() => {
                    navigate("/internalpage");
                  }}
                />
              </td>
              <td className="title" colSpan={2}>
                <span
                  onClick={() => {
                    navigate("/internalpage");
                  }}
                >
                  {gigData?.gig_title}
                </span>
              </td>

              <td colSpan={2}>
                <div className="dropdown_wrapper">
                  <IoMdArrowDropdown
                    onClick={() => handleDropdownClick(index)}
                  />
                  {showDropdown[index] && (
                    <div className="dropdown_menu">
                      <ul>
                        <li>Preview</li>
                        <li
                          onClick={() => {
                            navigate("/editgigspages");
                          }}
                        >
                          Edit
                        </li>
                        <li>Paused</li>
                        <li>Delete</li>
                      </ul>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          </tbody>
        ))}
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  flex-wrap: wrap;
  .gig_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border: 1px solid #dadbdd;
    background-color: #fff;
    width: 232px;
    min-height: 260px;
    padding-bottom: 8px;
    float: left;
    position: relative;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    .svg_file {
      margin: 20px 10px;
      svg {
        color: #fff;
        background-color: #222325;
        border: 5px solid #222325;
        border-radius: 50%;
        width: 70px;
        height: 70px;
      }
    }
    .text_gig {
      width: 100%;
      text-align: center;
      a {
        color: #555;
        font-size: 14px;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }
  tbody {
    display: flex;
    flex-wrap: wrap;
    width: 31%;
    margin-left: 20px;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #dadbdd;
    img {
      height: 100%;
      width: 100%;
      &:hover{
      cursor:pointer
    }
    }
  }
  .title {
    text-align: center;
    margin-top: 10px;
  }
  span {
    font-size: 14px;
    padding-top: 10px;
    font-weight: 500;
    color: #555;
    height: 40px;
    text-align: center;
    margin-bottom: 10px;
    &:hover{
      cursor:pointer;
      text-decoration: underline;
    }
  }

  tbody tr {
    display: flex;
    flex-wrap: wrap;
  }
`;
