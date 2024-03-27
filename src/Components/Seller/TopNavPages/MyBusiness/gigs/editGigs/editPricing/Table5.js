import React from "react";
import styled from "styled-components";

export default function Table5({
  editGetGig,
  price,
  price2,
  price3,
  setPrice,
  setPrice2,
  setPrice3,
}) {
  return (
    <Root>
      {editGetGig.map((i, index) => (
        <table key={index}>
          <tbody>
            <tr>
              <td className="first_table_col">Total Price</td>
              <td>
                <div className="outer_div">
                  <span>
                    <div className="txt_div">
                      <div className="dollar">$</div>
                      <input
                        type="number"
                        value={
                          i.plantypes.find(
                            (plantype) => plantype.plan_type === "basic"
                          ).price
                        }
                        id="basic"
                      />
                    </div>
                  </span>
                </div>
              </td>
              <td>
                <div className="outer_div">
                  <span>
                    <div className="txt_div">
                      <div className="dollar">$</div>
                      <input
                        type="number"
                        value={
                          i.plantypes.find(
                            (plantype) => plantype.plan_type === "standard"
                          ).price
                        }
                        id="standard"
                      />
                    </div>
                  </span>
                </div>
              </td>
              <td>
                <div className="outer_div">
                  <span>
                    <div className="txt_div">
                      <div className="dollar">$</div>
                      <input
                        type="number"
                        value={
                          i.plantypes.find(
                            (plantype) => plantype.plan_type === "premium"
                          ).price
                        }
                        id="premium"
                      />
                    </div>
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </Root>
  );
}
const Root = styled.section`
  table {
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    font-size: inherit;
    tbody {
      tr {
        .first_table_col {
          box-sizing: border-box;
          width: 220px;
          color: #404145;
          font-weight: 700;
          background: #efeff0;
          position: relative;
          padding: 20px 15px;
          font-size: 13px;
          border-top: 1px solid #dadbdd;
        }
        td {
          text-align: left;
          border: 1px solid #dadbdd;
          border-top: none;
          background-color: #fff;
          color: #404145;
          font-size: 13px;

          .outer_div {
            order: 1px solid #dadbdd;
            border-radius: 8px;
            padding: 8px;
          }
          .txt_div {
            width: 100%;
            border: 1px solid #dadbdd;
            border-radius: 8px;
            padding: 8px 12px;
            display: flex;
            font-size: 13px;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            flex-direction: row;
            -webkit-box-align: center;
            align-items: center;
            background-color: #fff;
            .dollar {
              padding-right: 4px;
              display: flex;
              -webkit-box-align: center;
              align-items: center;
              -webkit-box-pack: center;
              justify-content: center;
              height: 100%;
            }
            input {
              outline: none;
              border: 1px solid #fff;
            }
          }
        }
      }
    }
  }

  @media (max-width: 567px) {
    table tbody tr td .txt_div {
      overflow: hidden;
    }
    table tbody tr .first_table_col {
      width: 150px;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    table tbody tr td .txt_div {
      overflow: hidden;
    }
  }
`;
