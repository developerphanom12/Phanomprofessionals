import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import styled from "styled-components";

export default function Draft() {
  const [isChecked, setIsChecked] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <Root>
      <table>
        <thead>
          <tr className="head">
            <td colSpan={7}>
              <h6>DRAFT GIGS</h6>
            </td>
            <td colSpan={8}>
              <div className="button_select">
                {isChecked && (
                  <>
                    <button>Active</button>
                    <button>Delete</button>
                  </>
                )}
                <select>
                  Last 30 Days
                  <option>Last 7 Days</option>
                  <option>Last 14 Days</option>
                  <option>Last 30 Days</option>
                  <option>Last 2 months</option>
                  <option>Last 3 months</option>
                </select>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <input type="checkbox" onChange={handleCheckboxChange} />
            </td>
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
              <span>CANCELLATIONS</span>
            </td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2}>
              <input type="checkbox" onChange={handleCheckboxChange} />
            </td>
            <td colSpan={2}>
              <span>0</span>
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
                <IoMdArrowDropdown onClick={handleDropdownClick} />
                {showDropdown && (
                  <div className="dropdown_menu">
                    <ul>
                      <li>Preview</li>
                      <li>Edit</li>
                      <li>Activate</li>
                      <li>Delete</li>
                    </ul>
                  </div>
                )}
              </div>
            </td>
          </tr>
          <tr className="head">
            <td colSpan={5}>no active gigs</td>
          </tr>
        </tbody>
      </table>
    </Root>
  );
}
const Root = styled.section`
  margin: -10px;
  table {
    width: 100%;
    /* border-collapse: collapse; */
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
  }
  tr {
    /* border-bottom: 1px solid #ddd; */
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
        /* float: left; */
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
`;
