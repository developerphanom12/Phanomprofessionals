import React from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";

class Apexcharts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Total Sales",
          data: [],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "Total Sales in Last 30 Days",
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"],
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [],
        },
      },
    };
  }

  componentDidMount() {
    const { data } = this.props;
    if (data && data.last30DaysData) {
      const seriesData = data.last30DaysData.map((item) => item.total_sales);
      const categories = data.last30DaysData.map((item) => item.day);
      this.setState((prevState) => ({
        series: [{ ...prevState.series[0], data: seriesData }],
        options: {
          ...prevState.options,
          xaxis: { ...prevState.options.xaxis, categories: categories },
        },
      }));
    }
  }

  render() {
    return (
      <Root>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="area"
            height={350}
          />
        </div>
      </Root>
    );
  }
}

export default Apexcharts;
const Root = styled.section``