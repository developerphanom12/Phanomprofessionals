import React from "react";
import styled from "styled-components";

export default function Section3() {
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-12 col-12"></div>
          <div
            className="col-lg-8 col-md-12 col-12 text_div"
            data-aos="fade-up"
          >
            <span>What Makеs </span>
            <span className="text"> Us </span> <span> Uniquе?</span>
          </div>
          <div className="col-lg-2 col-md-12 col-12"></div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-6 col-12 block_main1">
            <div className="block_div1">
              <div className="number_div1">01</div>
              <div>
                <span>
                  Efficient and Cost-Saving: Our services are offered at no cost
                  for recruitment, allowing us to specialize in helping
                  companies save money. Our cost-effective solutions enable you
                  to eliminate the common expenses associated with recruiting
                  and enhance your business processes.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-12 block_main">
            <div className="block_div">
              <div className="number_div">02</div>
              <div>
                <span>
                  Risk-Free Trial: Experience our expertise with peace of mind
                  during a two-week trial period. There is no pressure to
                  continue after the trial, as there is no obligation. This
                  trial is designed to showcase the value we can bring to your
                  company, all without requiring any upfront payment.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 block_main">
            <div className="block_div">
              <div className="number_div">03</div>
              <div>
                <span>
                  Replacement Guarantee: We stand behind the quality of our work
                  with confidence. In the unlikely event that a replacement is
                  needed within the first thirty days, we guarantee a seamless
                  transition to ensure your satisfaction.
                </span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <p className="text-center mt-3">At our company, we understand that circumstances can shift. Rest assured, canceling with us is a hassle-free process that offers you the convenience and flexibility you need. Thanks to our unique approach, we have an outstanding client retention rate that goes beyond what is typically seen in the industry.</p>
              <p className="text-center"> Our main focus is building long-lasting connections with our clients, exceeding their expectations every step of the way. With us, you can trust that your company's SEO needs will be met in a streamlined, cost-effective, and secure manner. Choose to work with us and benefit from our customer-centric policies that provide certainty and flexibility.</p>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  font-family: "DM Sans", sans-serif;
  padding: 0 50px;

  .text_div {
    margin-bottom: 0.7em;
    padding: 20px 30px;
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
      padding: 30px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      border: 1px solid #dadada;
      border-radius: 30px;
      &:hover {
        background-color: #dadada4f;
      }
      p {
        font-size: 20px;
        font-weight: bold;
        margin: 0;
        padding-bottom: 10px;
      }
      span {
        font-size: 17px;
        color: #6e6e6e;
      }
      .number_div {
        color: #147888;
        word-spacing: 1px;
        letter-spacing: 0.1px;
        font-size: 25px;
        font-weight: bold;
        line-height: 1.2em;
      }
    }
  }

  .block_main1 {
    margin-bottom: 20px;
    display: flex;
    flex: 1;
    .block_div1 {
      background-color: #147888;
      word-spacing: 1px;
      letter-spacing: 0.1px;
      padding: 30px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      border: 1px solid #dadada;
      border-radius: 30px;

      p {
        font-size: 20px;
        font-weight: bold;
        margin: 0;
        padding-bottom: 10px;
        color: #fff;
      }
      span {
        font-size: 17px;
        color: #fff;
      }
      .number_div1 {
        color: #fff;
        word-spacing: 1px;
        letter-spacing: 0.1px;
        font-size: 25px;
        font-weight: bold;
        line-height: 1.2em;
      }
    }
  }

  @media (max-width: 567px) {
    padding:0;
   .block_main1 {
    flex: unset; 
}
 .block_main {
  flex: unset; 
}

  }
  @media (min-width: 567px) and (max-width: 992px){
    padding:0;
    .block_main1 {
    flex: unset; 
}
 .block_main {
  flex: unset; 
}

  }
`;
