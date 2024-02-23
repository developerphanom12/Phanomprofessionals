import React from "react";
import styled from "styled-components";
import { TiTickOutline } from "react-icons/ti";
import a from "../Images/a.jpg";
import g from "../Images/g.jpg";
import h from "../Images/h.jpg";

export default function Section7() {
  return (
    <Root>
      <div className="container-fluid mt-5">
        <div className="row">
          <div
            className="col-lg-4 col-md-12 col-12 first-col"
            data-aos="fade-right"
          >
            {/* <div className="img-div"> */}
            <img src={a} alt="img" width="100%" height="100%" />
            {/* </div> */}
          </div>
          <div className="col-lg-4  col-md-12 col-12 ">
            <div className="second-col">
              <p className="paragraph-border">
                Phanom Professionals ensures a seamless experience that goes
                beyond conventional advice, supporting a transformative process
                that moves your business ahead.
              </p>
              <p className="paragraph">
                We are expert in 360* marketing mastery and we have carved out
                success stories by transforming brands into market leaders.
              </p>
              <div className="row">
                <div className="col-lg-1 col-md-1 col-2">
                  <TiTickOutline />
                </div>
                <div className="col-lg-10  col-md-10 col-10">
                  <p className="paragraph">
                    Ensures Success with Outstanding Results.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-1 col-md-1 col-2">
                  <TiTickOutline />
                </div>
                <div className="col-lg-10  col-md-10 col-10">
                  <p className="paragraph">Best business Branding solutions</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-1 col-md-1 col-2">
                  <TiTickOutline />
                </div>
                <div className="col-lg-10 col-md-10 col-10">
                  <p className="paragraph">Dedicated team assistance</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-1  col-md-1 col-2">
                  <TiTickOutline />
                </div>
                <div className="col-lg-10 col-md-10 col-10">
                  <p className="paragraph">Capital-Friendly solutions</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-1 col-md-1 col-2">
                  <TiTickOutline />
                </div>
                <div className="col-lg-10 col-md-10 col-10">
                  <p className="paragraph">
                    Promise to convert Difficulties into Trust
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-1 col-md-1 col-2">
                  <TiTickOutline />
                </div>
                <div className="col-lg-10 col-md-10 col-10">
                  <p className="paragraph">
                    Ensures Success with Outstanding Results
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12"></div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-12 col-12 third-col"
            // data-aos="fade-left"
          >
            <img src={g} alt="img" width="100%" height="100%" />
            <img src={h} alt="img" width="100%" height="100%" />
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  font-family: "DM Sans", sans-serif;
  background-color: #ffffffd4;

  .first-col {
    padding: 20% 0 0 4%;
    img {
      border: 0;
      height: 208px;
      border-radius: 30px;
      overflow: hidden;
      object-fit: cover;
    }
  }
  .second-col {
    background-color: #f3f3f3;
    margin-left: 20px;
    border-radius: 30px;
    padding: 30px 67px 0 38px;
    .paragraph-border {
      border-left: 6px solid #147888;
      padding-left: 20px;
      margin-top: 10px;
      font-size: 20px;
      color: #6e6e6e;
      font-style: italic;
      font-weight: bold;
    }
    .paragraph {
      font-size: 17px;
      color: #6e6e6e;
    }
    svg {
      height: 21px;
      width: 30px;
      color: #147888;
    }
  }

  .third-col {
    padding: 6% 4% 0 2%;
    img {
      border: 0;
      height: 228px;
      border-radius: 30px;
      overflow: hidden;
      object-fit: cover;
      margin-top: 30px;
    }
  }

  @media (max-width: 567px) {
    .first-col {
      padding: 0% 2% 0 3%;
    }

    .second-col {
      margin-left: 0px;
      margin-top: 20px;
    }
   
 .third-col {
    padding: 1% 2% 0 2%;
}

  

  }

  @media (min-width: 567px) and (max-width: 992px) {
    .first-col {
      padding: 0% 0 0 2%;
    }
   .second-col {
    margin:20px 0 0 10px;
}
.third-col {
    padding: 0% 2% 0 3%;
}

.row {
      margin-right: 0;
    }

  }
`;
