import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";

export default function Table2({
  data,
  setData,
  data2,
  setData2,
  data3,
  setData3,
}) {
  return (
    <Root>
      <table>
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
                        value={data.number_of_pages}
                        onChange={(e) =>
                          setData({ ...data, number_of_pages: e.target.value })
                        }
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
                        value={data2.number_of_pages}
                        onChange={(e) =>
                          setData2({
                            ...data2,
                            number_of_pages: e.target.value,
                          })
                        }
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
                        value={data3.number_of_pages}
                        onChange={(e) =>
                          setData3({
                            ...data3,
                            number_of_pages: e.target.value,
                          })
                        }
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
                    value={1}
                    onChange={(e) =>
                      setData({
                        ...data,
                        plugin_extension: e.target.checked
                          ? parseInt(e.target.value)
                          : 1,
                      })
                    }
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
                    value={1}
                    onChange={(e) =>
                      setData2({
                        ...data2,
                        plugin_extension: e.target.checked
                          ? parseInt(e.target.value)
                          : 1,
                      })
                    }
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
                    value={1}
                    onChange={(e) =>
                      setData3({
                        ...data3,
                        plugin_extension: e.target.checked
                          ? parseInt(e.target.value)
                          : 1,
                      })
                    }
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
                    value={true}
                    onChange={(e) =>
                      setData({
                        ...data,
                        content_upload: e.target.checked,
                      })
                    }
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
                    value={true}
                    onChange={(e) =>
                      setData2({
                        ...data2,
                        content_upload: e.target.checked,
                      })
                    }
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
                    value={true}
                    onChange={(e) =>
                      setData3({
                        ...data3,
                        plugin_extension: e.target.checked
                          
                      })
                    }
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
                      <textarea
                        value={data.revision}
                        onChange={(e) =>
                          setData({ ...data, revision: e.target.value })
                        }
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
                        value={data2.revision}
                        onChange={(e) =>
                          setData2({ ...data2, revision: e.target.value })
                        }
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
                        value={data3.revision}
                        onChange={(e) =>
                          setData3({ ...data3, revision: e.target.value })
                        }
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