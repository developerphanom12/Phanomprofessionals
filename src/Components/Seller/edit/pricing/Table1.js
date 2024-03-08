import React from "react";
import styled from "styled-components";
import { TiPencil } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";

export default function Table1() {
  return (
    <Root>
      <table>
        <thead>
          <tr>
            <th className="first_table_col"></th>
            <th>Basic</th>
            <th>Standard</th>
            <th>Premium</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="first_table_col"></td>
            <td>
              <div className="title_input">
                <textarea>122</textarea>
                <span className="span_headd">
                  <TiPencil />
                </span>
              </div>
            </td>
            <td>
              <div className="title_input">
                <textarea>1223</textarea>
                <span className="span_headd">
                  <TiPencil />
                </span>
              </div>
            </td>
            <td>
              <div className="title_input">
                <textarea>1224532</textarea>
                <span className="span_headd">
                  <TiPencil />
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="first_table_col"></td>
            <td>
              <div className="title_input">
                <textarea>122</textarea>
                <span className="span_headd">
                  <TiPencil />
                </span>
              </div>
            </td>
            <td>
              <div className="title_input">
                <textarea>1223</textarea>
                <span className="span_headd">
                  <TiPencil />
                </span>
              </div>
            </td>
            <td>
              <div className="title_input">
                <textarea>1224532</textarea>
                <span className="span_headd">
                  <TiPencil />
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="first_table_col"></td>
            <td>
              <div className="title_input">
                <div className="title_input_child">
                  <span className="span_head">
                    <div className="title_input_gchild">34</div>
                    <span className="span_svg">
                      <IoIosArrowDown />
                    </span>
                    <input type="hidden" />
                  </span>
                </div>
              </div>
            </td>
            <td>
              {" "}
              <div className="title_input">
                <div className="title_input_child">
                  <span className="span_head">
                    <div className="title_input_gchild">34</div>
                    <span className="span_svg">
                      <IoIosArrowDown />
                    </span>
                    <input type="hidden" />
                  </span>
                </div>
              </div>
            </td>
            <td>
              {" "}
              <div className="title_input">
                <div className="title_input_child">
                  <span className="span_head">
                    <div className="title_input_gchild">34</div>
                    <span className="span_svg">
                      <IoIosArrowDown />
                    </span>
                    <input type="hidden" />
                  </span>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
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
    thead,
    tbody {
      tr {
        .first_table_col {
          box-sizing: border-box;
          width: 220px;
          background-color: #fafafa;
          position: relative;
          padding: 20px 15px;
          font-size: 13px;
          border-bottom: none;
        }
        th {
          text-transform: uppercase;
          font-weight: 600;
          text-align: left;
          border: 1px solid #dadbdd;
          padding: 20px 16px;
          background-color: #f5f5f5;
          font-size: 13px;
          color: #62646a;
        }
        td {
          background-color: #fff;
          text-align: left;
          border: 1px solid #dadbdd;
          font-weight: 400;
          .title_input {
            display: flex;
            textarea {
              height: 70px;
              width: 100%;
              padding-right: 24px;
              border: none;
              font-size: 13px;
              background-color: #fff;
              color: #7a7d85;
              padding: 6px 7px 7px;
              border-radius: 3px;
            }
            .span_headd {
              svg {
                width: 14px;
                margin-right: 10px;
                height: 14px;
                fill: rgb(197, 198, 201);
              }
            }
            .title_input_child {
              width: 100%;
              color: #7a7d85;
              font-size: 13px;
              display: flex;
              align-items: center;
              .span_head {
                width: 100%;
                display: flex;
                justify-content: space-between;
                height: 37px;
                border: 0;
                margin: 5px 0;
                padding: 8px;
                .title_input_gchild {
                  font-size: 13px;
                  color: #62646a;
                  position: relative;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  font-weight: 400;
                }
                .span_svg {
                  margin: 0 !important;
                  padding: 0 !important;
                  svg {
                    width: 15px;
                    margin-right: 10px;
                    height: 15px;
                    color: #62646a;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
