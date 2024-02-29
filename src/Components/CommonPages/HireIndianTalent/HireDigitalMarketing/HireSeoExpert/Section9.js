import React from "react";
import styled from "styled-components";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import m from "../../../../Images/m.jpg";

export default function Section9() {
  return (
    <Root>
      <div className="container-fluid ">
        <div className="row bg-color">
          <div className="col-lg-7   col-md-12 col-12 first-col">
            <div className="form-div">
              <span className="black-content">Experience </span>
              <span className="colored-content">Real </span>
              <span className="black-content">Results</span>
              <p className="paragraph">
                Partner with Phanom Internet Marketing Agency and scale your
                business.
              </p>

              <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                  <input type="text" placeholder="First Name*"></input>
                </div>
                <div className="col-lg-6 col-md-12 col-12 sec-input">
                  <input type="text" placeholder="Last Name*"></input>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-lg-6 col-md-12 col-12">
                  <input type="number" placeholder="Phone*"></input>
                </div>
                <div className="col-lg-6 col-md-12 col-12 sec-input">
                  <input type="email" placeholder="Email Address*"></input>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-6 col-md-12 col-12">
                  <input
                    type="email"
                    placeholder="Company/Organization*"
                  ></input>
                </div>
                <div className="col-lg-6 col-md-12 col-12 sec-input">
                  <input type="text" placeholder="Website Link* "></input>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-lg-12 col-12">
                  <label className="label_heading">
                    What services can we provide you?
                  </label>
                  <div className="row">
                    <div className="col-lg-4  col-md-4 col-6">
                      <input type="checkbox"></input>
                      <label>Optimization (SEO)</label>
                      <br></br>
                      <input type="checkbox"></input>
                      <label>Social Media</label>
                      <br></br>
                      <input type="checkbox"></input>
                      <label>Application Development</label>
                      <br></br>
                      <input type="checkbox"></input>
                      <label>Shopify API Development</label>
                    </div>

                    <div className="col-lg-4 col-md-4 col-6">
                      <input type="checkbox"></input>
                      <label>Web Design</label>
                      <br></br>
                      <input type="checkbox"></input>
                      <label>ECommerce Optimization</label>
                      <br></br>
                      <input type="checkbox"></input>
                      <label>Website Development</label>
                      <br></br>
                      <input type="checkbox"></input>
                      <label>WordPress Plugin</label>
                    </div>

                    <div className="col-lg-4 col-md-4 col-12">
                      <input type="checkbox"></input>
                      <label>Pay Per Click (PPC)</label>
                      <br></br>
                      <input type="checkbox"></input>
                      <label>Shopify Development</label>
                      <br></br>
                      <input type="checkbox"></input>
                      <label>Custom Website Development</label>
                      <br></br>
                      <input type="checkbox"></input>
                      <label>Ecommerce Website Development</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-lg-12  col-12">
                  <label className="label_heading">What is your Budget?</label>
                  <br></br>
                  <select>
                    <option value="volvo"></option>
                    <option value="volvo">$500-$1000</option>
                    <option value="saab">$1000-$2000</option>
                    <option value="fiat">$2000-$3000</option>
                    <option value="audi">$3000-$5000</option>
                  </select>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-lg-12  col-12 ">
                  <label className="label_heading">
                    How soon you want to start this project?
                  </label>
                  <div className="row">
                    <div className="col-lg-6 col-md-6  col-6">
                      <input type="radio" name="project_timing"></input>

                      <label>Immediate</label>
                      <br></br>
                      <input type="radio" name="project_timing"></input>
                      <label>With in 15 days</label>
                      <br></br>
                    </div>

                    <div className="col-lg-6 col-md-6 col-6">
                      <input type="radio" name="project_timing"></input>
                      <label>With in a Week</label>
                      <br></br>
                      <input type="radio" name="project_timing"></input>
                      <label>Just Searching Options</label>
                      <br></br>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-lg-12">
                  <label className="label_heading">Share Project Details</label>
                  <textarea name="message" rows="5" cols="67"></textarea>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <button>Sumbit</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5  col-md-12 col-12 second-col">
            <div className="row">
              <div className="col-lg-2 col-2">
                <FaRegArrowAltCircleLeft />
              </div>

              <div className="col-lg-10 col-10">
                <h2 className="heading">Ready to Dominate Your Market?</h2>
                <p className="paragraph">
                  Partner with Phanom Internet Marketing Agency and scale your
                  business.
                </p>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-lg-2 col-2">
                <img
                  src={m}
                  alt="img"
                  width="100%"
                  height="100%"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-10 col-10">
                <h2 className="heading">Contact Us</h2>
                <p className="paragraph">
                  Fill out our brief contact form, and we’ll be in touch with
                  you soon to learn more about your business.
                </p>
                <h2 className="heading">Launch Targeted Campaigns</h2>
                <p className="paragraph">
                  Our digital marketing experts will work closely with you to
                  implement data-driven strategies that drive business growth
                </p>
                <h2 className="heading">Achieve Lasting Growth</h2>
                <p className="paragraph">
                  Solidify your digital presence, expand your brand reach and
                  see outstanding results month-over-month.
                </p>
              </div>
            </div>

            <div className="row mt-3 border-top">
              <div className="col-lg-6 col-6">
                <h5>Headquarters:</h5>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
              <div className="col-lg-6 col-6">
                <h5>Office Hours:</h5>
                <p className="paragraph">Mon-Fri, 10:00am – 7:00pm</p>
                <h5>Main Phone:</h5>

                <a href="#">(788) 914-5109</a>
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

  .bg-color {
    background-color: #147888;
    margin-top: 50px;
  }
  .first-col {
    padding: 50px 0 50px 30px;
  }

  .form-div {
    background-color: #f3f3f3;
    border-radius: 30px;
    padding: 20px 0 30px 30px;
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
    .paragraph {
      font-size: 13px;
      color: #6e6e6e;
      padding-top: 5px;
    }

    input[type="text"] {
      border: 1px solid #dadada;
      height: 50px;
      width: 90%;
      background-color: #f3f3f3;
      padding-left: 10px;
      border-radius: 5px;
    }

    input[type="number"] {
      border: 1px solid #dadada;
      height: 50px;
      width: 90%;
      background-color: #f3f3f3;
      padding-left: 10px;
      border-radius: 5px;
    }

    input[type="email"] {
      border: 1px solid #dadada;
      height: 50px;
      width: 90%;
      background-color: #f3f3f3;
      padding-left: 10px;
      border-radius: 5px;
    }

    .sec-input {
      margin-left: -22px;
    }

    ::placeholder {
      font-size: 14px;
      color: #6e6e6e;
      font-weight: 400;
    }

    label {
      font-size: 11px;
      color: #6e6e6e;
      /* /* padding-top: 5px; */
      /* padding-left: 2px;  */
    }

    select {
      border: 1px solid #dadada;
      height: 50px;
      width: 90%;
      background-color: #f3f3f3;
      padding-left: 10px;
      border-radius: 5px;
    }

    option {
      font-size: 14px;
      color: #6e6e6e;
      font-weight: 400;
    }

    textarea {
      background-color: #f3f3f3;
      border-radius: 10px;
      /* margin-top:5px; */
      padding: 10px 0 0 10px;
    }

    button {
      font-size: 14px;
      color: white;
      background-color: #147888;
      text-transform: uppercase;
      padding: 13px 81px;
      border: 0;
      letter-spacing: 3px;
      border-radius: 50px;
      margin: 15px 0 0 190px;
    }

    .label_heading {
      font-size: 15px;
      color: #212529;
      font-weight: 600;
      margin-bottom: 7px;
    }
  }

  .second-col {
    padding: 50px 0 50px 30px;

    .heading {
      font-size: 32px;
      font-weight: bold;
      line-height: 1.3em;
      color: #fff;
    }

    svg {
      font-size: 40px;
      color: #fff;
      margin: 16px 0 0 22px;
    }

    .paragraph {
      font-size: 13px;
      color: #ffffff;
      padding-right: 20px;
    }

    .border-top {
      border-top: 1px solid white;
      margin-left: 13px;
      width: 92%;
      padding-top: 30px;

      h5 {
        font-size: 15px;
        color: #fff;
        font-weight: 600;
        margin-bottom: 7px;
      }

      a {
        font-size: 13px;
        color: #ffffff;
        padding-right: 20px;
        text-decoration: none;
      }
    }
  }

  @media (max-width: 567px) {
    .first-col {
      padding: 20px 20px 0 20px;
    }
    .form-div {
      padding: 20px 0 30px 15px;
      .sec-input {
        margin: 10px 0 0 0;
      }
      textarea {
        width: 95%;
      }
      button {
        margin: 15px 0 0 25px;
      }
   label {
    font-size: 10px;
    
}
 select {  
    width: 50%;
}
    }

    .second-col {
      padding: 50px 0 50px 13px;
      svg {
        margin: 16px 0 0 2px;
        transform: rotate(90deg);
      }
      .heading {
        font-size: 18px;
      }

      .paragraph {
        font-size: 9px;
        color: #ffffff;
        padding-right: 20px;
      }
    }

     /* .row {
      margin-right: 0;
      margin-left:0;
    }  */
    :nth-child(1) {
      margin-right: 0px;
      margin-left: 0px;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    .first-col {
      padding: 20px 20px 0 20px;
      overflow: hidden;
    }
    .form-div {
      padding: 20px 0 30px 30px;
      .sec-input {
        margin: 10px 0 0 0;
      }
      textarea {
        width: 95%;
      }
      button {
        margin: 15px 0 0 10px;
      }

      select {  
    width: 50%;
    }
    }

    .second-col {
      /* padding: 50px 0 50px 13px; */
      svg {
        /* margin:16px 0 0 2px; */
        transform: rotate(90deg);
      }
      .paragraph {
        font-size: 17px;
      }

      .heading {
        padding-top: 13px;
      }
      img.img-fluid {
        height: 350px;
      }
    }
    :nth-child(1) {
      margin-right: 0px;
      margin-left: 0px;
    }
  }
`;
