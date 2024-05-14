import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { EXCHANGE_URLS } from "../../../../Important/URLS";
import { toast } from "react-toastify";

export default function Active() {
  const [order, setOrder] = useState();

  useEffect(() => {
    const getOrders = async () => {
      try {
        const axiosConfig = {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        };
        const active = "pending";
        // Use CORS proxy to bypass CORS restriction
        const res = await axios.get(
          `${EXCHANGE_URLS}/oderdata?active=${active}`,
          axiosConfig
        );
        if (res?.status === 201) {
          setOrder(res?.data?.data);
        }
      } catch (err) {
        toast.error(err, "Error");
      }
    };

    getOrders();
  }, []);

  return (
    <Root>
      <table>
        <thead>
          <tr className="head">
            <td colSpan={7}>
              <h6>Active Orders</h6>
            </td>
            <td colSpan={8}></td>
          </tr>
          <tr>
            <td colSpan={2}></td>
            <td colSpan={2}>
              <span>BUYER</span>
            </td>
            <td colSpan={2}>
              {" "}
              <span>GIG</span>
            </td>

            <td colSpan={2}>
              <span>DUE ON</span>{" "}
            </td>
            <td colSpan={2}>
              <span>TOTAL</span>{" "}
            </td>
            <td colSpan={2}>
              {" "}
              <span>NOTE</span>
            </td>
            <td colSpan={2}>
              <span>STATUS</span>
            </td>
          </tr>
        </thead>
        <tbody>
          {order && order.length > 0 ? (
            order.map((i) => (
              <tr>
                <td colSpan={2}></td>
                <td colSpan={2}>
                  <span>{i?.receiver_name}</span>
                </td>
                <td colSpan={2}>
                  {" "}
                  <span>{i.gigs_id}</span>
                </td>
                <td colSpan={2}>
                  {" "}
                  <span>{i.offer.delivery_day}</span>
                </td>

                <td colSpan={2}>
                  <span>{i.offer.price}</span>{" "}
                </td>
                <td colSpan={2}>
                  <span>{i.offer.describe_offer}</span>{" "}
                </td>
                <td colSpan={2}>
                  {" "}
                  <span>{i.status}</span>
                </td>
              </tr>
            ))
          ) : (
            <tr className="head">
              <td colSpan={10}>Number of Active Orders: 0</td>
            </tr>
          )}
        </tbody>
      </table>
    </Root>
  );
}
const Root = styled.section`
  margin: -10px;
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
      text-transform: uppercase;
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
  }
  .table td:first-child {
    padding-left: 20px;
  }

  @media (max-width: 567px) {
    td {
      padding: 5px 4px;
      white-space: unset;
    }
  }
`;
