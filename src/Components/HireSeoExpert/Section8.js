import { IoMdArrowDropdown } from "react-icons/io";
import styled from "styled-components";

const Section8 = () => {
  return (
    <Root>
      <div className="container mt-3">
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
                Why should I work with a Phanom Professionals Google Ads Expert?
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
              Hire Phanom Professionals’ Google Ads Expert to discover a more
              effective way to run your business. Our tech specialists handle
              the grunt work, relieving you of the tiresome hiring procedure and
              even post-hiring obligations.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 ">
            <div className="que">
              <h4>Is my PPC expert for AdWords certified?</h4>
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
              Yes, by earning leading industry certifications and consistently
              improving their skills, our knowledgeable AdWords PPC consultants
              show off their knowledge.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 ">
            <div className="que">
              <h4>What Do PPC AdWords Experts Do?</h4>
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
              The planning, designing, implementing, and evaluating of
              pay-per-click advertising campaigns falls within the purview of a
              PPC specialist.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 ">
            <div className="que">
              <h4>How do you go about your vetting?</h4>
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
              Before being hired by Phanom Professionals, each applicant must
              pass a battery of tests, including the Communication Test,
              Aptitude Test, Technical MCQ Test, Live Coding Test, and a final
              Technical Interview round.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 ">
            <div className="que">
              <h4>How Can I Locate the Best Google AdWords Specialists?</h4>
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
              It’s now simple to identify the top Google AdWords Experts because
              Phanom Professionals make up the top 3.5% of marketing
              professionals. You can hire and manage top talent remotely with
              the support of our team of talent success coaches.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 ">
            <div className="que">
              <h4>What is the impact of Ad Rank on cost per click (CPC)?</h4>
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
              A profitable advertising campaign lowers your cost per click and
              maximizes your ad rank (more views). Your cost-per-click will
              decrease as your campaign’s results improve, and your ad rank will
              rise rapidly as your Quality Score rises.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 ">
            <div className="que">
              <h4>How Do You Go into a PPC Campaign with Expectations?</h4>
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
              It’s equally crucial to control expectations before launching an
              SEO or PPC campaign. Understanding the client’s business is the
              first step, which is followed by the site’s flow and the
              competitive environment. Choosing the objectives that will help
              define the parameters for a PPC campaign is the next stage.
              Additionally, taking into account a variety of dependent variables
              will assist you in setting reasonable expectations.
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
  padding: 50px 100px;
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
`;

export default Section8;
