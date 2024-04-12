import React from "react";
import styled from "styled-components";
import { TiPencil } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import * as Yup from "yup";

const schema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  delivery_time: Yup.string().required("Delivery time is required"),
});

export default function Table1({
  data,
  setData,
  data2,
  setData2,
  data3,
  setData3,
}) {
  // Function to handle data change and validation
  const handleDataChange = (newData, setDataFunc) => {
    setDataFunc(newData); // Update data state
    schema
      .validate(newData, { abortEarly: false }) // Validate data against schema
      .then(() => {})
      .catch((error) => {
        error.inner.forEach((err) => {
          console.log(err.message); // Log validation errors
          // Show toast message or handle errors as needed
        });
      });
  };

  return (
    <Root>
      <table>
        <thead>
          <tr>
            <th className="first_table_col"></th>
            <th
            // value={data.plan_type}
            // onChange={(e) => setData({ ...data, plan_type: e.target.value })}
            >
              Basic
            </th>
            <th
            // value={data2.plan_type}
            // onChange={(e) => setData2({ ...data2, plan_type: e.target.value })}
            >
              Standard
            </th>
            <th
            // value={data3.plan_type}
            // onChange={(e) => setData3({ ...data3, plan_type: e.target.value })}
            >
              Premium
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="first_table_col"></td>
            <td>
              <div className="title_input">
                <textarea
                  value={data.title}
                  placeholder=" Basic Plan Title"
                  id="basic"
                  onChange={(e) =>
                    handleDataChange(
                      { ...data, title: e.target.value },
                      setData
                    )
                  }
                  
                />
                <span className="span_headd">
                  <TiPencil />
                </span>
              </div>
            </td>
            <td>
              <div className="title_input">
                <textarea
                  value={data2.title}
                  id="standard"
                  placeholder="Standard Plan Title"
                  onChange={(e) =>
                    handleDataChange(
                      { ...data2, title: e.target.value },
                      setData2
                    )
                  }
                />
                <span className="span_headd">
                  <TiPencil />
                </span>
              </div>
            </td>
            <td>
              <div className="title_input">
                <textarea
                  id="premium"
                  placeholder="Premium Plan Title"
                  value={data3.title}
                  onChange={(e) =>
                    handleDataChange(
                      { ...data3, title: e.target.value },
                      setData3
                    )
                  }
                />
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
                <textarea
                  value={data.description}
                  placeholder="Description"
                  onChange={(e) =>
                    handleDataChange(
                      { ...data, description: e.target.value },
                      setData
                    )
                  }
                />
                <span className="span_headd">
                  <TiPencil />
                </span>
              </div>
            </td>
            <td>
              <div className="title_input">
                <textarea
                  value={data2.description}
                  placeholder="Description"
                  onChange={(e) =>
                    handleDataChange(
                      { ...data2, description: e.target.value },
                      setData2
                    )
                  }
                />
                <span className="span_headd">
                  <TiPencil />
                </span>
              </div>
            </td>
            <td>
              <div className="title_input">
                <textarea
                  value={data3.description}
                  placeholder="Description"
                  onChange={(e) =>
                    handleDataChange(
                      { ...data3, description: e.target.value },
                      setData3
                    )
                  }
                />
                <span className="span_headd">
                  <TiPencil />
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="first_table_col">delivery time</td>
            <td>
              <div className="title_input">
                <div className="title_input_child">
                  <span className="span_head">
                    <div className="title_input_gchild">
                      {" "}
                      <textarea
                        value={data.delivery_time}
                        placeholder="Min 1 Day"
                        onChange={(e) =>
                          handleDataChange(
                            { ...data, delivery_time: e.target.value },
                            setData
                          )
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
            <td>
              {" "}
              <div className="title_input">
                <div className="title_input_child">
                  <span className="span_head">
                    <div className="title_input_gchild">
                      {" "}
                      <textarea
                        value={data2.delivery_time}
                        placeholder="Min 1 Day"
                        onChange={(e) =>
                          handleDataChange(
                            { ...data, delivery_time: e.target.value },
                            setData2
                          )
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
            <td>
              {" "}
              <div className="title_input">
                <div className="title_input_child">
                  <span className="span_head">
                    <div className="title_input_gchild">
                      {" "}
                      <textarea
                        value={data3.delivery_time}
                        placeholder="Min 1 Day"
                        onChange={(e) =>
                          handleDataChange(
                            { ...data, delivery_time: e.target.value },
                            setData3
                          )
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
              outline: none;
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
  @media (max-width: 567px) {
    table thead tr th,
    .gAvFUA table tbody tr th {
      padding: 0;
      font-size: 12px;
    }

    table thead tr .first_table_col,
    .knwZRi table tbody tr .first_table_col {
      width: 150px;
    }
  }
  textarea::placeholder {
    color: #7a7d8575;
  }
`;
