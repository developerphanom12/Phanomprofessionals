import React from "react";
import styled from "styled-components";
import d from "../../Images/d.jpg";
import f from "../../Images/f.jpg";

export default function Section8() {
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 first-col">
            <img src={d} alt="img" width="100%" height="100%" />
          </div>

          <div className="col-lg-3 col-md-6 col-12 second-col">
            <img src={f} alt="img" width="100%" height="100%" />
            
            <div className="row">
                <div className="col-lg-3  col-md-4 col-4"></div>
                <div className="col-lg-5 col-md-5 col-5 ">
                  <div className="image-circle">
                    <h4>750+</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-md-3 col-3"></div>
            </div>
            <div className="feed-content">
                <h5>Was give the best feedback for our services</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
              
            </div>

            <div className="col-lg-6  col-md-12 col-12 third-col" data-aos="fade-up">
            <p className="testimonial-content">TESTIMONIALS CLIENT</p>
            <span className="black-content">We have </span>
            <span className="colored-content"> more than 1K + </span>
            <span className="black-content"> Corporation until individuals client & give they best feedback for us
            </span>
            <div className="circle"></div>
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
  .second-col{
    padding: 10% 0 0 2%;
    img {
      border: 0;
      height: 208px;
      border-radius: 30px;
      overflow: hidden;
      object-fit: cover;
    }
    .image-circle {
    height: 100px;
    background-color: #5cd4b9;
    border-radius: 65px;
    margin-top:-62px;
      h4 {
        color: white;
        padding-top: 30px;
        font-weight: 700;
        font-size: 28px;
        text-align:center;
      }
  }
  .feed-content{
        background-color:#f3f3f3;
        height:208px;
        border-radius:30px;
        margin-top:10px;
        text-align:center;
        padding: 28px 70px 0 70px;
        h5{
            color:#2D2D2D;
        }
        p{
            color:#6E6E6E;
            font-size:17px;
        }
        
}
}
.third-col{
    padding: 10% 3% 0 4%;

.testimonial-content {
    color: #147888;
    font-size: 13px;
    text-transform: uppercase;
  }
  .colored-content {
      font-size: 35px;
      font-weight: bold;
      line-height: 1.3em;
      color: #147888;
    }
    .black-content {
      font-size: 35px;
      font-weight: bold;
      line-height: 1.3em;
    }
    .circle {
      width:16%;
      height:85px;
      background-color: #5cd4b9;
      border-radius: 50px;
      margin:-20% 0 0 0;
    }
}

@media (max-width: 567px) {
.first-col {
    padding: 10% 0 0 4%;
}
  .row {
      margin-right: 0;
    } 
  .second-col .image-circle {
    height: 132px;
    margin-top:-73px;
}

.third-col .circle {
    width: 25%;
    margin: -72% 0 0 0;
}

.row {
      margin-right: 0;
    }
}


@media (min-width: 567px) and (max-width: 992px) {
  .first-col {
    padding: 5% 0 0 2%;
}
 .second-col {
    padding: 5% 0 0 2%;
}

.second-col .image-circle {
    height: 140px;
   
}
 .third-col {
  padding: 0% 0% 0 2%;
  .circle {
    width: 12%;}
}
.row {
      margin-right: 0;
    }

}
`;
