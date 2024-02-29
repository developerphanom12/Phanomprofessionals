import { IoMdArrowDropdown } from "react-icons/io";
import styled from "styled-components";

const Section6 = () => {
  return (
    <Root>
      <div className="container ">
        <div className="row">
          <div className="col-lg-2 col-md-12 col-12"></div>
          <div className="col-lg-8 col-md-12 col-12 text_div">
            <span>Frequently </span>
            <span className="text">Asked </span> <span>Questions</span>
          </div>
          <div className="col-lg-2 col-md-12 col-12"></div>
        </div>

        <div className="main_div">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12 segment">
              <div className="que">
                <h4>1. How do I gеt updatеs from your wеb dеsignеrs?</h4>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="collapse"
                  data-bs-target="#demo1"
                >
                  <IoMdArrowDropdown />
                </button>
              </div>
              <div id="demo1" className="collapse show">
                Our wеb dеsignеrs maintain transparеnt communication. Regular
                updates can bе facilitated through prеfеrrеd communication
                channels, ensuring you are informed at еvеry stagе of thе
                prоjеct.
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12 segment ">
              <div className="que">
                <h4>
                  2. How can our web design services assist your business in
                  achieving its goals?
                </h4>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="collapse"
                  data-bs-target="#demo2"
                >
                  <IoMdArrowDropdown />
                </button>
              </div>
              <div id="demo2" className="collapse show2">
                Phanom Professionals specialize in helping businesses meet their
                unique requirements through our expert design solutions.
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12 segment">
              <div className="que">
                <h4>
                  3. What will be the service charges for designing a website?
                </h4>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="collapse"
                  data-bs-target="#demo3"
                >
                  <IoMdArrowDropdown />
                </button>
              </div>
              <div id="demo3" className="collapse show3">
                Download our Ratе Card for 2023-24 to access detailed
                information on pricing and services offered by Phantom
                Professionals.
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12 segment">
              <div className="que">
                <h4>
                  4. What sets our in-house web design developers team apart
                  from others?
                </h4>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="collapse"
                  data-bs-target="#demo4"
                >
                  <IoMdArrowDropdown />
                </button>
              </div>
              <div id="demo4" className="collapse show4">
                Our developers have proficiеncy in dеsign softwarе (Adobe
                Creative Suite, Figma, Skеtch), knowledge of web development
                languages (HTML, CSS, JavaScript), problеm-solving skills,
                attеntion to dеtail, and еffеctivе communication.
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12 segment">
              <div className="que">
                <h4>
                  5. How does our in-house team stay updated with the latest
                  design trends and technologies?
                </h4>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="collapse"
                  data-bs-target="#demo5"
                >
                  <IoMdArrowDropdown />
                </button>
              </div>
              <div id="demo5" className="collapse show5">
                Continuous learning and staying ahead of industry trends are
                integral to our in-house team's ethos. Through regular training
                sessions, workshops, and keeping a keen eye on emerging
                technologies is our key concern.
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12 segment">
              <div className="que">
                <h4>
                  6. How does our in-house team of web designers contribute to
                  delivering high-quality services?
                </h4>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="collapse"
                  data-bs-target="#demo6"
                >
                  <IoMdArrowDropdown />
                </button>
              </div>
              <div id="demo6" className="collapse show6">
                Having a dedicated team allows us to maintain close
                collaboration, ensuring good communication and swift adaptation
                to the specific needs of each project.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
};

const Root = styled.section`
  font-family: "DM Sans", sans-serif;
  background-color: #ffffffd4;
  padding: 20px 100px;
  .main_div {
    box-shadow: 1px 1px 5px 1px lightgray;
    padding: 20px 10px;
  }
  .text_div {
    margin-bottom: 0.7em;
    padding: 10px 5px 30px 5px;
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
  }
  .segment {
    border-bottom: 1px solid lightgray;
  }
  .que {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top:20px;
    h4 {
      font-family: "Roboto", Sans-serif;
      font-size: 18px;
      font-weight: 600;
    }
    button {
      background-color: transparent;
      color: #147888;
      border: none;
      svg {
        width: 25px;
        height: 25px;
      }
    }
    .collapse {
      transition: all 0.2s linear;
    }
  }
  @media (max-width: 567px) {
    padding:0;

  }


  @media (min-width: 567px) and (max-width: 992px) {
    padding:0;

  }
`;

export default Section6;
