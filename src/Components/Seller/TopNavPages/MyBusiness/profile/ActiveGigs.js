import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  EXCHANGE_URLS,
  EXCHANGE_URLS_IMAGES,
} from "../../../../Important/URLS";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { MenuItem, Select } from "@mui/material";

export default function ActiveGigs() {
  const gigId = useSelector((state) => state.users.gigId);
  // const [showDropdown, setShowDropdown] = useState([]);
  const [formDatadeleted, setFormDatadeleted] = useState({
    id: gigId,
    is_deleted: 1,
  });
  const navigate = useNavigate();

  const [formDatapause, setFormDatapause] = useState({
    id: gigId,
    is_open: 0,
  });
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
  

  const appApipause = async (updatedDatapause) => {
    try {
      const axiosConfig = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res = await axios.post(
        `${EXCHANGE_URLS}/pausegigs `,
        updatedDatapause,
        axiosConfig
      );
      if (res?.status === 201) {
        navigate("/gigs");
        toast.success("Gig  Pause successfull check now on pause");
      }
    } catch (err) {
      toast.error("error");
    }
  };

  const handleSubmitforpause = async (gigId) => {
    const updatedDatapause = { ...formDatapause, id: JSON.stringify(gigId) };
    await appApipause(updatedDatapause);
  };

  const handlepause = (gigId) => {
    setFormDatapause({ ...formDatapause, is_open: 0 });
    handleSubmitforpause(gigId);
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

  const handleSubmitfordelete = async (gigId) => {
    const updatedDatadelete = { ...formDatadeleted, id: JSON.stringify(gigId) };
    await appApidelete(updatedDatadelete);
  };

  const handleDeleted = (gigId) => {
    setFormDatadeleted({ ...formDatadeleted, is_deleted: 1 });
    handleSubmitfordelete(gigId);
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
              {" "}
              <div className="dropdown_wrapper">
                <Select className="dropdown_menu" IconComponent={MoreHorizIcon}>
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
                    onClick={() => handlepause(gigData.gig_ids)}
                  >
                    Paused
                  </MenuItem>
                  <MenuItem
                    value="delete"
                    onClick={() => handleDeleted(gigData.gig_ids)}
                  >
                    Delete
                  </MenuItem>
                </Select>
              </div>
              <td colSpan={2}>
                <img
                  className="img"
                  src={`${EXCHANGE_URLS_IMAGES}/${gigData?.gigsimages?.image1}`}
                  alt="gig img"
                  onClick={() => {
                    navigate("/internalpage");
                  }}
                />
              </td>
              <td className="title" colSpan={2}>
                <span
                  onClick={() => {
                    // navigate("/internalpage");
                    navigate(`/editgigspages/${gigData?.gig_ids}`);
                  }}
                >
                  {gigData?.gig_title}
                </span>
              </td>
              <td colSpan={2}></td>
            </tr>
          </tbody>
        ))}
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
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
      b {
        color: #555;
        font-size: 14px;
      }
    }
  }

  tbody {
    display: flex;
    flex-wrap: wrap;
    width: 31%;
    padding: 20px;
    padding-top: 5px;
    background-color: #fff;
    border: 1px solid #dadbdd;
    img {
      height: 100%;
      width: 100%;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .title {
    text-align: center;
    margin-top: 10px;
    width: 100%;
  }

  span {
    font-size: 14px;
    padding-top: 10px;
    font-weight: 500;
    color: #555;
    height: 40px;
    text-align: center;
    margin-bottom: 10px;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  tbody tr {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .dropdown_wrapper {
    width: 100%;
    margin-bottom: 5px;
    text-align: end;
  }
  .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root {
    font-size: 0rem;
  }
  .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    padding-right: 18px;
    padding-bottom: 10px;
    padding-top: 10px;
    padding-left: 19px;
  }

  @media (max-width: 567px) {
    .gig_box {
      width: 100%;
    }

    tbody {
      width: 100%;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    .gig_box {
      width: 45%;
    }

    tbody {
      width: 45%;
    }
  }
  .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border-color: #fff;
    border-width: 2px;
  }
  .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border-color: #fff;
  }
`;
