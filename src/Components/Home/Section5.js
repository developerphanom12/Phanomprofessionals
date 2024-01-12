import React from "react";
import styled from "styled-components";
import f from "../Images/f.jpg";
import { RiAlarmWarningFill } from "react-icons/ri";

export default function Section5() {
  return (
    <Root>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-8 bg-opacity">
            {/* <div className=""> */}
            <div className="content">
              <div className="row">
                <div className="col-lg-7 col-12" data-aos="fade-up">
                  <p className="choose-content"> Why Choose US?</p>
                  <span className="white-content">We Inspire Change </span>
                  <span className="colored-content">
                    by Bringing out Solutions.
                  </span>
                  <span className="white-content">
                    Your Development, Our Commitment.
                  </span>
                  <p className="paragraph">
                    Phanom Professionals: Shaping Futures, Solving Challenges –
                    Enhancing Your Growth Beyond Consultation into
                    Transformational Success!.
                  </p>
                  <button>get a quotation</button>
                </div>


               <div className="col-lg-5  col-12 overlap-div">
                  <div className="row">
                    <div className="col-lg-1 col-md-2">
                      <RiAlarmWarningFill />
                    </div>
                    <div className="col-lg-10 col-md-10">
                        <p>Get proper In-House Expertise for your projects</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-1 col-md-2">
                      <RiAlarmWarningFill />
                    </div>
                    <div className="col-lg-10 col-md-10">
                        <p>Rely on us to get the best 24/7 Support</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-1 col-md-2">
                      <RiAlarmWarningFill />
                    </div>
                    <div className="col-lg-10 col-md-10">
                        <p>Get Proven Track Records of our success</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-1 col-md-2">
                      <RiAlarmWarningFill />
                    </div>
                    <div className="col-lg-10 col-md-10">
                        <p>Explore to get Cost-Effective Brilliance</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-1 col-md-2">
                      <RiAlarmWarningFill />
                    </div>
                    <div className="col-lg-10 col-md-10">
                        <p>Meet our Dedicated Project Manager</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-1 col-md-2">
                      <RiAlarmWarningFill />
                    </div>
                    <div className="col-lg-10 col-md-10">
                        <p>Meet our Dedicated Project Manager</p>
                    </div>
                  </div>
                </div> 



              </div>
            </div>
            {/* </div> */}
          </div>
          <div className="col-lg-4  col-md-4 col-4 bg-color"></div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  font-family: "DM Sans", sans-serif;
  background-color: #ffffffd4;
  /* .fixed-img{
    border:1px solid black;
    height:600px;
    background-image:url(${f});
    background-size:100% 100%;
    background-color:black;
    opacity:;
    background-attachment:fixed;
    background-repeat:no-repeat;
    
} */

  .bg-opacity {
    position: relative;
    background-color: #000;
    padding-top: 80px;
    padding-left: 53px;
  }

  .bg-opacity::before {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: 0.2;
    background: url(${f});
    background-attachment: fixed;
    background-size: 100% 100%;
  }

  .content {
    position: relative;
    width: 100%;
    height: 500px;
  }

  .bg-color {
    background-color: #006778;
  }

  .choose-content {
    color: white;
    font-size: 17px;
  }
  .colored-content {
    font-size: 30px;
    font-weight: bold;
    line-height: 1.5em;
    color: #147888;
  }
  .white-content {
    font-size: 30px;
    font-weight: bold;
    line-height: 1.5em;
    color: #ffffff;
  }
  .paragraph {
    font-size: 17px;
    color: #ffffffd4;
    padding: 18px 0 0 0;
  }
  button {
    font-size: 13px;
    color: white;
    background-color: #147888;
    padding: 15px 40px;
    border: 0;
    letter-spacing: 3px;
    border-radius: 50px;
    text-transform: uppercase;
    &:hover {
      margin-top: -10px;
      transition: 1s;
    }
  }
  .overlap-div {
    background-color: #147888;
    width: 70%;
    height: 400px;
    border-radius: 30px;
    margin-left: 80%;
    position: absolute;
    padding: 43px 0 0 40px;
    svg {
      width: 40px;
      height: 40px;
      color: #ffffff;
    }
    p{
        color:#FFFFFFD4;
        padding:10px 0 0 10px;
        margin-bottom:20px
    }
  }

  @media (max-width: 567px){
.bg-opacity {
    padding-top: 40px;
    padding-left: 10px; 
  }

 .choose-content {
    font-size: 15px;
}

  .white-content {
    font-size: 21px;
}
.colored-content {
    font-size: 21px;
}
 button {
    padding: 15px 33px;
}

.overlap-div {
    /* margin-left: 0; 
     position: unset; */
     display:none

}

/* .overlap-div {
    padding: 23px 0 0 10px;
} */
}


@media (min-width: 567px) and (max-width: 992px){
  .bg-opacity {
     padding-left:10px;
     padding-right:60px;
}

  .choose-content {
    font-size: 15px;
}

  .white-content {
    font-size: 21px;
}
.colored-content {
    font-size: 21px;
}

.overlap-div {
    padding: 23px 0 0 10px;
    height:390px;
    margin-left:93%;
    p{
      font-size:13px
    }
}

}
`;


