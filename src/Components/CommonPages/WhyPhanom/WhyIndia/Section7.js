import React, { useState } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
import styled from "styled-components";

export default function Section7() {
  const [isArrowRightVisible, setIsArrowRightVisible] = useState(true);
  const [isArrowDownVisible, setIsArrowDownVisible] = useState(false);

  const handleArrowRightClick = () => {
    setIsArrowRightVisible(false);
    setIsArrowDownVisible(true);
  };

  const handleArrowDownClick = () => {
    setIsArrowRightVisible(true);
    setIsArrowDownVisible(false);
  };
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 text">
            <h4>Ask a Question</h4>
            <div id="arrow_1">
              <h5>
                Is it difficult to communicate with Indian talent?
                {isArrowRightVisible && (
                  <FaArrowDown onClick={handleArrowRightClick} />
                )}
                {isArrowDownVisible && (
                  <FaArrowRight onClick={handleArrowDownClick} />
                )}
              </h5>
              {isArrowRightVisible && (
                <p>
                  Only those who pass the AI-powered communication
                  assessment—which measures reading comprehension, speech
                  fluency, writing, pronunciation, and speaking speed—become
                  members of our network.
                </p>
              )}
            </div>
            <div id="arrow_2">
              <h5>
                Is a time zone difference anticipated?
                {isArrowRightVisible && (
                  <FaArrowDown onClick={handleArrowRightClick} />
                )}
                {isArrowDownVisible && (
                  <FaArrowRight onClick={handleArrowDownClick} />
                )}
              </h5>
              {isArrowRightVisible && (
                <p>
                  Indian talent is incredibly adaptive and flexible, allowing
                  them to work in various time zones. We have talent for the US,
                  UK, and AU, among other time zones.
                </p>
              )}
            </div>
            <div id="arrow_3">
              <h5>
                Can we still hire if we don't have a legal entity in India?
                {isArrowRightVisible && (
                  <FaArrowDown onClick={handleArrowRightClick} />
                )}
                {isArrowDownVisible && (
                  <FaArrowRight onClick={handleArrowDownClick} />
                )}
              </h5>
              {isArrowRightVisible && (
                <p>
                  Yes, we do cover that section. In India, a company will not be
                  required to have a legal entity. In compliance with Indian
                  labor laws, there will be a contract between Phanom
                  professionals and Talent in addition to an agreement between
                  Phanom professionals and the company.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  background-color: #dadada;
  padding:0 50px;
  .text {
    margin: 50px 0px;
    padding: 10px;
    background-color: #fff;
    h5 {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      svg {
        color: #147888;
        width: 18px;
      }
    }
    span {
      font-weight: bold;
      font-size: 18px;
      padding: 10px;
    }
    p {
      font-size: 15px;
      padding: 10px;
    }
  }
  @media (max-width: 567px) {
    padding: 0 16px;

 .text {
    margin: 20px 0px;
}

  }
  
  @media (min-width: 567px) and (max-width: 992px){
    padding: 0 16px;

.text {
   margin: 20px 0px;
}

  }
`;
