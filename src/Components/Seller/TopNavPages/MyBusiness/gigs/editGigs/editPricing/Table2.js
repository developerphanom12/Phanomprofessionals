import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";

export default function Table2({ editGetGig,  price,
  price2,
  price3,
  setPrice,
  setPrice2,
  setPrice3, }) {
  // number_of_pages
  return (
    <Root>
      {editGetGig.map((i, index) => (
        <table key={index}>
          <tbody>
            <tr>
              <td className="first_table_col">Number of pages</td>
              <td className="tdd">
                <div className="title_input">
                  <div className="title_input_child">
                    <span className="span_head">
                      <div className="title_input_gchild">
                        {" "}
                        <textarea
                          value={
                            i.plantypes.find(
                              (plantype) => plantype.plan_type === "basic"
                            ).number_of_pages
                          }
                          id="basic"
                          readOnly
                        />
                      </div>
                      <span className="span_svg">
                        <IoIosArrowDown />
                      </span>
                      <input type="hidden" />
                    </span>
                  </div>
                </div>
              </td>
              <td className="tdd">
                <div className="title_input">
                  <div className="title_input_child">
                    <span className="span_head">
                      <div className="title_input_gchild">
                        {" "}
                        <textarea
                          value={
                            i.plantypes.find(
                              (plantype) => plantype.plan_type === "standard"
                            ).number_of_pages
                          }
                          id="standard"
                          readOnly
                        />
                      </div>
                      <span className="span_svg">
                        <IoIosArrowDown />
                      </span>
                      <input type="hidden" />
                    </span>
                  </div>
                </div>
              </td>
              <td className="tdd">
                <div className="title_input">
                  <div className="title_input_child">
                    <span className="span_head">
                      <div className="title_input_gchild">
                        {" "}
                        <textarea
                          value={
                            i.plantypes.find(
                              (plantype) => plantype.plan_type === "premium"
                            ).number_of_pages
                          }
                          id="premium"
                          readOnly
                        />
                      </div>
                      <span className="span_svg">
                        <IoIosArrowDown />
                      </span>
                      <input type="hidden" />
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="first_table_col">Plugin Extension</td>
              <td>
                <div className="check_div">
                  <label className="check_label">
                    <input
                      type="checkbox"
                      checked={true}
                      value={
                        i.plantypes.find(
                          (plantype) => plantype.plan_type === "basic"
                        ).plugin_extension
                      }
                      id="basic"
                      readOnly
                    />
                  </label>
                </div>
              </td>
              <td>
                {" "}
                <div className="check_div">
                  <label className="check_label">
                    <input
                      type="checkbox"
                      checked={true}
                      value={
                        i.plantypes.find(
                          (plantype) => plantype.plan_type === "standard"
                        ).plugin_extension
                      }
                      id="standard"
                      readOnly
                    />
                  </label>
                </div>
              </td>
              <td>
                {" "}
                <div className="check_div">
                  <label className="check_label">
                    <input
                      type="checkbox"
                      checked={true}
                      value={
                        i.plantypes.find(
                          (plantype) => plantype.plan_type === "premium"
                        ).plugin_extension
                      }
                      id="premium"
                      readOnly
                    />
                  </label>
                </div>
              </td>
            </tr>
            <tr>
              <td className="first_table_col">Content upload</td>
              <td>
                <div className="check_div">
                  <label className="check_label">
                    <input
                      type="checkbox"
                      checked={true}
                      value={
                        i.plantypes.find(
                          (plantype) => plantype.plan_type === "basic"
                        ).content_upload
                      }
                      id="basic"
                      readOnly
                    />
                  </label>
                </div>
              </td>
              <td>
                {" "}
                <div className="check_div">
                  <label className="check_label">
                    <input
                      type="checkbox"
                      checked={true}
                      value={
                        i.plantypes.find(
                          (plantype) => plantype.plan_type === "standard"
                        ).content_upload
                      }
                      id="standard"
                      readOnly
                    />
                  </label>
                </div>
              </td>
              <td>
                {" "}
                <div className="check_div">
                  <label className="check_label">
                    <input
                      type="checkbox"
                      checked={true}
                      value={
                        i.plantypes.find(
                          (plantype) => plantype.plan_type === "premium"
                        ).content_upload
                      }
                      id="premium"
                      readOnly
                    />
                  </label>
                </div>
              </td>
            </tr>
            <tr>
              <td className="first_table_col">Revisions</td>
              <td className="tdd">
                <div className="title_input">
                  <div className="title_input_child">
                    <span className="span_head">
                      <div className="title_input_gchild">
                        {" "}
                        <textarea value={
                        i.plantypes.find(
                          (plantype) => plantype.plan_type === "basic"
                        ).revision
                      }
                      id="basic"
                       />
                      </div>
                      <span className="span_svg">
                        <IoIosArrowDown />
                      </span>
                      <input type="hidden" />
                    </span>
                  </div>
                </div>
              </td>
              <td className="tdd">
                <div className="title_input">
                  <div className="title_input_child">
                    <span className="span_head">
                      <div className="title_input_gchild">
                        {" "}
                        <textarea value={
                        i.plantypes.find(
                          (plantype) => plantype.plan_type === "standard"
                        ).revision
                      }
                      id="standard"
                        />
                      </div>
                      <span className="span_svg">
                        <IoIosArrowDown />
                      </span>
                      <input type="hidden" />
                    </span>
                  </div>
                </div>
              </td>
              <td className="tdd">
                <div className="title_input">
                  <div className="title_input_child">
                    <span className="span_head">
                      <div className="title_input_gchild">
                        {" "}
                        <textarea value={
                        i.plantypes.find(
                          (plantype) => plantype.plan_type === "premium"
                        ).revision
                      }
                      id="premium"
                       />
                      </div>
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
          background-color: #fafafa;
          position: relative;
          padding: 20px 15px;
          font-size: 13px;
          border-bottom: none;
          color: #62646a;
        }
        td {
          border: 1px solid #dadbdd;
          .check_div {
            display: flex;
            align-items: center;
            justify-content: center;
            .check_label {
              input {
                width: 20px;
                height: 20px;
                border: 1px solid #dadbdd;
                border-radius: 4px;
              }
            }
          }
        }
        .tdd {
          border-top: none;
        }
        td,
        .tdd {
          background-color: #fff;
          text-align: left;
          font-weight: 400;
          .title_input {
            display: flex;
            textarea {
              height: 70px;
              width: 100%;
              padding-right: 24px;
              border: none;
              font-size: 13px;
              outline: none;
              background-color: #fff;
              color: #7a7d85;
              padding: 6px 7px 7px;
              border-radius: 3px;
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
  @media (max-width: 567px) {
    table tbody tr .first_table_col {
      width: 150px;
    }
  }
`;
