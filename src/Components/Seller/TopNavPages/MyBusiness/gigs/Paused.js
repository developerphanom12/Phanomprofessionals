import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  EXCHANGE_URLS,
  EXCHANGE_URLS_IMAGES,
} from "../../../../Important/URLS";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { MenuItem, Select } from "@mui/material";

export default function Paused() {
  const gigId = useSelector((state) => state.users.gigId);
  const [showDropdown, setShowDropdown] = useState([]);
  const [formData, setFormData] = useState({
    id: gigId,
    is_open: 1,
  });

  const [formDatadeleted, setFormDatadeleted] = useState({
    id: gigId,
    is_deleted: 1,
  });
  const [gigGet, setGigGet] = useState([]);

  const appApi = async (updatedData) => {
    try {
      const axiosConfig = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res = await axios.post(
        `${EXCHANGE_URLS}/activategig `,
        updatedData,
        axiosConfig
      );
      if (res?.status === 201) {
        navigate("/gigs");
        toast.success("activate successfull");
      }
    } catch (err) {
      toast.error("error");
    }
  };

  const appApidelete = async (updatedDatadelete) => {
    try {
      const axiosConfig = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res = await axios.post(
        `${EXCHANGE_URLS}/deletegig `,
        updatedDatadelete,
        axiosConfig
      );
      if (res?.status === 201) {
        navigate("/gigs");
        toast.success("Gig  Delete Permanent successfull");
      }
    } catch (err) {
      toast.error("error");
    }
  };

  const handleSubmit = async (gigId) => {
    const updatedData = { ...formData, id: gigId };
    await appApi(updatedData);
  };

  const handleSubmitfordelete = async (gigId) => {
    const updatedDatadelete = { ...formDatadeleted, id: JSON.stringify(gigId) };
    await appApidelete(updatedDatadelete);
  };

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
          const dropdownStates = new Array(res.data.data.length).fill(false);
          setShowDropdown(dropdownStates);
        }
      } catch (err) {
        toast.error("Error fetching gigs");
      }
    };

    getSliderApi();
  }, []);

  const handleDropdownClick = (index) => {
    const newDropdownStates = [...showDropdown];
    newDropdownStates[index] = !newDropdownStates[index];
    setShowDropdown(newDropdownStates);
  };

  const navigate = useNavigate();

  const handleActivate = (gigId) => {
    setFormData({ ...formData, is_open: 1 });
    handleSubmit(gigId);
  };

  const handleDeleted = (gigId) => {
    setFormDatadeleted({ ...formDatadeleted, is_deleted: 1 });
    handleSubmitfordelete(gigId);
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
              <span>DATE</span>
            </td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {gigGet.map((gigData, index) => (
            <tr key={index}>
              <td colSpan={2}>
                <img
                  className="imgj"
                  src={`${EXCHANGE_URLS_IMAGES}/${gigData?.gigsimages?.image1}`}
                  alt="img"
                />
              </td>
              {/* <td colSpan={2}> */}
              <span>{gigData?.gig_title}</span>
              {/* </td> */}
              <td colSpan={2}>
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
                <span>0</span>
              </td>
              <td></td>
              <td colSpan={2}>
                <div className="dropdown_wrapper">
                  <Select className="dropdown_menu">
                    <MenuItem
                      value="preview"
                      onClick={() => {
                        navigate(`/editgigspages/${gigData?.gig_ids}`);
                      }}
                    >
                      Preview
                    </MenuItem>
                    <MenuItem
                      value="edit"
                      onClick={() => {
                        navigate("/editgigspages");
                      }}
                    >
                      Edit
                    </MenuItem>
                    <MenuItem
                      value="activate"
                      onClick={() => handleActivate(gigData.gig_ids)}
                    >
                      Activate
                    </MenuItem>
                    <MenuItem
                      value="delete"
                      onClick={() => handleDeleted(gigData.gig_ids)}
                    >
                      Delete
                    </MenuItem>
                  </Select>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Root>
  );
}
const Root = styled.section`
  margin: -10px;
  max-width: 100vw;
  table {
    width: 100%;
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
    overflow: hidden;
    text-overflow: ellipsis;
    .imgj {
      width: 40px;
      height: 40px;
    }
  }
  tr {
    background-color: #fff;
    border: 1px #e5e5e5 solid;
  }

  th {
    background-color: #f2f2f2;
    text-transform: uppercase;
  }
  span {
    color: #999;
    font-size: 13px;
    font-weight: 600;
    width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis !important;
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
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
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
    .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root {
      font-size: 0rem;
    }
    .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
      border: none;
    }
    .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
      padding-right: 18px;
      padding-bottom: 10px;
      padding-top: 10px;
      padding-left: 19px;
    }
  }
  .table td:first-child {
    padding-left: 20px;
  }
  @media (max-width: 567px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
