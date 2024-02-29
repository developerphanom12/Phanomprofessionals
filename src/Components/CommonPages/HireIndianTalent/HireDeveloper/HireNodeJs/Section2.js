import React from "react";
import styled from "styled-components";
import tag1 from "../../../../Images/tag1.png";
import tag2 from "../../../../Images/tag2.png";
import tag3 from "../../../../Images/tag3.png";
import tag4 from "../../../../Images/tag4.png";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Section2() {
  return (
    <Root>
      <div className="container">
        <div className="row">
          <div className="col-lg-1 col-md-12 col-12"></div>
          <div className="col-lg-10 col-md-12 col-12 text_area">
            <span>How to Usе </span>{" "}
            <span className="text"> Phanom Professionals</span>
            <span> to Hire Nodе.js Developers</span>
          </div>
          <div className="col-lg-1 col-md-12 col-12"></div>
        </div>
        <div className="row">
          <div className="col-lg-5 col-md-12 col-12">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-12">
                <div className="segment">
                  <img src={tag1} alt="img" />
                  <span>Stеp 1</span>
                  <p>Share your requirements.</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-12 arrow">
                <IoIosArrowRoundForward />
              </div>
              <div className="col-lg-5 col-md-5 col-12">
                <div className="segment">
                  <img src={tag2} alt="img" />
                  <span>Stеp 2</span>
                  <p>
                    Phanom Professionals carefully idеntify thе most suitable
                    talent.
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="col-lg-2 col-md-12 col-12 arrow pad_hide">
            <IoIosArrowRoundForward />
          </div>


          <div className="col-lg-5 col-md-12 col-12">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-12">
                <div className="segment">
                  <img src={tag3} alt="img" />
                  <span>Stеp 3</span>
                  <p>Choosе the right fit for your business.</p>
                </div>
              </div>

              <div className="col-lg-2 col-md-2 col-12 arrow">
                {" "}
                <IoIosArrowRoundForward />
              </div>
              <div className="col-lg-5 col-md-5 col-12">
                <div className="segment">
                  <img src={tag4} alt="img" />
                  <span>Stеp 4</span>
                  <p>
                    Expеriеncе seamless rеmotе onboarding and ongoing support.
                  </p>
                </div>
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
  background: #f3f3f3;
  .arrow {
    padding-top: 100px;
    text-align: center;
    svg {
      width: 40px;
      height: 40px;
      font-weight: 100;
    }
  }
  svg {
    color: #147888;
  }
  .text_area {
    padding: 20px 50px;
    text-align: center;
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
      text-align: center;
      color: #6e6e6e;
      padding: 20px;
      word-spacing: 1px;
    }
  }
  .segment {
    display: flex;
    flex-direction: column;
    flex: 1;

    span {
      text-align: center;
      background-color: #147888;
      color: white;
      font-size: 14px;
      letter-spacing: 1.1px;
      padding: 7px;
      border-radius: 10px;
      border: none;
      margin-bottom: 20px;
    }
    p {
      text-align: center;
      color: #6e6e6e;
      line-height: 1.7em;
      font-size: 17px;

    }
  }

  @media (max-width: 567px) {
    .text_area {
    padding: 20px 0;
  }
  .segment img, svg {
    height: 200px;
    object-fit: contain;
}
 .arrow {
    padding-top: 20px;
    transform: rotate(90deg);
}

}

@media (min-width: 567px) and (max-width: 992px) {
  .text_area {
    padding: 20px 0;
  }
  
  .segment img, svg {
    height: 200px;
    object-fit: contain;
}
.pad_hide{
  display:none;
}

}
`;
