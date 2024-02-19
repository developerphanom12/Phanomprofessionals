import React from "react";
import styled from "styled-components";

export default function Section2() {
  return (
    <Root>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12 ">
            <iframe
              width="521"
              height="293"
              src="https://www.youtube.com/embed/XHOmBV4js_E"
              title="Video Placeholder"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-lg-6 col-md-12 col-12 text_div">
            <span>Proficiеncy in </span>
            <span className="text"> Programming </span>
            <span> for our Ad Expеrts</span>
            <p>
              Smart Talent Getting to Know: Phanom Professionals, as your
              trusted Programmatic Advertising Company, excels at identifying
              and acquiring professional skills that easily integrate with your
              organizational culture.
            </p>
            <p>
              Technical Prowess: Our advert experts have a high degree of
              programming know-how, guaranteeing that they're nicely equipped to
              manipulate an extensive variety of advertising and marketing
              wishes.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <p>
              Cultural Alignment: We place a top class on discovering folks that
              now not only have technical competencies but also a percentage of
              your employer's values and lifestyle, enabling peaceful and
              efficient working surroundings.
            </p>
            <p>
              Partnership with us ensures access to a workforce capable of
              supplying comprehensive advertising and marketing answers, thereby
              contributing to the fulfillment of your enterprise's large
              desires.
            </p>
            <p>
              Directed Solutions: Our programming expertise extends to the
              introduction of customized solutions geared to your organization's
              precise advertising wishes.
            </p>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  font-family: "DM Sans", sans-serif;
  p {
    padding-top: 10px;
    font-size: 17px;
    color: #6e6e6e;
  }
  iframe {
    border-radius: 10px;
  }
  .text_div {
    margin-bottom: 30px;

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
    p {
      padding-top: 10px;
      font-size: 17px;
      color: #6e6e6e;
    }
  }
`;
