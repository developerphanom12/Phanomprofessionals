import React, { useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import styled from "styled-components";
import Table1 from "./Table1";
import Table2 from "./Table2";
import Table3 from "./Table3";
import Table5 from "./Table5";
import axios from "axios";
import { EXCHANGE_URLS } from "../../../../../../Important/URLS";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function IndexP({ editGetGig }) {
  const [price, setPrice] = useState({
    title: "",
    description: "",
    delivery_time: "",
    number_of_pages: "",
    revision: "",
    plugin_extension: 1,
    price: "",
  });
  const [price2, setPrice2] = useState({
    title: "",
    description: "",
    delivery_time: "",
    number_of_pages: "",
    revision: "",
    plugin_extension: 1,
    price: "",
  });
  const [price3, setPrice3] = useState({
    title: "",
    description: "",
    delivery_time: "",
    number_of_pages: "",
    revision: "",
    plugin_extension: 1,
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
        `${EXCHANGE_URLS}//updategigsplantypedata/${a}`,
        updatedData,
        axiosConfig
      );
      if (res?.status === 201) {
        navigate("/description");
      }
      const updatedData2 = { ...price2 };
      const res2 = await axios.put(
        `${EXCHANGE_URLS}//updategigsplantypedata/${b}`,
        updatedData2,
        axiosConfig
      );
      if (res2?.status === 201) {
        navigate("/description");
        // toast.success("Updated");
      }

      const updatedData3 = { ...price3 };
      const res3 = await axios.put(
        `${EXCHANGE_URLS}//updategigsplantypedata/${c}`,
        updatedData3,
        axiosConfig
      );
      if (res3?.status === 201) {
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
        <Table1
          editGetGig={editGetGig}
          price={price}
          price2={price2}
          price3={price3}
          setPrice={setPrice}
          setPrice2={setPrice2}
          setPrice3={setPrice3}
        />
        <Table2
          editGetGig={editGetGig}
          price={price}
          price2={price2}
          price3={price3}
          setPrice={setPrice}
          setPrice2={setPrice2}
          setPrice3={setPrice3}
        />
        <Table3
          editGetGig={editGetGig}
          price={price}
          price2={price2}
          price3={price3}
          setPrice={setPrice}
          setPrice2={setPrice2}
          setPrice3={setPrice3}
        />
        <Table5
          editGetGig={editGetGig}
          price={price}
          price2={price2}
          price3={price3}
          setPrice={setPrice}
          setPrice2={setPrice2}
          setPrice3={setPrice3}
        />
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
