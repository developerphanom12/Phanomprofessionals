import React from "react";
import styled from "styled-components";
import i from "../../Images/i.webp";
import j from "../../Images/j.png";
import k from "../../Images/k.webp";
import l from "../../Images/l.webp";

export default function Section11() {
  return (
    <Root>
      <div className="container-fluid">
        <div className="row first-row">
          <div className="col-lg-12 " data-aos="fade-up">
            <p className="blog-content">OUR BLOG POST</p>
            <span className="black-content">Reading </span>
            <span className="colored-content"> Our Blog </span>
            <span className="black-content"> Content </span>
            {/* <div className="circle"></div> */}
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>

        <div className="row second-row">
          <div className="col-lg-4 col-md-6">
            <div className="blog">
              <div className="bg-img-one">
                <div className="row">
                  <div className="col-lg-9"></div>
                  <div className="col-lg-3">
                    <h5>Blog</h5>
                  </div>
                </div>
              </div>
              <img src={j} alt="img" />
              <h2>Does Node.js Offer More Than Web Development?</h2>
              <p className="paragraph">
                Traversing the intricate path of website development may seem
                overwhelming, but worry not. Here, within this article, you’ll
                find a guiding light, offering expert insights
              </p>
              <button>READ MORE </button>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog">
              <div className="bg-img-two">
                <div className="row">
                  <div className="col-lg-9"></div>
                  <div className="col-lg-3">
                    <h5>Blog</h5>
                  </div>
                </div>
              </div>
              <img src={j} alt="img" />
              <h2>
                Boost your Web Development projects with top-notch React.js
                Indian talent
              </h2>
              <p className="paragraph">
                As we embrace the dawn of 2024, the tech realm brims with
                excitement and anticipation. Within the dynamic sphere of
                front-end development, a prevailing inquiry
              </p>
              <button>READ MORE </button>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog">
              <div className="bg-img-three">
                <div className="row">
                  <div className="col-lg-9"></div>
                  <div className="col-lg-3">
                    <h5>Blog</h5>
                  </div>
                </div>
              </div>
              <img src={j} alt="img" />
              <h2>The Power of UI Extensions for a Better Shopping Experience Tomorrow</h2>
              <p className="paragraph">
                In the age of instant gratification, a smooth and engaging
                checkout experience is the ultimate test for any online store.
                Shopify’s powerful platform offers a
              </p>
              <button>READ MORE </button>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  font-family: "DM Sans", sans-serif;
  background-color: #ffffffd4;

  .first-row {
    padding-top: 60px;
    text-align: center;

    .blog-content {
      color: #147888;
      font-size: 13px;
      text-align: center;
      text-transform: uppercase;
      padding-top: 60px;
      font-weight: 600;
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
    .paragraph {
      font-size: 17px;
      color: #6e6e6e;
      /* padding: 0 50px 0 77px; */
      margin-top: 20px;
      padding: 0 25% 0 25%;
    }
  }

  .second-row {
    padding: 40px 50px 0 50px;
    overflow: hidden;
    .blog {
      border: 1px solid #dadada;
      height: 630px;
      border-radius: 30px;
      overflow: hidden;
      .bg-img-one {
        background-image: url(${i});
        background-size: contain;
        background-repeat: no-repeat;
        height: 220px;
        width: 100%;
        background-size: contain;
        h5 {
          font-size: 11px;
          background-color: #147888;
          color: white;
          padding: 10px 16px;
          margin-top: 20px;
          width: 60px;
          border-radius: 10px;
          text-transform: uppercase;
        }
      }
      img,
      svg {
        vertical-align: middle;
        border-radius: 50px;
        height: 60px;
        margin-left: 40px;
        margin-top: -30px;
      }
      h2 {
        color: #2d2d2d;
        font-size: 25px;
        font-weight: bold;
        line-height: 1.3em;
        padding: 13px 0 0 37px;
      }
      .paragraph {
        font-size: 17px;
        color: #777;
        padding: 13px 32px 0 37px;
      }

      button {
        border: none;
        background: #ffffffd4;
        font-size: 12px;
        color: #147888;
        padding: 20px 0 0 39px;
        word-spacing: 2px;
        letter-spacing: 2px;
      }
    }
    .bg-img-two {
        background-image: url(${k});
        background-size: contain;
        background-repeat: no-repeat;
        height: 220px;
        width: 100%;
        background-size: contain;
        h5 {
          font-size: 11px;
          background-color: #147888;
          color: white;
          padding: 10px 16px;
          margin-top: 20px;
          width: 60px;
          border-radius: 10px;
          text-transform: uppercase;
        }
  }
  .bg-img-three {
        background-image: url(${l});
        background-size: contain;
        background-repeat: no-repeat;
        height: 220px;
        width: 100%;
        background-size: contain;
        h5 {
          font-size: 11px;
          background-color: #147888;
          color: white;
          padding: 10px 16px;
          margin-top: 20px;
          width: 60px;
          border-radius: 10px;
          text-transform: uppercase;
        }
  }
}

@media (max-width: 567px) {

 .first-row {
    padding-top: 112px; 
    .paragraph {
    padding: 0 0 0 0;
}
}

.second-row {
    padding: 0 8px 0 20px;
    .blog {
    margin:20px 0 0 0;
}
.blog img{
    margin-top: -104px;
}

    
}

.first-row .blog-content {
    padding-top: 80px;

}

.row {
      margin-right: 0;
    }
}

@media (min-width: 567px) and (max-width: 992px){
  .second-row {
    .blog {
    margin:20px 0 20px 0;
}
}
 .first-row .paragraph {
 padding:0;
}
.row {
      margin-right: 0;
    }
}
`;
