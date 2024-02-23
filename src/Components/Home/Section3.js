import React from "react";
import styled from "styled-components";
import { RiAlarmWarningFill } from "react-icons/ri";
import { FaShop } from "react-icons/fa6";
import d from "../Images/d.jpg";
// import e from "../Images/e.jpg";
export default function Section3() {
  return (
    <Root>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-6  col-md-12 col-12 first-div" data-aos="fade-right">
            <div className="row">
              <div class="col-lg-6 col-md 12 col-12">
                <img src={d} alt="img" width="100%" height="100%"  className="image-fluid"/>
              </div>
              <div className="row">
                <div className="col-lg-2 col-md-5 col-4"></div>
                <div className="col-lg-3 col-md-3 col-5 ">
                  <div className="image-circle">
                    <h5>G</h5>
                    <p>4.8 Rating</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md 12 col-12"></div>
              </div>

              <div class="col-lg-6">
               
              </div>
            </div>
          </div>

          <div className="col-lg-6  col-md-12 col-12 second-div" data-aos="fade-up">
            <span className="second-content">
              Elevate Your Digital Presence with
            </span>
            <span className="first-content">
              {" "}
              Phanom professional Branding{" "}
            </span>
            <span className="second-content">
              team to get advertising solutions
            </span>
            <div className="circle"></div>
            <p className="paragraph">
              We distinguish ourselves by freshness, creativity, and a creative
              atmosphere that propels businesses to new heights.
            </p>
            <p className="paragraph-border">
              SEO, content marketing, graphical presentations, social media, and
              web design have launched our clients on a euphoric ride to
              success, delivering an influx of traffic and exceeding
              expectations that were previously thought impossible.
            </p>
            <div class="row">
              <div class="col-lg-1  col-md-1 col-2">
                <div className="icon">
                  <RiAlarmWarningFill />
                </div>
              </div>
              <div class="col-lg-9 col-md-11 col-9">
                <h4 className="icon-heading">
                  Get instant updates of live project
                </h4>
                <p className="icon-content">
                  Connect with our professional team to get live updates
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-1 col-md-1 col-2">
                <div className="icon">
                  <FaShop/>
                </div>
              </div>
              <div class="col-lg-9  col-md-11 col-9">
                <h4 className="icon-heading">Boost your business branding</h4>
                <p className="icon-content">
                  Get top-notch services for your business Branding solutions
                </p>
              </div>
            </div>
          </div>
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
    padding: 50px 0 0 50px;
    text-align: center;
    img {
      border-radius: 20px;
      margin-left: 20px;
    }
    .image-circle {
      height: 126px;
      background-color: #5cd4b9;
      border-radius: 67px;
      margin-top: -115px;
      h5 {
        color: white;
        padding-top: 25px;
        font-weight: 700;
        font-size: 34px;
      }
      p {
        font-size: 17px;
        color: white;
        font-weight: 500;
        font-family: "DM Sans", sans-serif;
      }
    }
  }

  .second-div {
    border: none;
    padding-top: 50px;
    .first-content {
      font-size: 35px;
      font-weight: bold;
      line-height: 1.3em;
      color: #147888;
    }
    .second-content {
      font-size: 35px;
      font-weight: bold;
      line-height: 1.3em;
    }
    .circle {
      width: 13%;
      height: 85px;
      background-color: #5cd4b9;
      border-radius: 50px;
      margin: -14% 0 0 0;
    }
    .paragraph {
      font-size: 17px;
      color: #6e6e6e;
      padding: 18px 0 0 0;
    }
    .paragraph-border {
      border-left: 6px solid #147888;
      padding-left: 20px;
      margin-top: 10px;
      font-size: 20px;
      color: #6e6e6e;
      font-style: italic;
      font-weight: bold;
    }
    svg {
      width: 40px;
      height: 40px;
      color: #147888;
    }
    .icon-content {
      font-size: 17px;
      color: #6e6e6e;
    }
  }

  @media (max-width: 567px) {
    .first-div {
      padding: 0px 24px 0 0px;
    }
 .first-div img {
    margin-left: 25px;
}
    
 .second-div {
    padding-top: 10px;

  .second-content {
    font-size:30px
  } 
 .first-content {
    font-size:30px;
}
.circle {
    width: 23%;
    height: 85px;
    background-color: #5cd4b9;
    border-radius: 50px;
    margin: -26% 0 0 0%;
}

}

.row {
      margin-right: 0;
    }
 
  }

  
@media (min-width: 567px) and (max-width: 992px){
  
 .first-div {
  padding: 50px 0 0 20px;
  
   .image-circle {
    height: 159px;
    border-radius: 85px;
    
}
}

.first-div img {
    margin-left: 1px;
}

.row {
      margin-right: 0;
    }
}
  
`;

