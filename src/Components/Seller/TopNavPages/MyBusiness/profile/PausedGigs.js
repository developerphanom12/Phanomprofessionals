import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosAdd, IoMdArrowDropdown } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsThreeDots } from "react-icons/bs";

import {
  EXCHANGE_URLS,
  EXCHANGE_URLS_IMAGES,
} from "../../../../Important/URLS";
import { toast } from "react-toastify";

export default function PausedGigs() {
  const gigId = useSelector((state) => state.users.gigId);
  const [isChecked, setIsChecked] = useState(false);
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

  const handleDelete = (index) => {
    const updatedGigGet = [...gigGet];
    updatedGigGet.splice(index, 1);
    setGigGet(updatedGigGet);
  };

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
      <div className="gig_box">
        <div
          className="svg_file"
          //  onClick={()=>{navigate("/create")}}
        >
          <IoIosAdd />
        </div>
        <div className="text_gig">
        <b onClick={navigate("/create")}>Create a new gig</b> 
        </div>
      </div>
      {gigGet.map((gigData, index) => (
        <tbody>
          <tr key={index}>
            <td colSpan={2}>
              <img
                className="img"
                src={`${EXCHANGE_URLS_IMAGES}/${gigData?.gigsimages?.image1}`}
                alt={`Image 1`}
              />
            </td>
            <td className="title" colSpan={2}>
              <span>{gigData?.gig_title}</span>
            </td>




            <td colSpan={2}>
              <div className="dropdown_wrapper">
              <BsThreeDots className="threedot_icon
                "  onClick={() => handleDropdownClick(index)}/>
                {showDropdown[index] && (
                  <div className="dropdown_menu">
                    <ul>
                      <li
                        onClick={() => {
                          navigate("/internalpage");
                        }}
                      >
                        Preview
                      </li>
                      <li
                        onClick={() => {
                          navigate("/editgigspages");
                        }}
                      >
                        Edit
                      </li>
                      <li onClick={() => handleActivate(gigData.gig_ids)}>
                        Activate
                      </li>
                      <li onClick={() => handleDeleted(gigData.gig_ids)}>
                        Delete
                      </li>
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
  gap:20px;
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
    background-color: #fff;
    border: 1px solid #dadbdd;
    img {
      height: 100%;
      width: 100%;
      &:hover{
      cursor:pointer;
    }
    }
  }
  .title {
    text-align: center;
    margin-top: 10px;
    width:100%;
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
  .dropdown_menu {
    padding: 10px 20px 10px 10px;
}

.dropdown_wrapper {
    position: absolute;

    left: 69%;
    top: 227px;
    background-color: #fff;
}
svg.threedot_icon {
    margin-left: 101px;
}

  @media (max-width: 567px){

.gig_box {
     width: 100%; 
}

tbody {
   width: 100%;
}

 }

 @media (min-width: 567px) and (max-width: 992px){
   .gig_box {
     width: 45%; 
}

tbody {
   width: 45%;
}
 }
`;
