import React, { useEffect, useState } from "react";
import { IoInformationCircle } from "react-icons/io5";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";
import { EXCHANGE_URLS, EXCHANGE_URLS_CATEGORY } from "../../../Important/URLS";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateGigId } from "../../../../redux/users/action";
import * as Yup from "yup";
import { TagsInput } from "react-tag-input-component";

const validationSchema = Yup.object().shape({
  gigTitle: Yup.string().required("Gig title is required"),
  categoryId: Yup.string().required("Category is required"),
  subcategoryId: Yup.string().required("Subcategory is required"),
  serviceType: Yup.string().required("Service type is required"),
  tags: Yup.string().required("Tags are required"),
});

export default function CreateOverview() {
  const [idData, setIdData] = useState([]);
  const [active, setActive] = useState("page1");
  const [gigTitle, setGigTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [subcategoryId, setSubcategoryId] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [tags, setTags] = useState("");
  const [selectedProgrammingLanguages, setSelectedProgrammingLanguages] =
    useState([]);
  const [selectedWebsiteFeatures, setSelectedWebsiteFeatures] = useState([]);
  const [getCategory, setGetCategory] = useState([]);

  const { id } = useParams();

  const handleProgrammingLanguageChange = (event) => {
    const { value, checked } = event.target;
    setSelectedProgrammingLanguages((prevLanguages) =>
      checked
        ? [...prevLanguages, value]
        : prevLanguages.filter((lang) => lang !== value)
    );
  };

  const handleWebsiteFeatureChange = (event) => {
    const { value, checked } = event.target;
    setSelectedWebsiteFeatures((prevFeatures) =>
      checked
        ? [...prevFeatures, value]
        : prevFeatures.filter((feature) => feature !== value)
    );
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const appApi = async () => {
    const formData = {
      gig_title: gigTitle,
      category_id: categoryId,
      subcategory_id: subcategoryId,
      service_type: serviceType,
      tags: tags,
      programing_language: selectedProgrammingLanguages,
      website_feature: selectedWebsiteFeatures,
    };
    try {
      const axiosConfig = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res = await axios.post(
        `${EXCHANGE_URLS}/giggscreate`,
        formData,
        axiosConfig
      );
      console.log("formData", formData);
      if (res?.status === 201) {
        const gigId = res.data.data.id;
        dispatch(updateGigId(gigId));
        console.log("GigID", gigId);
        navigate("/pricing");
        toast.success("Updated");
        validationSchema;
      }
    } catch (err) {
      toast.error("error");
    }
  };

  const handleSubmit = () => {
    appApi();
  };

  const getCategoryApi = async () => {
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await axios.get(
        `${EXCHANGE_URLS_CATEGORY}/liscategory`,
        axiosConfig
      );
      if (res?.status === 201) {
        setGetCategory(res?.data?.message);
        const categoryId = res?.data?.message.map(
          (category) => category.category_id
        );
        setCategoryId(categoryId);
      }
    } catch (errors) {
      toast.error(errors, "Error");
    }
  };

  useEffect(() => {
    getCategoryApi();
  }, [id]);

  useEffect(() => {
    const getIdApi = async () => {
      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      try {
        const res = await axios.get(
          `${EXCHANGE_URLS_CATEGORY}/liscategory/${categoryId}`,
          axiosConfig
        );
        if (res?.status === 201) {
          setIdData(res?.data?.message || []);
          console.log("aghdfsgdhsad", res);
        }
      } catch (err) {
        toast.error(err, "Error");
      }
    };
    if (categoryId) {
      getIdApi();
    }
  }, [categoryId]);

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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <textarea
                placeholder="Title : Short but Effective"
                value={gigTitle}
                onChange={(e) => setGigTitle(e.target.value)}
              />
              {gigTitle.length < 100 && !gigTitle && (
                <p
                  className="error"
                  style={{ color: "red", fontSize: "11px", margin: "0" }}
                >
                  Please enter Gig title.
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="input_group">
          <div className="input_label">
            <span>Category</span>
            Choose the category and sub-category most suitable for your Gig.
          </div>
          <div className="input_div">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <select
                value={categoryId}
                onChange={(e) => {
                  setCategoryId(e.target.value);
                }}
              >
                <option value="">Select Category</option>
                {getCategory &&
                  getCategory.map((category, index) => (
                    <option key={index} value={category.category_id}>
                      {category.category_name}
                    </option>
                  ))}
              </select>

              {!categoryId && (
                <p
                  className="error"
                  style={{ color: "red", fontSize: "11px", margin: "0" }}
                >
                  Please select category.
                </p>
              )}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <select
                value={subcategoryId}
                onChange={(e) => setSubcategoryId(e.target.value)}
              >
                <option value="">Select Subcategory</option>
                {idData &&
                  idData.map((category) =>
                    category.subcategories.map((subcategory) => (
                      <option
                        key={subcategory.subcategory_id}
                        value={subcategory.subcategory_id}
                      >
                        {subcategory.subcategory_name}
                      </option>
                    ))
                  )}
              </select>
              {!subcategoryId && (
                <p
                  className="error"
                  style={{ color: "red", fontSize: "11px", margin: "0" }}
                >
                  Please select subcategory.
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="input_group">
          <div className="input_label">
            <span>Service type</span>
          </div>
          <div className="input_div">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <textarea
                className="text"
                placeholder="Ex: e-commerce website"
                type="text"
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
              />
              {!serviceType && (
                <p
                  className="error"
                  style={{ color: "red", fontSize: "11px", margin: "0" }}
                >
                  Please enter Service type.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="input_group">
          <div className="input_label">
            <span>Gig metadata</span>
          </div>
          <div className="input_divv">
            <div className="main_metadata">
              <div className="button_tab_area">
                <button
                  className={active === "page1" ? "btn_1 active" : "btn_1"}
                  onClick={() => {
                    setActive("page1");
                  }}
                >
                  PROGRAMMING LANGUAGE*
                </button>
              </div>
              <div className="button_tab_area">
                <button
                  className={active === "pagess" ? "btn_1 active" : "btn_1"}
                  onClick={() => {
                    setActive("pagess");
                  }}
                >
                  WEBSITE FEATURE
                </button>
              </div>
            </div>
            <div className="all_pages">
              {active === "page1" ? (
                <div className="button_pages">
                  <h6>Select the language you provide services for*</h6>
                  <div className="select_tabs">
                    <ul>
                      {["JavaScript", "Python"].map((language) => (
                        <li>
                          <label key={language}>
                            <input
                              type="checkbox"
                              value={language}
                              checked={selectedProgrammingLanguages.includes(
                                language
                              )}
                              onChange={handleProgrammingLanguageChange}
                            />{" "}
                            {language}
                          </label>
                        </li>
                      ))}
                    </ul>
                    {!selectedProgrammingLanguages && (
                      <p
                        className="error"
                        style={{ color: "red", fontSize: "11px", margin: "0" }}
                      >
                        Please select Language.
                      </p>
                    )}
                  </div>
                </div>
              ) : active === "pagess" ? (
                <div className="button_pages">
                  <h6>Select Features</h6>
                  <div className="select_tabs">
                    <ul>
                      {["Responsive Design", "SEO Optimization"].map(
                        (feature) => (
                          <li>
                            <label key={feature}>
                              <input
                                type="checkbox"
                                value={feature}
                                checked={selectedWebsiteFeatures.includes(
                                  feature
                                )}
                                onChange={handleWebsiteFeatureChange}
                              />{" "}
                              {feature}
                            </label>
                          </li>
                        )
                      )}
                    </ul>
                    {!selectedWebsiteFeatures && (
                      <p
                        className="error"
                        style={{ color: "red", fontSize: "11px", margin: "0" }}
                      >
                        Please select feature.
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <div className="button_pages">
                  <h6>Select the language you provide services for*</h6>
                  <div className="select_tabs">
                    <ul>
                      {["JavaScript", "Python"].map((language) => (
                        <li>
                          <label key={language}>
                            <input
                              type="checkbox"
                              value={language}
                              checked={selectedProgrammingLanguages.includes(
                                language
                              )}
                              onChange={handleProgrammingLanguageChange}
                            />{" "}
                            {language}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              <div className="button_page">
                <div className="select_tabs">
                  <ul>
                    <li>
                      <label>
                        <input type="checkbox" />
                        Other
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
            <pre>{JSON.stringify(tags)}</pre>
            <TagsInput
              placeholder="tag here"
              name="tags"
              value={tags}
              onChange={(newTags) => {
                setTags(newTags); 
              }}
            />
            {!tags && (
              <p
                className="error"
                style={{ color: "red", fontSize: "11px", margin: "0" }}
              >
                <em>press enter or comma to add new tag</em>
              </p>
            )}
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
        <div className="div4">
          <a type="button" role="button" href="/gigs">
            Cancle
          </a>
          <button
            type="submit"
            onClick={() => {
              handleSubmit();
            }}
          >
            Save
          </button>
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
        position: relative;
        padding: 10px;
        justify-content: space-between;
        display: flex;
        align-items: center;
        .main_metadata {
          display: flex;
          flex-direction: column;
          background-color: #f5f5f5;
          color: #74767e;
          height: 100%;
          border: 1px solid #b5b6ba;
          .button_tab_area {
            background: #f7f7f7;
            .btn_1 {
              border: 1px solid #f5f5f5;
              background-color: #f7f7f7;
              width: 100%;
              text-align: left;
              font-size: 12px;
              font-weight: 700;
              text-transform: uppercase;
              padding: 16px 12px;
              cursor: pointer;
              display: flex;
              flex: 1;
              color: #74767e;
            }
            .active {
              width: 102%;
              border-right: 1px solid #fff;
              background-color: #fff;
              border-top: 1px solid #c5c6c9;
              border-bottom: 1px solid #c5c6c9;
              :nth-child(1) {
                border-top: 1px solid #fff;
              }
            }
          }
        }

        .all_pages {
          display: flex;
          flex-direction: column;
          border: 1px solid #b5b6ba;
          border-left: 1px solid #fff;
          .button_page {
            border-top: 1px solid #dbdbdb;
          }
          .button_pages,
          .button_page {
            display: flex;
            flex-direction: column;
            padding: 12px 24px 24px;
            h6 {
              font-size: 14px;
              color: #74767e;
              line-height: 140%;
              font-weight: 700;
            }
            .select_tabs {
              display: flex;
              flex-direction: column;
              ul {
                display: flex;
                li {
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  label {
                    padding: 10px;
                    font-size: 13px;
                    input {
                      width: 20px;
                      height: 20px;
                      margin-right: 5px;
                      border-radius: 20px;
                      border: 1px solid #dbdbdb;
                      &:hover {
                        border: 1px solid #202020;
                        cursor: pointer;
                      }
                      &::after {
                        border: 6px solid #fff;
                        color: #000;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      .input_div {
        width: 45vw;
        position: relative;
        padding: 10px;
        justify-content: space-between;
        display: flex;
        /* flex-direction: column; */
        align-items: center;
        select,
        .text {
          width: 20vw;
          border: 1px solid #dadbdd;
          border-radius: 7px;
          padding: 8px;
          height: 8vh;
          outline: none;
        }
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
    .div4 {
      width: 90%;
      margin: 10px 40px;
      display: flex;
      justify-content: space-between;
      a,
      button {
        padding: 11px 20px;
        -webkit-box-pack: center;
        justify-content: center;
        align-items: center;
        gap: 8px;
        box-sizing: border-box;
        position: relative;
        border-radius: 8px;
        font-weight: 600;
        line-height: 24px;
        font-size: 16px;
        text-decoration: none;
        cursor: pointer;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        transition: 70ms cubic-bezier(0.75, 0, 0.25, 1);
      }
      a {
        color: #222325;
        border: 1px solid #e4e5e7;
      }
      button {
        background: #222325;
        border: 1px solid #fff;
        color: #fff;
      }
    }
  }

  @media (max-width: 567px) {
    margin: 0;
    padding: 0;
    .main_div_section {
      width: unset;
    }
    .main_div_section .input_group {
      display: unset;
    }
    .main_div_section .input_group .input_label {
      width: unset;
      padding: 11px;
    }
    .main_div_section .input_group .input_div {
      width: unset;
    }

    .main_div_section .input_group .input_div {
      justify-content: space-around;
    }

    .main_div_section .input_group .input_div select {
      width: 42vw;
    }
    .main_div_section .input_group .input_div .text {
      width: 85vw;
    }

    .main_div_section .input_group .input_divv {
      display: unset;
    }

    .main_div_section .input_group .input_divv .main_metadata {
      margin-bottom: 20px;
    }

    .main_div_section
      .input_group
      .input_divv
      .all_pages
      .button_pages
      .select_tabs
      ul,
    .iMxYZt
      .main_div_section
      .input_group
      .input_divv
      .all_pages
      .button_page
      .select_tabs
      ul {
      padding-left: 0;
      display: unset;
    }
    .hyxrIE
      .main_div_section
      .input_group
      .input_divv
      .all_pages
      .button_pages
      .select_tabs
      ul,
    .hyxrIE
      .main_div_section
      .input_group
      .input_divv
      .all_pages
      .button_page
      .select_tabs
      ul {
      padding-left: 0;
    }
    .main_div_section .input_group .input_div_area {
      width: unset;
    }

    .main_div_section .input_group .input_divv .all_pages .button_page ul {
      padding-left: 0px;
    }

    .main_div_section .input_group .information {
      width: unset;
    }
    .main_div_section .div4 {
      width: unset;
      margin: 10px 0px;
      justify-content: space-around;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    margin: 0;
    padding: 0;
    .main_div_section {
      width: 90vw;
    }
    .main_div_section .input_group .input_label {
      width: unset;
    }
    .main_div_section .input_group .input_div .text {
      width: 85vw;
    }
  }
`;
