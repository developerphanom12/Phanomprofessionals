import React from "react";
import styled from "styled-components";

export default function Section2() {
  return (
    <Root>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12 ">

          <iframe width="521" height="293" src="https://www.youtube.com/embed/XHOmBV4js_E" title="Video Placeholder" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="col-lg-6 col-md-12 col-12 text_div">
            <span>Hire the highly </span>
            <span className="text">qualified </span>
            <span> experts developers</span>
            <p>
              Unlock the best potential of the projects as our team brings a
              wealth of experience that is android in delivering top notch
              solutions along with their technical proficiency. Elevate your
              projects to new heights by trusting the experience and expertise
              of our developers.
            </p>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  font-family: "DM Sans", sans-serif;
  iframe{
    border-radius: 10px;
  }
  .text_div {
    margin-bottom: 30px;
    padding: 20px 50px 30px 50px;
    .text {
      color: #147888;
      font-weight: bold;
      font-size: 35px;
      line-height: 1.3em;
    }
    span {
      font-weight: bold;
      font-size: 35px;
      line-height: 1.3em;
    }
    p{
        padding: 20px 0px;
        font-size: 17px;
        color: #6e6e6e;
    }
  }
`;
