import React, { useState } from "react";
import styled from "styled-components";
import imgg from "../Images/chainimg.png";
import { GiCornerFlag } from "react-icons/gi";
import { IoInformationCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import {
  BackButton,
  BlackButton,
  BlueButton,
  CreateButton,
} from "../../GlobalStyles";
import { FormControl, MenuItem, Modal, Box, Select } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import { EXCHANGE_URLS } from "../Important/URLS";
import { useSelector } from "react-redux";

export default function CreateSingMile({receiverId}) {
  const gigId = useSelector((state) => state.users.gigId);
  const [isSinglePayment, setIsSinglePayment] = useState(true);
  const [select, setSelect] = React.useState("");
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const [openn, setOpenn] = React.useState(false);
  const handleOpenn = () => setOpenn(true);
  const handleClose = () => setOpenn(false);
  const [offer, setOffer] = useState({
    gigs_id: gigId ? gigId.toString() : "1",
    offer_type: "singlepayment",
    receive_id: receiverId ? receiverId.toString() : "",
    offer_expire: "",
    describe_offer: "",
    revision: "",
    delivery_day: "",
    price: "",
  });
console.log("offer",offer)
  const offerApi = async () => {
    try {
      const axiosConfig = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res = await axios.post(
        `${EXCHANGE_URLS}/offercreate`,
        offer,
        axiosConfig
      );
      if (res?.status === 201) {
        toast.success("Updated");
        navigate("/gallery");
      }
    } catch (err) {
      toast.error("Fill all fields");
    }
  };

  const handleSubmit = () => {
    offerApi();
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setSelect(value);
    const newOffer = {
      ...offer,
      describe_offer: isSinglePayment
        ? value === "singlepayment"
          ? ""
          : offer.describe_offer
        : value === "singlepayment"
        ? ""
        : offer.describe_offer,
    };

    setOffer(newOffer);
  };
  const handleSwitch = () => {
    setIsSinglePayment(!isSinglePayment);
    setOffer({
      ...offer,
      offer_type: isSinglePayment ? "singlepayment" : "milestone",
      describe_offer: isSinglePayment ? "" : offer.describe_offer,
      revision: isSinglePayment ? 0 : offer.revision,
      delivery_day: isSinglePayment ? 0 : offer.delivery_day,
      price: isSinglePayment ? 0 : offer.price,
    });
  };

  // console.log("gigId", gigId);

  return (
    <Root>
      <h5>Choose how you want to get paid</h5>
      <ul className="ul">
        <p>
          {" "}
          Get paid in full once the project is completed, or break it into
          smaller chunks, called milestones, to get paid as you go.
        </p>
        <li>
          <GiCornerFlag />
          <div
            onClick={() => {
              handleOpenn();
              setIsSinglePayment(true);
              setOffer({
                ...offer,
                offer_type: "singlepayment", // Update offer_type
              });
            }}
          >
            <h6>Single Payment</h6>
            <span>Get paid in full after each order is completed.</span>
          </div>
        </li>

        <li>
          <GiCornerFlag />
          <div
            onClick={() => {
              handleOpenn();
              setIsSinglePayment(false);
              setOffer({
                ...offer,
                offer_type: "milestone", // Update offer_type
              });
            }}
          >
            <h6>Milestone</h6>
            <span>
              Work in gradual steps and get paid for each completed milestone.
            </span>
          </div>
        </li>
      </ul>

      <Modal
        open={openn}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {isSinglePayment ? (
            <div className="Single_milestone_page">
              <div className="create_heading">
                <h5>Create a single-payment offer</h5>
              </div>
              <div className="heading_body">
                <header>
                  <h6>title titletitle</h6>
                  <BackButton>Select a Package</BackButton>
                </header>
                <div className="input_img_textarea">
                  <span>
                    <img src={imgg} alt="img" />
                  </span>
                  <div>
                    <textarea
                      placeholder="Describe your offer"
                      value={offer.describe_offer}
                      onChange={(e) =>
                        setOffer({ ...offer, describe_offer: e.target.value })
                      }
                    ></textarea>{" "}
                    {offer.describe_offer.length === 0 && (
                      <p
                        style={{
                          color: "red",
                          fontSize: "10px",
                          padding: "10px",
                        }}
                      >
                        Not Valid Empty field
                      </p>
                    )}
                  </div>
                </div>
              </div>
              {/* -----------------------------singlepayment------------------------------ */}
              <div className="single_to_milestone_div">
                <h6>
                  Set up your offer or
                  <BlueButton onClick={handleSwitch}>
                    {isSinglePayment
                      ? "Switch to Milestone"
                      : "Switch to Single Payment"}
                  </BlueButton>
                </h6>
                <p>Define the terms of your offer and what it includes.</p>
                <div className="list_section">
                  <ul>
                    <li>
                      <b>Revision</b>
                      <div className="input_div">
                        <input
                          placeholder="1-10"
                          style={{
                            width: "110px",
                            border: "none",
                            padding: "10px 7px ",
                            borderRadius: "3px",
                            color: "rgb(68 68 74 / 81%);",
                            outline: "none",
                          }}
                          type="number"
                          value={offer.revision}
                          onChange={(e) =>
                            setOffer({ ...offer, revision: e.target.value })
                          }
                        />{" "}
                        {offer.revision.length === 0 && offer.revision.length > 10 && (
                          <p
                            style={{
                              color: "red",
                              fontSize: "10px",
                              padding: "10px",
                            }}
                          >
                            Fill in Numbers between 1-10
                          </p>
                        )}
                      </div>
                    </li>
                    <li>
                      <b>Delivery</b>
                      <div className="input_div">
                        <input
                          placeholder="day:0"
                          style={{
                            width: "110px",
                            border: "none",
                            padding: "10px 7px ",
                            borderRadius: "3px",
                            color: "rgb(68 68 74 / 81%);",
                            outline: "none",
                          }}
                          type="number"
                          value={offer.delivery_day}
                          onChange={(e) =>
                            setOffer({ ...offer, delivery_day: e.target.value })
                          }
                        />
                      </div>
                    </li>
                    <li>
                      <b>Price</b>
                      <div className="input_div">
                        $
                        <input
                          style={{
                            width: "110px",
                            border: "none",
                            padding: "10px 7px ",
                            borderRadius: "3px",
                            color: "rgb(68 68 74 / 81%);",
                            outline: "none",
                          }}
                          type="number"
                          value={offer.price}
                          onChange={(e) =>
                            setOffer({ ...offer, price: e.target.value })
                          }
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="Single_milestone_page">
              <div className="create_heading">
                <h5>Create a milestones offer</h5>
              </div>
              <div className="heading_body">
                <header>
                  <h6> title</h6>
                  <BackButton>Select a Package</BackButton>
                </header>
                <div className="input_img_textarea">
                  <span>
                    <img src={imgg} alt="img" />
                  </span>
                  <div>
                    <textarea placeholder="Describe your offer"></textarea>
                  </div>
                </div>
              </div>
              <div className="milestone_to_single_div">
                <h6>
                  Set up your offer or
                  <BlueButton onClick={handleSwitch}>
                    {isSinglePayment
                      ? " Switch to Milestone"
                      : " Switch to Single Payment"}
                  </BlueButton>
                </h6>
                <p>
                  Divide your work into pre-defined steps with specific goals
                  (minimum $50 for each milestone).
                </p>

                <div className="list_section">
                  <ul>
                    <li>
                      <b>1st milestone name</b>
                      <div className="input_div">
                        <textarea placeholder="enter a mildstone name"></textarea>
                      </div>
                    </li>
                    <li>
                      <b>Revision (Optional)</b>
                      <div>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                          <Select
                            value={select}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ "aria-label": "Without label" }}
                          >
                            <MenuItem value=""></MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </li>
                    <li>
                      <b>Delivery</b>
                      <div>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                          <Select
                            value={select}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ "aria-label": "Without label" }}
                          >
                            <MenuItem value=""></MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </li>
                    <li>
                      <b>Price</b>
                      <div className="input_div">
                        $
                        <textarea placeholder=" 0" />
                      </div>
                    </li>
                  </ul>

                  <div className="below_list_section">
                    <div className="text_div">
                      <textarea placeholder="Describe your offer in detail (optional)" />
                    </div>
                    <p>
                      Adding a description helps set expectations with buyers.
                    </p>
                  </div>
                  <div className="green_btn_div">
                    {" "}
                    <CreateButton className="green_btn">Save </CreateButton>
                  </div>
                  <div className="total_day_pay">
                    <p className="upper_p">
                      {" "}
                      Total: 0 days
                      <b class="amount">$0</b>
                    </p>
                    <p className="lower_p">
                      You'll get paid for each milestone once it's marked as
                      completed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="below_all_section">
            <ul className="ull">
              <li>
                <div className="div">
                  <input type="checkbox" />
                  <b>Offer expires in</b>
                </div>
                <div>
                  <input
                    style={{
                      width: "120px",
                      border: "1px solid lightgray",
                      padding: "10px 7px ",
                      borderRadius: "3px",
                      color: "rgb(68 68 74 / 81%);",
                      outline: "none",
                    }}
                    type="date"
                    value={offer.offer_expire}
                    onChange={(e) =>
                      setOffer({ ...offer, offer_expire: e.target.value })
                    }
                  />
                </div>
              </li>
              <li className="request">
                <div className="div">
                  <input type="checkbox" onChange={handleCheckboxChange} />
                  <b>Request for requirements</b>
                </div>
                {!isChecked && (
                  <div className="info_div">
                    <div>
                      <IoInformationCircleOutline />
                    </div>
                    <div>
                      <span>
                        The order will start immediately upon payment.
                        <br /> Make sure you have all of the required
                        information to start working.
                      </span>
                    </div>
                  </div>
                )}
              </li>
            </ul>

            <div className="offer_includes">
              <h6>Offer includes</h6>
              <ul>
                <li>
                  <label>
                    <input type="checkbox" />
                    <b>Number of pages</b>
                  </label>
                  <textarea placeholder="1"></textarea>
                </li>
                <li>
                  <label>
                    <input type="checkbox" />
                    <b>Design customization</b>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" />
                    <b>Content upload</b>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" />
                    <b>Responsive design</b>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" />
                    <b>Include Source Code</b>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" />
                    <b>Licensed images</b>
                  </label>
                  <textarea placeholder="1"></textarea>
                </li>
                <li>
                  <label>
                    <input type="checkbox" />
                    <b>Detailed code comments</b>
                  </label>
                </li>
              </ul>
            </div>
            <div className="last_section">
              <BlackButton>Back</BlackButton>
              <CreateButton style={{ fontSize: "16px" }} onClick={handleSubmit}>
                Send Offer
              </CreateButton>
            </div>
          </div>
        </Box>
      </Modal>
    </Root>
  );
}
const Root = styled.section`
  h5 {
    padding: 16px 20px;
    background: #f5f5f5;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    font-weight: 600;
    border-bottom: 1px solid lightgray;
  }
  .ul {
    padding: 0;
    list-style: none;
    p {
      color: #62646a;
      padding: 20px;
      font-size: 18px;
      line-height: 26px;
    }
    li {
      display: flex;
      margin: 0px 20px 20px;
      padding: 20px;
      border: 1px solid lightgray;
      border-radius: 3px;
      svg {
        font-size: 35px;
        margin: 10px;
      }
      > div {
        flex-direction: column;
        padding: 0px 10px;
        h6 {
          font-size: 18px;
          color: #404145;
          font-weight: 600;
        }
        span {
          color: #62646a;
          font-size: 16px;
          line-height: 26px;
        }
      }
      &:hover {
        border: 1px solid darkgreen;
        cursor: pointer;
      }
    }
  }

  .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border: 1px solid lightgray;
    font-weight: 700;
    outline: none;
  }

  .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    padding-right: 32px;
    color: #62646a;
    font-weight: 600;
    line-height: 42px;
    text-decoration: none;
    font-size: 16px;
  }

  .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 0px 5px;
  }

  .MuiBackdrop-root.MuiModal-backdrop.css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop {
    opacity: 0 !important;
  }
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 470,
  bgcolor: "background.paper", // This seems incorrect, bgcolor should be a string value like "white" or "#ffffff"
  boxShadow: 24,
  borderRadius: 1,
  overflow: "auto",
  flex: "1",
  ".Single_milestone_page": {
    h5: {
      padding: "16px 20px",
      background: "#f5f5f5",
      borderTopLeftRadius: "5px",
      borderTopRightRadius: "5px",
      fontWeight: "600",
      borderBottom: "1px solid lightgray",
    },
    ".heading_body": {
      padding: "20px 20px 0px",
      width: "50vw",
      "@media (max-width: 768px)": {
        width: "90vw",
      },
      header: {
        paddingBottom: "20px",
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        h6: {
          fontSize: "16px",
          color: "#404145",
          lineHeight: "140%",
          fontWeight: 600,
          height: "auto",
        },
        ".BackButton": {
          marginLeft: "20px",
        },
      },
      ".input_img_textarea": {
        paddingBottom: "20px",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        margin: "10px",
        "@media (max-width: 768px)": {
          flexWrap: "wrap",
        },
        img: {
          width: "160px",
          minWidth: "100px",
          height: "100%",
          objectFit: "contain",
          margin: "10px",
        },
        "> div": {
          border: "1px solid #c5c6c9",
          borderRadius: "4px",
          boxSizing: "border-box",
          color: "#404145",
          display: "inline-block",
          height: "150px",
          padding: "12px 14px",
          width: "65vw",
          position: "relative",
          transition: "0.15s ease-in-out",
          textarea: {
            outline: "none",
            border: "none",
            textDecoration: "none",
            height: "100%",
            width: "100%",
          },
          "@media (max-width: 768px)": {
            width: "74vw",
            height: "100px",
            marginTop: "10px",
          },
        },
      },
    },
    ".milestone_to_single_div, .single_to_milestone_div": {
      padding: "20px",
      h6: {
        display: "flex",
        color: "#404145",
        alignItems: "center",
        fontWeight: 600,
        margin: 0,
      },
      p: {
        padding: "20px ",
        color: "#62646a",
      },
      ".list_section": {
        border: "1px solid rgb(197, 198, 201)",
        borderRadius: "4px",
        padding: "20px",
        ".green_btn_div": {
          width: "100%",
          display: "flex",
          paddingBottom: "20px",
          margin: "10px",
          borderBottom: "1px solid lightgray",
          justifyContent: "end",
          ".green_btn": {
            fontSize: "16px",
            fontWeight: 600,
            padding: "8px 12px",
          },
        },
        ".total_day_pay": {
          ".upper_p": {
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
            fontWeight: 600,
            margin: 0,
            b: {
              padding: "0px 20px",
            },
          },
          ".lower_p": {
            paddingBottom: 0,
            margin: 0,
            color: "#95979d",
            fontSize: "14px",
            lineHeight: "21px",
          },
        },
        ul: {
          display: "flex",
          flexWrap: "wrap",
          padding: 0,
          color: "#62646a",
          fontSize: "14px",
          listStyle: "none",
          justifyContent: "space-between",
          li: {
            flexDirection: "column",
            paddingBottom: 0,
            // paddingRight: "16px",
            b: {
              display: "flex",
              paddingBottom: "8px",
              whiteSpace: "nowrap",
            },
            ".input_div": {
              border: "1px solid lightgray",
              borderRadius: "4px",
              display: "flex",
              padding: "6px",
              marginTop: "7px",
              textarea: {
                border: "none",
                width: "100px",
                backgroundColor: "transparent",
                font: "inherit",
                outline: "none",
              },
            },
          },
        },
        ".below_list_section": {
          paddingTop: "12px",
          ".text_div": {
            width: "100%",
            backgroundColor: "#fff",
            textarea: {
              border: "1px solid #c5c6c9",
              borderRadius: "4px",
              width: "100%",
              boxSizing: "border-box",
              color: "#404145",
              height: "150px",
              padding: "12px 14px",
              position: "relative",
              transition: "0.15s ease-in-out",
              outline: "none",
            },
          },
        },
      },
    },
  },
  ".below_all_section": {
    width: "100%",
    ".ull": {
      listStyle: "none",
      padding: 0,
      margin: 0,
      li: {
        borderTop: "1px solid #e4e5e7",
        color: "#404145",
        display: "flex",
        alignItems: "center",
        margin: "0 20px",
        minHeight: "75px",
        label: {
          padding: "16px 0",
          width: "100%",
        },
        ".div": {
          width: "100%",
          display: "flex",
          alignItems: "center",
          input: {
            width: "20px",
            height: "20px",
            marginRight: "7px",
          },
        },
      },
      ".request": {
        display: "flex",
        paddingTop: "20px",
        flexDirection: "column",
        ".info_div": {
          display: "flex",
          padding: "10px 0px",
          "> div": {
            paddingRight: "7px",
          },
          svg: {
            fontSize: "20px",
          },
          span: {
            fontSize: "14px",
            color: "#95979d",
            lineHeight: "21px",
          },
        },
      },
    },
    ".offer_includes": {
      h6: {
        backgroundColor: "#f5f5f5",
        borderBottom: "1px solid #dadbdd",
        borderTop: "1px solid #dadbdd",
        fontWeight: 600,
        padding: "16px 20px",
        fontSize: "16px",
        lineHeight: "140%",
        color: "#404145",
      },
      ul: {
        listStyle: "none",
        padding: 0,
        li: {
          borderBottom: "1px solid #e4e5e7",
          margin: "0 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "75px",
          label: {
            display: "flex",
            alignItems: "center",
            input: {
              width: "20px",
              height: "20px",
              marginRight: "7px",
            },
            b: {
              fontWeight: 500,
              color: "#404145",
            },
          },
          textarea: {
            width: "80px",
            height: "40px",
            border: "1px solid #dadbdd",
            borderRadius: "4px",
            backgroundColor: "#f5f5f5",
            color: "#404145",
            padding: "5px",
          },
        },
      },
    },
    ".last_section": {
      padding: "15px 20px 20px",
      display: "flex",
      justifyContent: "space-between",
    },
  },
};
