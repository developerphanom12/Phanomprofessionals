import React, { useEffect, useState } from "react";
import styled from "styled-components";
import profilee from "../../../../Images/Boyspic.png";
import { CreateButton } from "../../../../../GlobalStyles";
import { CiEdit } from "react-icons/ci";
import { FaLocationDot, FaUser } from "react-icons/fa6";
import Profile2 from "./Profile2";
import { toast } from "react-toastify";
import axios from "axios";
import { EXCHANGE_URLS } from "../../../../Important/URLS";
import { IoTimeOutline } from "react-icons/io5";
import photo from "../../../../Images/project-placeholder.svg";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [isEdit, setIsEdit] = useState(false);
  const [profile, setProfile] = useState();
  const [updateData, setUpdateData] = useState({
    username: "",
    technology_name: "",
    phone_number: "",
    email: "",
    city: "",
    education: "",
    languages: "",
  });
  const navigate = useNavigate();

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  useEffect(() => {
    const getSliderApi = async () => {
      try {
        const axiosConfig = {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        };
        const res = await axios.get(
          `${EXCHANGE_URLS}/sellerProfile`,
          axiosConfig
        );

        if (res?.status === 201) {
          setProfile(res?.data?.message || []);
          // Set initial values for updateData if profile is available
          const profileData = res?.data?.message[0];
          if (profileData) {
            setUpdateData({
              username: profileData.username,
              technology_name: profileData.technology_name,
              phone_number: profileData.phone_number,
              email: profileData.email,
              city: profileData.city,
              education: profileData.education,
              languages: profileData.languages,
            });
          }
        }
      } catch (err) {
        toast.error(err, "Error");
      }
    };

    getSliderApi();
  }, []);

  const updateProfileApi = async () => {
    try {
      const axiosConfig = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      const res = await axios.put(
        `${EXCHANGE_URLS}/updateprofiledata`,
        updateData,
        axiosConfig
      );
      if (res?.status === 201) {
        navigate("/dashboard");
        toast.success("Your profile is updated ");
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  const handleSubmit = () => {
    updateProfileApi();
    setIsEdit(false); // Ensure edit mode is turned off after submission
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateData({
      ...updateData,
      [name]: value,
    });
  };

  return (
    <Root>
      {profile && (
        <div className="main_div1">
          <div className="profile_div">
            <div className="profile_image">
              <p>
                <span>online</span>
              </p>
              <img src={profilee} alt="img" />
            </div>
            <div className="username">
              <div className="editing">
                <CiEdit onClick={toggleEdit} />
                {isEdit && (
                  <div className="edit_page">
                    <div className="update_button">
                      <button
                        className="button"
                        onClick={() => {
                          setIsEdit(false); // Cancel edit mode
                        }}
                      >
                        Cancel
                      </button>
                      <CreateButton onClick={handleSubmit}>
                        Update
                      </CreateButton>
                    </div>
                    <input
                      name="username"
                      placeholder="What's your story in one line?"
                      value={updateData.username}
                      onChange={handleInputChange}
                    />
                  </div>
                )}
              </div>
              <div className="user_button">
                <button>{profile[0].username}</button>
                <CiEdit />
              </div>
              <b>{profile[0].technology_name}</b>
            </div>
            <div className="preview_button_div">
              <button>Preview Phanom Profile</button>
            </div>
            <div className="list_div">
              <ul>
              <li>
                  <span>
                    <FaLocationDot />
                    Email
                  </span>
                  <b>example@gmail.com</b>
                </li>
                <li>
                  <span>
                    <FaLocationDot />
                    Phone Number
                  </span>
                  <b>5657676878</b>
                </li>
                <li>
                  <span>
                    <FaLocationDot />
                    From
                  </span>
                  <b>India</b>
                </li>
                <li>
                  <span>
                    <FaUser />
                    Member Since
                  </span>
                  <b>Feb 24</b>
                </li>
                <li>
                  <span>
                    <IoTimeOutline />
                    Avg. Response Time
                  </span>
                  <b>1 hour🔥</b>
                </li>
              </ul>
            </div>
          </div>
          <div className="portfolio_div">
            <div className="portfolio_box">
              <div className="descrip_head">
                <h3 style={{ color: "#404145" }}>My Portfolio</h3>
              </div>
              <ul>
                <li
                  className="add_image"
                  onClick={() => {
                    navigate("/createportfolio");
                  }}
                >
                  <div>
                    {" "}
                    <IoMdAdd />
                  </div>
                  <b> Add a Project</b>
                </li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>

          <div className="description_div">
            <div className="descrip_box">
              <div className="descrip_head">
                <h3>Description</h3>
                <a href="/edit">Edit Description</a>
              </div>
              <div className="descrip_body">
                <p>
                  Business consultant based in India, Phanom Professionals have
                  served many phenomenal services, which has been a great
                  milestone for lots of start-up proving them Digital Marketing,
                  Video Marketing, Packaging & Labeling, UIUX, 2D/3D Animation,
                  Graphic Designing, Branding, Web Development & Designing
                  assistance as well as to established companies. Steadfastness
                  comes from consistent satisfactory performances, which Phanom
                  Professional provides to their clients. Being an advertising
                  companion, the outcomes are immensely pleasing and blithe the
                  client, which reduce time consumption.
                </p>
              </div>
            </div>
            <div className="descrip_box">
              <div className="descrip_head">
                <h3>Languages</h3>
                <a href="/edit">Add New </a>
              </div>
              <div className="descrip_body">
                <span>English -</span>
                <span>Native/Bilingual</span>
              </div>
            </div>
            <div className="descrip_box">
              <div className="descrip_head">
                <h3>Skills</h3>
                <a href="/edit">Add New </a>
              </div>
              <div className="descrip_body">
                <span>Business-</span>
                <span>Business</span>
              </div>
            </div>
            <div className="descrip_box">
              <div className="descrip_head">
                <h3>Education</h3>
                <a href="/edit">Add New</a>
              </div>
              <div className="descrip_body">
                <span>Business-</span>
                <span>Business</span>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="main_div2">
        <Profile2 />
      </div>
    </Root>
  );
}
const Root = styled.section`
  padding: 20px;
  background-color: #f7f7f7;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  font-family: macan, helvetica neue, Helvetica, Arial, sans-serif;
  .main_div1 {
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    .profile_div {
      background-color: #fff;
      border: 1px solid #dadbdd;
      padding: 30px 30px 0px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .profile_image {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
          width: 100%;
          span {
            color: green;
            border: 1px solid green;
            border-radius: 10px;
            font-size: 12px;
            width: 50px;
            text-align: center;
            float: right;
          }
        }
        img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
        }
      }
      .username {
        color: #7a7d85;
        width: 100%;
        padding: 10px;
        text-align: center;
        .user_button {
          button {
            font-weight: 700;
            color: #222325;
            cursor: default;
            background: none;
            border: 0;
            font-size: 20px;
            line-height: 28px;
          }
          svg {
            /* / float: left; / */
            /* / height: 100%; / */
            margin-left: 5px;
            color: #7a7d85;
            /* / width: 100%; / */
          }
        }
      }
      .editing {
        width: 100%;
        text-align: center;
        svg {
          color: #7a7d85;
        }
        .edit_page {
          display: flex;
          flex-direction: column;
          justify-content: center;
          input {
            /* / display: block; / */
            width: 100%;
            font-size: 14px;
            line-height: 120%;
            text-decoration: underline;
            text-align: center;
            padding: 1px 0 14px;
            outline: none;
            border: 1px solid #fff;
          }
          .update_button {
            display: flex;
            width: 100%;
            padding: 20px 10px;
            justify-content: space-between;
            button {
              width: 45%;
            }
            .button {
              color: #1dbf73;
              border: 1px solid #1dbf73;
              background-color: #fff;
              font-weight: 700;
              padding: 5px 10px;
              font-size: 12px;
              border-radius: 5px;
              &:hover {
                background: #19a463;
                color: #fff;
              }
            }
          }
        }
      }
      .preview_button_div {
        padding: 10px 0px 20px;
        display: flex;
        flex: 1 1;
        width: 100%;
        button {
          width: 100%;
          padding: 7px 0px;
          background-color: #fff;
          border: 1px solid #62646a;
          color: #62646a;
          border-radius: 5px;
          font-size: 14px;
          font-weight: 600;
        }
      }
      .list_div {
        display: flex;
        border-top: 1px solid #dadbdd;
        width: 100%;
        ul {
          width: 100%;
          list-style: none;
          padding: 10px 0px;
          margin-bottom: 0px;
          li {
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
            color: #62646a;
            b {
              font-size: 14px;
            }
            span {
              font-size: 14px;
              svg {
                margin-right: 10px;
                width: 13px;
                height: 13px;
                fill: rgb(98, 100, 106);
              }
            }
          }
        }
      }
    }
    .description_div,
    .portfolio_div {
      background-color: #fff;
      border: 1px solid #ddd;
      padding: 30px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .portfolio_box {
        border: none !important;
        cursor: pointer;
        ul {
          padding: 0;
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          .add_image {
            color: #446ee7;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #fff;
            background-image: none;
            box-shadow: 0px 2px 5px 2px #e7e5e5;
            border-radius: 3px;
            border: none;
            b {
              font-size: 14px;
            }
            svg {
              font-size: 20px;
            }
          }
          li {
            border: 1px solid #ddd;
            width: 164px;
            height: 110px;
            background-color: #fafafa;
            background-image: url(${photo});
            background-repeat: no-repeat;
            padding: 20px;
            background-position: 50%;
          }
        }
      }
      .descrip_box,
      .portfolio_box {
        width: 100%;
        border-bottom: 1.5px solid #dadbdd;
        .descrip_head {
          width: 100%;
          /* padding-top: 20px; */
          display: flex;
          justify-content: space-between;
          h3 {
            color: #0e0e0f;
            font-size: 16px;
            font-weight: 700;
            padding-bottom: 7px;
          }
          a {
            color: #00698c;
            font-size: 14px;
            font-weight: 400;
            text-decoration: none;
            &:hover {
              text-decoration: underline;
            }
          }
        }
        .descrip_body {
          width: 100%;
          margin-bottom: 10px;

          p {
            font-size: 14px;
            color: #62646a;
            line-height: 20px;
          }
          span {
            margin-bottom: 10px;
            padding: 10px 0px;
            color: #b2b2b2;
            font-size: 14px;
            font-weight: 400;
          }
        }
      }
    }
  }
  .main_div2 {
    width: 60%;
  }

  @media (max-width: 567px) {
    .main_div2 {
      width: 100%;
      margin-top: 20px;
    }
    .gig_box {
      width: 100%;
    }
    .tab_button_area .nav_tab {
      flex-direction: row;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    flex-wrap: unset;
    gap: 30px;

    .tab_button_area .nav_tab {
      flex-direction: row;
    }
    .gig_box {
      width: 100%;
    }
  }
`;
