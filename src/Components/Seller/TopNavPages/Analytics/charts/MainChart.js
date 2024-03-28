import React, { useEffect, useState } from "react";
import ApexCharts from "./ApexCharts";
import styled from "styled-components";
import axios from "axios";
import { EXCHANGE_URLS } from "../../../../Important/URLS";
import { toast } from "react-toastify";

const Mainchart = () => {
  const [salesData, setSalesData] = useState([]);
  const [selection, setSelection] = useState("last30days");

  const getHistory = async () => {
    const axiosConfig = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await axios.get(
        `${EXCHANGE_URLS}/ordersales?selection=${selection}`,
        axiosConfig
      );
      console.log("resss", res);
      if (res.status === 200) {
        setSalesData(res?.data?.data);
      }
    } catch (err) {
      if (err.response && err.response.status === 404) {
        toast.error(err.response.data.error);
      } else {
        console.log("err", err);
      }
    }
  };

  useEffect(() => {
    getHistory();
  }, [selection]);

  const handleSelectionChange = (e) => {
    const newSelection = e.target.value;
    setSelection(newSelection);
  };


  return (
    <Root>
      <div>
        <div className="delta">
          <div>
            <p>Current Sale</p>
          </div>
          <label htmlFor="periodSelect">Select :</label>
          <select
            id="periodSelect"
            onChange={handleSelectionChange}
            value={selection}
          >
            <option value="last30days">Last 30 Days</option>
            <option value="last3months">Last 3 Months</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        <ApexCharts key={JSON.stringify(salesData)} data={salesData} />
      </div>
    </Root>
  );
};

export default Mainchart;
const Root = styled.section`
`