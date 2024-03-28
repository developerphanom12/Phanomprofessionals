import React, { useEffect, useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import styled from "styled-components";
import axios from "axios";
import { EXCHANGE_URLS } from "../../../../../../Important/URLS";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { TiPencil } from "react-icons/ti";

export default function IndexP({ editGetGig }) {
  const [price, setPrice] = useState({
    title: "",
    description: "",
    delivery_time: "",
    number_of_pages: "",
    revision: "",
    plugin_extension: 1,
    content_upload:1,
    price: "",
  });
  const [price2, setPrice2] = useState({
    title: "",
    description: "",
    delivery_time: "",
    number_of_pages: "",
    revision: "",
    plugin_extension: 1,
    content_upload:1,
    price: "",
  });
  const [price3, setPrice3] = useState({
    title: "",
    description: "",
    delivery_time: "",
    number_of_pages: "",
    revision: "",
    plugin_extension: 1,
    content_upload:1,
    price: "",
  });
  const navigate = useNavigate();

  const updatePriceApi = async () => {
    try {
      const axiosConfig = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const updatedData = { ...price };
      const res = await axios.put(
        `${EXCHANGE_URLS}/updategigsplantypedata/${a}`,
        updatedData,
        axiosConfig
      );
      if (res?.status === 200) {
        navigate("/description");
      }
      const updatedData2 = { ...price2 };
      const res2 = await axios.put(
        `${EXCHANGE_URLS}/updategigsplantypedata/${b}`,
        updatedData2,
        axiosConfig
      );
      if (res2?.status === 200) {
        navigate("/description");
        // toast.success("Updated");
      }

      const updatedData3 = { ...price3 };
      const res3 = await axios.put(
        `${EXCHANGE_URLS}/updategigsplantypedata/${c}`,
        updatedData3,
        axiosConfig
      );
      if (res3?.status === 200) {
        navigate("/description");
        toast.success("Updated");
      }
    } catch (err) {
      toast.error("error");
    }
  };
  const a =
    editGetGig && editGetGig.length > 0
      ? editGetGig[0].plantypes[0].plan_id
      : null;
  console.log("dccct", editGetGig[0].plantypes[0].plan_id);
  const b =
    editGetGig && editGetGig.length > 0
      ? editGetGig[0].plantypes[1].plan_id
      : null;
  const c =
    editGetGig && editGetGig.length > 0
      ? editGetGig[0].plantypes[2].plan_id
      : null;

  const handleSubmit = () => {
    updatePriceApi();
  };

  useEffect(() => {
    if (editGetGig.length > 0) {
      const basic = editGetGig[0].plantypes.find(
        (plantype) => plantype.plan_type === "basic"
      );
      if (basic) {
        setPrice({
          title: basic.title,
          description: basic.description,
          delivery_time: basic.delivery_time,
          number_of_pages: basic.number_of_pages,
          revision: basic.revision,
          plugin_extension: basic.plugin_extension,
          price: basic.price,
        });
      }

      const standard = editGetGig[0].plantypes.find(
        (plantype) => plantype.plan_type === "standard"
      );
      if (standard) {
        setPrice2({
          title: standard.title,
          description: standard.description,
          delivery_time: standard.delivery_time,
          number_of_pages: standard.number_of_pages,
          revision: standard.revision,
          plugin_extension: standard.plugin_extension,
          price: standard.price,
        });
      }

      const premium = editGetGig[0].plantypes.find(
        (plantype) => plantype.plan_type === "premium"
      );
      if (premium) {
        setPrice3({
          title: premium.title,
          description: premium.description,
          delivery_time: premium.delivery_time,
          number_of_pages: premium.number_of_pages,
          revision: premium.revision,
          plugin_extension: premium.plugin_extension,
          price: premium.price,
        });
      }
    }
  }, [editGetGig]);
  return (
    <Root>
      <div className="div1">
        <header>
          <h3>Scope & Pricing</h3>
          <div className="flex_pack">
            <div className="switch_container">
              <span className="m_r_4">Offer packages</span>
              <label className="q1 q2">
                <input type="checkbox" role="switch" className="toggler" />
                <span className="span111">
                  <span className="span222">
                    <IoCheckmark />
                  </span>
                </span>
              </label>
            </div>
          </div>
        </header>
      </div>
      <div className="div2">
        <header>
          <span>Packages</span>
        </header>
      </div>
      <div className="div3">
        {editGetGig.map((i) => (
          <>
            <div className="column1">
              <div className="input_div"></div>
              <div className="input_div"></div>
              <div className="input_div"></div>
              <div className="input_div">delivery time</div>
              <div className="input_div">Number of pages</div>
              <div className="input_div">Plugin Extension</div>
              <div className="input_div">Content upload</div>
              <div className="input_div">Revisions</div>
              <div className="input_div2">Price</div>
              <div className="input_div2">Total Price</div>
            </div>

            <div className="column1" id="basic">
              <div className="input_div1">
                {i.plantypes[0].plan_type.toUpperCase()}
              </div>
              <div className="input_div">
                <textarea
                  placeholder="Title"
                  value={price.title}
                  onChange={(e) =>
                    setPrice({ ...price, title: e.target.value })
                  }
                />
                <span className="span_headd">
                  <TiPencil />
                </span>
              </div>
              <div className="input_div">
                <textarea
                  placeholder="Description"
                  value={price.description}
                  onChange={(e) =>
                    setPrice({ ...price, description: e.target.value })
                  }
                />
                <span className="span_headd">
                  <TiPencil />
                </span>
              </div>
              <div className="input_div">
                <textarea value={price.delivery_time} readOnly />
              </div>
              <div className="input_div">
                <textarea
                  placeholder="1-10 Pages"
                  value={price.number_of_pages}
                  onChange={(e) =>
                    setPrice({ ...price, number_of_pages: e.target.value })
                  }
                />
                <span className="span_svg">
                  <IoIosArrowDown />
                </span>
              </div>
              <div className="input_div">
                <input
                  type="checkbox"
                  checked={price.plugin_extension}
                  readOnly
                />
              </div>
              <div className="input_div">
                <input
                  type="checkbox"
                  checked={price.content_upload}
                  readOnly
                />
              </div>
              <div className="input_div">
                <textarea
                  placeholder="Revision = 1-10"
                  value={price.revision}
                  onChange={(e) =>
                    setPrice({ ...price, revision: e.target.value })
                  }
                />
                <span className="span_svg">
                  <IoIosArrowDown />
                </span>
              </div>
              <div className="input_div">
                <input
                  placeholder="in $"
                  type="number"
                  value={price.price}
                  onChange={(e) =>
                    setPrice({ ...price, price: e.target.value })
                  }
                />
              </div>
              <div className="input_div">
                <input
                  placeholder="in $"
                  type="number"
                  value={price.price}
                  onChange={(e) =>
                    setPrice({ ...price, price: e.target.value })
                  }
                />
              </div>
            </div>
            {/* --------------standard---------------- */}
            {/* // number_of_pages */}

            <div className="column1" id="standard">
              <div className="input_div1">
                {i.plantypes[1].plan_type.toUpperCase()}
              </div>
              <div className="input_div">
                <textarea
                  placeholder="Title"
                  value={price2.title}
                  onChange={(e) =>
                    setPrice2({ ...price2, title: e.target.value })
                  }
                />
                <span className="span_headd">
                  <TiPencil />
                </span>
              </div>
              <div className="input_div">
                <textarea
                  placeholder="Description"
                  value={price2.description}
                  onChange={(e) =>
                    setPrice2({ ...price2, description: e.target.value })
                  }
                />
                <span className="span_headd">
                  <TiPencil />
                </span>
              </div>
              <div className="input_div">
                <textarea value={price2.delivery_time} readOnly />
              </div>
              <div className="input_div">
                <textarea
                  placeholder="1-10 Pages"
                  value={price2.number_of_pages}
                  onChange={(e) =>
                    setPrice2({ ...price2, number_of_pages: e.target.value })
                  }
                />
                <span className="span_svg">
                  <IoIosArrowDown />
                </span>
              </div>
              <div className="input_div">
                <input
                  type="checkbox"
                  checked={price2.plugin_extension}
                  readOnly
                />
              </div>
              <div className="input_div">
                <input
                  type="checkbox"
                  checked={price2.content_upload}
                  readOnly
                />
              </div>
              <div className="input_div">
                <textarea
                  placeholder="Revision = 1-10"
                  value={price2.revision}
                  onChange={(e) =>
                    setPrice2({ ...price2, revision: e.target.value })
                  }
                />
                <span className="span_svg">
                  <IoIosArrowDown />
                </span>
              </div>
              <div className="input_div">
                <input
                  placeholder="in $"
                  type="number"
                  value={price2.price}
                  onChange={(e) =>
                    setPrice2({ ...price2, price: e.target.value })
                  }
                />
              </div>
              <div className="input_div">
                <input
                  placeholder="in $"
                  type="number"
                  value={price2.price}
                  onChange={(e) =>
                    setPrice2({ ...price2, price: e.target.value })
                  }
                />
              </div>
            </div>

            {/* ---------------------premium---------------- */}

            <div className="column1" id="premium">
              <div className="input_div1">
                {i.plantypes[2].plan_type.toUpperCase()}
              </div>
              <div className="input_div">
                <textarea
                  placeholder="Title"
                  value={price3.title}
                  onChange={(e) =>
                    setPrice3({ ...price3, title: e.target.value })
                  }
                />
                <span className="span_headd">
                  <TiPencil />
                </span>
              </div>
              <div className="input_div">
                <textarea
                  placeholder="Description"
                  value={price3.description}
                  onChange={(e) =>
                    setPrice3({ ...price3, description: e.target.value })
                  }
                />
                <span className="span_headd">
                  <TiPencil />
                </span>
              </div>
              <div className="input_div">
                <textarea value={price3.delivery_time} readOnly />
              </div>
              <div className="input_div">
                <textarea
                  placeholder="1-10 Pages"
                  value={price3.number_of_pages}
                  onChange={(e) =>
                    setPrice3({ ...price3, number_of_pages: e.target.value })
                  }
                />
                <span className="span_svg">
                  <IoIosArrowDown />
                </span>
              </div>
              <div className="input_div">
                <input
                  type="checkbox"
                  checked={price3.plugin_extension}
                  readOnly
                />
              </div>
              <div className="input_div">
                <input
                  type="checkbox"
                  checked={price3.content_upload}
                  readOnly
                />
              </div>
              <div className="input_div">
                <textarea
                  placeholder="Revision = 1-10"
                  value={price3.revision}
                  onChange={(e) =>
                    setPrice3({ ...price3, revision: e.target.value })
                  }
                />
                <span className="span_svg">
                  <IoIosArrowDown />
                </span>
              </div>
              <div className="input_div">
                <input
                  placeholder="in $"
                  type="number"
                  value={price3.price}
                  onChange={(e) =>
                    setPrice3({ ...price3, price: e.target.value })
                  }
                />
              </div>
              <div className="input_div">
                <input
                  placeholder="in $"
                  type="number"
                  value={price3.price}
                  onChange={(e) =>
                    setPrice3({ ...price3, price: e.target.value })
                  }
                />
              </div>
            </div>
          </>
        ))}
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
    </Root>
  );
}
const Root = styled.section`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 50px;
  padding: 0px 40px;
  width: 75vw;
  .div1 {
    width: 100%;
    padding-top: 8px;
    padding-bottom: 22px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgb(218, 219, 221);
    header {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      h3 {
        line-height: 130%;
        font-weight: 400;
        color: #404145;
        font-size: 28px;
      }
      .flex_pack {
        position: relative;
        display: flex;
        color: #62646a;
        .switch_container {
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          font-size: 14px;
          cursor: pointer;
          margin-left: 8px;
          .m_r_4 {
            margin-left: 8px;
          }
          .q1,
          .q2 {
            display: inline-flex;
            line-height: 24px;
            user-select: none;
            .toggler {
              display: flex;
              pointer-events: none;
              margin-left: 8px;
            }
            input {
              opacity: 0;
              width: 0px;
              height: 0px;
              overflow: hidden;
              box-shadow: none !important;
            }
            input[type="checkbox"] {
              vertical-align: bottom;
            }

            .span111 {
              background: rgb(34, 35, 37);
              height: 24px;
              width: 40px;
              display: inline-flex;
              -webkit-box-orient: vertical;
              -webkit-box-direction: normal;
              flex-direction: column;
              position: relative;
              border-radius: 999px;
              cursor: pointer;
              transition: all 0.1s cubic-bezier(0.75, 0, 0.25, 1) 0s;
            }
            .span222 {
              left: 16px;
              align-self: flex-end;
              border-color: rgb(34, 35, 37);
              width: 20px;
              height: 20px;
              position: absolute;
              margin: 2px;
              background: rgb(255, 255, 255);
              border-radius: 50%;
              display: inline-flex;
              -webkit-box-pack: center;
              justify-content: center;
              -webkit-box-align: center;
              align-items: center;
              transition: all 0.1s cubic-bezier(0.75, 0, 0.25, 1) 0s;
              svg {
                transition: 0.1s cubic-bezier(0.75, 0, 0.25, 1);
                opacity: 1;
                width: 12;
                height: 12;
                fill: rgb(34, 35, 37);
              }
            }
          }
        }
      }
    }
  }
  .div2 {
    text-align: start;
    width: 100%;
    header {
      font-weight: 600;
      padding-top: 12px;
      padding-bottom: 16px;
      color: #62646a;
    }
  }
  .div3 {
    margin-bottom: 52px;
    display: flex;
    border: 1px solid lightgray;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    font-size: inherit;
    .column1 {
      display: flex;
      flex-direction: column;
      flex: 1;
    
      .input_div2 {
        font-weight: 600;
        background-color: #f5f5f5;
        border-top: 1px solid lightgray;
      }
      .input_div {
        background-color: #fff;
        border-bottom: 1px solid lightgray;
      }
      .input_div1 {
        text-align: center;
        font-weight: 600;
        padding: 8px;
        border-bottom: 1px solid lightgray;
      }
      .input_div,
      .input_div2,
      .input_div1 {
        width: 100%;
        height: 60px;
        border-right: 1px solid lightgray;
        padding: 10px;
        color: #7a7d85;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        input {
          border: 1px solid lightgray;
          border-radius: 10px;
          padding: 2px;
        }
        textarea {
          width: 100%;
          padding-right: 24px;
          border: none;
          font-size: 13px;
          color: #7a7d85;
          border-radius: 3px;
          outline: none;
        }
        .span_headd {
          text-align: end;
          svg {
            width: 14px;
            height: 14px;
            fill: rgb(197, 198, 201);
          }
        }
      }
    }
  }
  .div4 {
    width: 100%;
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

  @media (max-width: 567px) {
    margin: 0;
    padding: 5px;
    width: 100vw;
  }

  @media (min-width: 567px) and (max-width: 992px) {
    margin: 0;
    padding: 30px;
    width: 100vw;
  }
`;
