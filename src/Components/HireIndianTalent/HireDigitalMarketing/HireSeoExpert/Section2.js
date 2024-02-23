import React from "react";
import styled from "styled-components";
import svgg from "../../../Images/svg.svg";

export default function Section2() {
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-12 col-12"></div>
          <div
            className="col-lg-8 col-md-12 col-12 text_div"
            data-aos="fade-up"
          >
            <span>Why Should </span>
            <span className="text"> You Go </span> <span>With Us?</span>
          </div>
          <div className="col-lg-2 col-md-12 col-12"></div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>Unlock the Power of Our In-House Experts</p>
                <span>
                  Our formidable team of 50+ professionals boasts a wealth of
                  knowledge and experience, carefully cultivated within our own
                  ranks. With their vast expertise, they are equipped to handle
                  a wide spectrum of SEO challenges and tailor solutions to suit
                  your unique objectives.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>24/7 Support at Your Fingertips</p>
                <span>
                  Our dedicated team is always at your service, round-the-clock.
                  We understand that your business may operate beyond
                  traditional working hours, but rest assured, our team is
                  always available to address any questions or concerns you may
                  have. Consider us your reliable partner, providing unwavering
                  support for your success.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>Proven Results You Can Trust</p>
                <span>
                  We let our proven track record speak for itself. Our
                  impressive portfolio showcases our prowess in delivering
                  impactful SEO strategies for various industries. Trust in our
                  expertise to elevate your organization and achieve measurable
                  results.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p> Cost Effective</p>
                <span>
                  At Affordable Solutions, we pride ourselves on offering
                  high-quality SEO services at an affordable price. Our goal is
                  to provide the best return on your investment, ensuring that
                  your money is well-spent.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-12 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>Dedicated Project Manager</p>
                <span>
                  With our dedicated project manager overseeing your SEO
                  campaigns, you can expect individualized attention and
                  personalized strategies. Your project manager will serve as
                  your main contact, ensuring seamless coordination and
                  communication to meet your unique needs
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img"/>
              </div>
              <div className="tag_text">
                <p>Deliver on time</p>
                <span>
                  We understand the importance of timely delivery, which is why
                  we guarantee to complete all SEO tasks on schedule. Our team
                  is committed to meeting deadlines and implementing strategies
                  promptly. Our reliable track record of prompt delivery is a
                  testament to our reliability.
                </span>
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
  .block_main {
    margin-bottom: 20px;
    display: flex;
    flex: 1;
    .block_div {
      word-spacing: 1px;
      letter-spacing: 0.1px;
      padding: 0 10px 40px 0;
      display: flex;
      border: 1px solid #147888;
      border-radius: 20px;
      &:hover {
        box-shadow: 1px 1px 5px 1px #147888;
        transition: 0.5s;
      }
      p {
        font-size: 2em;
        font-weight: 600;
        margin: 0;
        padding-bottom: 10px;
      }
      span {
        font-size: 17px;
        color: #6e6e6e;
        padding-bottom: 20px;
      }
      .number_div {
        color: #147888;
        word-spacing: 1px;
        letter-spacing: 0.1px;
        font-size: 25px;
        font-weight: bold;
        line-height: 1.2em;
      }
      .tag_text {
        padding: 10px 0px;
      }
    }
  }

  @media (max-width: 567px) {
    padding:0;

   .text_div {
     padding:0; 
}

 .block_main .block_div {
    padding: 0 10px 10px 0;

}

  }

  @media (min-width: 567px) and (max-width: 992px){
    padding:0;
    .block_main .block_div {
    padding: 0 10px 10px 0;

}

  }
`;
