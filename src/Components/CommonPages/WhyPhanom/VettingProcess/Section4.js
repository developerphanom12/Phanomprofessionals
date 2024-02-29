import React from "react";
import styled from "styled-components";
import svgg from "../../../Images/svg.svg";

export default function Section4() {
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-12 col-12"></div>
          <div
            className="col-lg-8 col-md-12 col-12 text_div"
            data-aos="fade-up"
          >
            <span>Our Team's Conduct:</span>
            <span className="text"> Focus</span>{" "}
            <span>on Positive Behavior</span>
          </div>
          <div className="col-lg-2 col-md-12 col-12"></div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            {/* <p className="text-center">
            Emphasizing advantageous behavior enables a supportive subculture that encourages collaboration, innovation, and standard group achievement. Here are a few key standards we recall while selling high quality conduct inside our members:
            </p> */}
            <p className="text-center mb-4">
               Emphasizing advantageous behavior enables a supportive subculture that encourages collaboration, innovation, and standard group achievement. Here are a few key standards we recall while selling high quality conduct inside our members:          
            </p> 
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>Clear Expectations</p>
                <span>
                Clearly speak your team's expectations regarding behavior, values, and desires. 
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>Constructive Feedback</p>
                <span>
                Provide feedback in a constructive way to our clients. Focus on strengths, offer answers for improvement, and avoid blaming or criticizing.                 </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>Open Communication</p>
                <span>
                Encourage open and obvious communication within the team and client for an easy workflow. 
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p> Conflict Resolution</p>
                <span>
                Address conflicts right away and constructively. Encourage open talk to solve differences, and offer guides to help team individuals discover not unusual ground.                 </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>Continuous Learning:</p>
                <span>
                Foster a subculture of non-stop getting to know and development. Encourage members to increase their competencies, proportion information, and help each different expert growth.                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>Flexibility and Adaptability</p>
                <span>
                Suppliers feed inventory to an ad exchange, whеrе a DSP facilitatеs thе salе and purchasе of ad spacе among advеrtisеrs, agеnciеs, nеtworks, and publishеrs through a bidding procеss to dеtеrminе invеntory pricеs.
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
                <p>Excеllеnt Communication</p>
                <span>
                Our team can nicely fit up with your team to give updates of the projects and our in house team are really good at their jobs and they can easily work in different time zones according to the availability of the client     </span>         </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
           
          </div>
          
        </div>



      </div>
    </Root>
  );
}
const Root = styled.section`
  font-family:"DM Sans", sans-serif;
  padding:0 50px;

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
      padding: 0px 10px 20px 0px;
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
    margin-bottom:0;
 padding: 10px; 
   
}
  }

  @media (min-width: 567px) and (max-width: 992px){
    padding:0;
    .text_div {
    margin-bottom:0;
 padding: 10px; 
   
}
 .block_main .block_div {
    padding: 0px 10px 20px 0px;

}

  }
`;
