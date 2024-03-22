import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  EXCHANGE_URLS,
  EXCHANGE_URLS_IMAGES,
} from "../../../../Important/URLS";
import { toast } from "react-toastify";

export default function Paused({ formData, setFormData, handleSubmit }) {
  const [isChecked, setIsChecked] = useState(false);
  const [showDropdown, setShowDropdown] = useState([]);

  const [gigGet, setGigGet] = useState([]);

  useEffect(() => {
    const getSliderApi = async () => {
      try {
        const axiosConfig = {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        };
        const inactive = "inactive";
        const res = await axios.get(
          `${EXCHANGE_URLS}/gigsdatatat?selection=${inactive}`,
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
  const navigate = useNavigate();

  const handleDelete = (index) => {
    // Create a copy of the gigGet array
    const updatedGigGet = [...gigGet];
    // Remove the item at the specified index
    updatedGigGet.splice(index, 1);
    // Update the gigGet state with the modified array
    setGigGet(updatedGigGet);
  };

  return (
    <Root>
      <table>
        <thead>
          <tr className="head">
            <td colSpan={7}>
              <h6>PAUSED GIGS</h6>
            </td>
            <td colSpan={8}></td>
          </tr>
          <tr>
            <td colSpan={2}></td>
            <td colSpan={2}>
              <span>GIG</span>
            </td>
            <td colSpan={2}>
              {" "}
              <span>IMPRESSIONS</span>
            </td>
            <td></td>

            <td colSpan={2}>
              <span>CLICKS</span>{" "}
            </td>
            <td colSpan={2}>
              <span>ORDERS</span>{" "}
            </td>
            <td colSpan={2}>
              {" "}
              <span>DATE</span>
            </td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        {gigGet &&
          gigGet.map((gigData, index) => (
            <tbody>
              <tr>
                <td colSpan={2}>
                  <img
                    className="img"
                    src={`${EXCHANGE_URLS_IMAGES}/${gigData?.gigsimages?.image1}`}
                    alt={`Image 1`}
                  />
                </td>
                <td colSpan={2}>
                  <span>{gigData?.gig_title}</span>
                </td>
                <td colSpan={2}>
                  {" "}
                  <span>0</span>
                </td>
                <td></td>

                <td colSpan={2}>
                  <span>0</span>{" "}
                </td>
                <td colSpan={2}>
                  <span>0</span>{" "}
                </td>
                <td colSpan={2}>
                  {" "}
                  <span>0</span>
                </td>
                <td></td>
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
                          <li
                            onClick={() => {
                              setFormData({ ...formData, is_open: 1 });
                              handleSubmit(gigData.gig_id);
                            }}
                          >
                            Activate
                          </li>
                          <li onClick={() => handleDelete(index)}>Delete</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </Root>
  );
}
const Root = styled.section`
  margin: -10px;
  table {
    width: 100%;
    /* / border-collapse: collapse; / */
  }
  .head td {
    font-size: 14px;
    line-height: 17px;
    padding-top: 15px;
    padding-bottom: 15px;
    color: #0e0e0f;
    text-transform: uppercase;

    option {
      text-transform: uppercase;
      color: #555;
      cursor: pointer;
      &:hover {
        background-color: transparent;
        color: #1dbf73;
      }
    }
  }
  th,
  td {
    padding: 8px;
    text-align: left;
    padding: 5px 15px;
    font-size: 14px;
    line-height: 20px;
    color: #999;
    vertical-align: middle;
    white-space: nowrap;
    img {
      width: 40px;
      height: 40px;
    }
  }
  tr {
    /* / border-bottom: 1px solid #ddd; / */
    background-color: #fff;
    border: 1px #e5e5e5 solid;
  }

  th {
    background-color: #f2f2f2;
    text-transform: uppercase;
  }
  td {
    h6 {
      font-weight: 600;
      color: #0e0e0f;
      font-size: 14px;
    }
    span {
      color: #999;
      font-size: 13px;
      font-weight: 600;
    }
    .button_select {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      align-items: center;
      gap: 5px;
      button,
      select {
        padding: 6px 20px;
        margin-right: 5px;
        border: 1px solid #ccc;
        background-color: #fff;
        color: #999;
        border-radius: 3px;
        font-size: 12px;
        font-weight: 600;
        /* / float: left; / */
        text-transform: uppercase;
      }
      select:focus-visible {
        border-radius: 3px;
        outline: none;
      }
    }
    svg {
      width: 27px;
      height: 27px;
      border: 1px solid #55555578;
    }
    .dropdown_wrapper {
      position: relative;
    }

    .dropdown_menu {
      position: absolute;
      top: 59px;
      left: -70px;
      background-color: #fff;
      border: 1px solid #5556;
      border-radius: 4px;
      padding: 8px;
    }

    .dropdown_menu ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    .dropdown_menu ul li {
      padding: 4px 0;
      cursor: pointer;
      font-weight: 500;
      color: #777;
      text-transform: uppercase;
      font-size: 13px;
    }

    .dropdown_menu ul li:hover {
      background-color: #f2f2f2;
    }
  }
  .table td:first-child {
    padding-left: 20px;
  }
  @media (max-width: 567px) {
    overflow: auto;
  }
`;
