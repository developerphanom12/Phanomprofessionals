import React from "react";
import styled from "styled-components";
import { RiAlarmWarningFill } from "react-icons/ri";

export default function Section4() {
  return (
    <Root>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-12 col-md-12 col-12 first-div"
            data-aos="fade-up"
          >
            <span className="black-content">Explore Our Full </span>
            <span className="colored-content">Range of Services </span>
            <span className="black-content">with legit results</span>
          </div>
        </div>

        <div class="row">
          <div className="col-lg-4 col-md-6 col-12 service-section-one">
            <span className="black-content">Elevate Your Digital </span>
            <span className="colored-content">Presence with </span>
            <span className="black-content">Phanom professionals</span>
          </div>
          <div
            className="col-lg-4 col-md-6 col-12 service-section-two"
            backgroundImage="url(d.jpg)"
          >
            <RiAlarmWarningFill />
            <h4>Digital Marketing Magic</h4>
            <p>
              Ignite your online visibility & turn heads in the digital realm.
              Maximize your reach for driving relevant traffic with engaging
              content.
            </p>
          </div>
          <div className="col-lg-4 col-md-12 col-12 service-section-three">
            <RiAlarmWarningFill />
            <h4>Design & Development Excellence</h4>
            <p>
              Get Your digital storefront expertly crafted. From e-commerce
              powerhouses to dynamic websites.
            </p>
          </div>
        </div>

        <div class="row">
          <div className="col-lg-4  col-md-6 col-12 service-section-four">
            <RiAlarmWarningFill />
            <h4>Animations & Graphic Masterpieces</h4>
            <p>
              Make your mark with a visual identity for a lasting
              impression.From pixel to print, easily transform ideas into
              visually stunning realities.
            </p>
          </div>

          <div className="col-lg-4  col-md-6 col-12 service-section-four">
            <RiAlarmWarningFill />
            <h4>E-Commerce Solutions</h4>
            <p>
              Navigate the e-commerce landscape with ease! Conquer the retail
              giant to attract the right audience.
            </p>
          </div>

          <div className="col-lg-4"></div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  font-family: "DM Sans", sans-serif;
  background-color: #ffffffd4;

  .first-div {
    border: none;
    padding-top: 50px;
    text-align: center;
    .colored-content {
      font-size: 35px;
      font-weight: bold;
      line-height: 1.3em;
      color: #147888;
    }
    .black-content {
      font-size: 35px;
      font-weight: bold;
      line-height: 1.3em;
    }
  }

  .service-section-one {
    border-right: 1px solid #dadada;
    border-bottom: 1px solid #dadada;
    height: 300px;
    margin-top: 40px;
    padding: 40px 67px 0 40px;
    .colored-content {
      font-size: 35px;
      font-weight: bold;
      line-height: 1.3em;
      color: #147888;
    }
    .black-content {
      font-size: 35px;
      font-weight: bold;
      line-height: 1.3em;
    }
  }
  .service-section-two {
    border-right: 1px solid #dadada;
    border-bottom: 1px solid #dadada;
    height: 300px;
    margin-top: 40px;
    padding: 60px 38px 0 30px;
    /* background-image:url("d.jpg"); */
    svg {
      width: 40px;
      height: 40px;
      color: #147888;
    }
    h4 {
      padding-top: 20px;
    }
    p {
      font-size: 17px;
      color: #6e6e6e;
    }
  }

  .service-section-three {
    /* border-right: 1px solid #dadada; */
    border-bottom: 1px solid #dadada;
    height: 300px;
    margin-top: 40px;
    padding: 60px 38px 0 30px;
    svg {
      width: 40px;
      height: 40px;
      color: #147888;
    }
    h4 {
      padding-top: 20px;
    }
    p {
      font-size: 17px;
      color: #6e6e6e;
    }
  }

  .service-section-four {
    border-right: 1px solid #dadada;
    height: 300px;
    padding: 60px 38px 0 30px;
    svg {
      width: 40px;
      height: 40px;
      color: #147888;
    }
    h4 {
      padding-top: 20px;
    }
    p {
      font-size: 17px;
      color: #6e6e6e;
    }
  }

  @media (max-width: 567px) {
    .service-section-one {
      padding: 20px 0px 0 12px;
      margin-top: 30px;
      height:180px;
      .black-content {
        font-size: 30px;
      }
      .colored-content {
        font-size: 30px;
      }
    }

  .service-section-three {
    margin-top: 8px;
}

.row {
      margin-right: 0;
    }
  }

  @media (min-width: 567px) and (max-width: 992px){

    .service-section-three {
    margin-top: 8px;
}


    
  }
`;
