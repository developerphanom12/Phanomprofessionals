import React from "react";
import { IoInformationCircle } from "react-icons/io5";
import styled from "styled-components";

export default function Gallery() {
  return (
    <Root>
      <div className="main_gallery_div">
        <header>
          <h3 className="header_h3">Showcase Your Services In A Gig Gallery</h3>
          <p className="header_p">
            Encourage buyers to choose your Gig by featuring a variety of your
            work.
          </p>
          <div className="header_div">
            <span className="span_icon">
              <IoInformationCircle />
            </span>
            <p className="header_div_p">
              To comply with Fiverr’s terms of service, make sure to upload only
              content you either own or you have the permission or license to
              use.
            </p>
          </div>
          <button className="header_button">
            <span className="button_span">Gig image guidelines</span>
          </button>
        </header>
        <div className="img_div_add">
          <h3 className="div_img_h3">
            <p className="div_img_h3_p">Images (up to 3)</p>
            <p className="div_img_h3_p2">
              Get noticed by the right buyers with visual examples of your
              services.
            </p>
          </h3>
          <ul>
            <div className="ul_div">
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </div>
          </ul>
        </div>

        <div className="img_div_add">
          <h3 className="div_img_h3">
            <p className="div_img_h3_p">Video (Only one)</p>
            <p className="div_img_h3_p2">
              Capture buyers' attention with a video that showcases your
              service. Please choose a video shorter than 75 seconds and smaller
              than 50MB
            </p>
          </h3>

          <ul>
            <div className="ul_div">
              <li>1</li>
            </div>
          </ul>
        </div>
        <div className="img_div_add">
          <h3 className="div_img_h3">
            <p className="div_img_h3_p">Documents (Up to 2 )</p>
            <p className="div_img_h3_p2">
            Show some of the best work you created in a document (PDFs only).
            </p>
          </h3>

          <ul>
            <div className="ul_div">
              <li>1</li>
              <li>1</li>
            </div>
          </ul>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 50px;
  padding: 0px 40px;
  width: 75vw;
  color: #62646a;
  .main_gallery_div {
    width: 100%;
    margin-bottom: 20px;
    position: relative;
    padding: 28px;
    border-radius: 5px 5px 0 0;
    header {
      position: relative;
      border-bottom: 1px solid #dadbdd;
      margin-bottom: 12px;
      margin-top: 8px;
      .header_h3 {
        margin-bottom: 8px;
        font-size: 28px;
        line-height: 130%;
        font-family: macan, helvetica neue, Helvetica, Arial, sans-serif;
        font-weight: 700;
        color: #404145;
      }
      .header_p {
        color: #404145;
        display: block;
        text-transform: none;
      }
      .header_div {
        display: flex;
        background: #efeff0;
        border: 1px solid #e4e5e7;
        border-radius: 4px;
        padding: 16px;
        margin-top: 16px;
        .span_icon {
          margin-right: 12px;
          margin-top: 2px;
          min-width: 16px;
          svg {
            width: 16px;
            height: 16px;
            color: #212326;
          }
        }
        .header_div_p {
          color: #62646a;
          font-size: 14px;
          line-height: 22px;
          text-transform: none;
        }
      }
      .header_button {
        font-weight: 700;
        color: #222325;
        vertical-align: baseline;
        border: 0;
        background: transparent;
        font-size: 14px;
        line-height: 21px;
        text-decoration-line: underline;
        padding: 12px 0 0;
      }
    }
    .img_div_add {
      border-bottom: 1px solid #dadbdd;
      padding-top: 23px;
      padding-bottom: 16px;
      position: relative;
      .div_img_h3 {
        position: relative;
        font-size: 16px;
        line-height: 18px;
        font-weight: 500;
        padding-bottom: 32px;
        .div_img_h3_p {
          margin-bottom: 4px;
          font-weight: 700;
          font-size: 18px;
        }
        .div_img_h3_p2 {
          font-size: 14px;
          font-weight: 400;
          color: #74767e;
          margin-bottom: 5px;
        }
      }
      ul {
        list-style: none;
        .ul_div {
          display: flex;
          gap: 10px;
        }
        li {
          cursor: grab;
          border-color: #222325;
          background-color: #fff;
          line-height: 100%;
          font-size: 12px;
          position: relative;
          height: 160px;
          width: 31%;
          overflow: hidden;
          border: 1px solid #dadbdd;
          margin-bottom: 16px;
        }
      }
    }
  }
`;