import { IoMdArrowDropdown } from "react-icons/io";
import styled from "styled-components";

const Section5 = () => {
  return (
    <Root>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-lg-2 col-md-12 col-12"></div>
          <div
            className="col-lg-8 col-md-12 col-12 text_div"
            data-aos="fade-up"
          >
            <span>Frequently </span>
            <span className="text">Asked </span> <span>Questions</span>
          </div>
          <div className="col-lg-2 col-md-12 col-12"></div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 ">
            <div className="que">
              <h4>
              What is a PHP developer?
              </h4>
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
            PHP is a dynamic programming language used by developers to make programs, websites, and apps. Web development and corporate applications are two areas where PHP is well-known. PHP developers are actually a specialized subset of the "Developer" position, depending on the job description.Websites are frequently created using PHP, and PHP developers usually work on user interfaces or in the background.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 ">
            <div className="que">
              <h4>How much does it cost to hire a PHP developer?</h4>
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
            The starting monthly wage for our full-time PHP development position is $1500, contingent upon the candidate's experience and skill set.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 ">
            <div className="que">
              <h4>What Are the Best Ways to Hire PHP Developers?</h4>
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
            By assembling a pool of pre-screened PHP coders, our talent acquisition specialists can help you fill vacant PHP developer positions and save you time and effort in the process of selecting the right candidate.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 ">
            <div className="que">
              <h4>Why collaborate with devoted PHP programmers?</h4>
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
            You will have complete control over the development cycle if you decide to work with a professional PHP developer, which gives you an edge while looking for one.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 ">
            <div className="que">
              <h4>How do I choose the finest business to work with when hiring a professional PHP programmer?</h4>
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
            Both employment companies and independent PHP developers are abundant in their willingness to provide their services. But you have to find the one that would benefit you the most.
In order to accomplish this goal, we guarantee pleasure from both parties with Phanom Professionals and its intention to create a long-term association between the client & the talent.

            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 ">
            <div className="que">
              <h4>Why not use freelancers instead of hiring committed PHP programmers from an agency?</h4>
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
            Our pool of elite PHP developers at Phanom Professionals is rigorously screened, and we compensate our developers 1.5 times what they would be paid locally to guarantee better retention and superior quality. In addition, we go above and above by handling the administrative duties.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 ">
            <div className="que">
              <h4>Are you offering any upkeep and assistance?</h4>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="collapse"
                data-bs-target="#demo7"
              >
                <IoMdArrowDropdown />
              </button>
            </div>
            <div id="demo7" className="collapse show6">
            Yes, Phanom Professionals frees you from pre- and post-hiring chores while assisting you in meeting your business needs head-on.
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
  padding: 0 100px;
  .text_div {
    margin-bottom: 0.7em;
    padding: 30px;
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
  .que {
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      background-color: transparent;
      color: #147888;
      border: none;
      svg {
        width: 25px;
        height: 25px;
      }
    }
  }

@media (max-width: 567px) {
    padding:0;
     .text_div {
    padding: 0;
}
.que {
    margin: 20px 0;
}
  }

  @media (min-width: 567px) and (max-width: 992px){
    padding:0;
    .text_div {
    padding: 0;
}

.que {
    margin: 20px 0;
}
  }
`;

export default Section5;
