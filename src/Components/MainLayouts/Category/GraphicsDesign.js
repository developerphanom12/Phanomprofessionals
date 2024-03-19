import React from "react";
import styled from "styled-components";
import { IoMan } from "react-icons/io5";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaXTwitter,
} from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { MdLanguage, MdOutlineCurrencyRupee } from "react-icons/md";

export default function GraphicsDesign() {
  return (
    <Root>
      <div className="footer_div">
        <div className="part1">
          <h6>Logo & Brand Identity</h6>
          <ul>
            <li>Logo Design</li>
            <li>Brand Style Guides</li>
            <li>Business Cards & Stationery</li>
            <li>Font & Typography</li>
          </ul>
        </div>
        <div className="part1">
          <h6>Web & App Design</h6>
          <ul>
            <li>Website Design</li>
            <li>App Design</li>
            <li>UX Design</li>
            <li>Landing Page Design</li>
            <li>Icon Design</li>
          </ul>
        </div>
        <div className="part1">
          <h6>Visual Design</h6>
          <ul>
            <li>Image Editing</li>
            <li>Presentation Design</li>
            <li>Background Removal</li>
            <li>Infographic Design</li>
            <li>Vector Tracing</li>
            <li>Resume Design</li>
          </ul>
        </div>
        <div className="part1">
          <h6> Marketing Design</h6>
          <ul>
            <li>Social Media Design</li>
            <li>Social Posts & Banners</li>
            <li>Email Design</li>
            <li>Web Banners</li>
            <li>Signage Design</li>
          </ul>
        </div>
        <div className="part1">
          <h6>Packaging & Covers</h6>
          <ul>
            <li>Packaging & Label Design</li>
            <li>Book Design</li>
            <li>Book Covers</li>
            <li>Album Cover Design</li>
          </ul>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  padding: 30px 20px;
  font-family: Macan, Helvetica Neue, Helvetica, Arial, sans-serif;
  @media (max-width: 567px){
    padding: 30px 10px;
  }
  .footer_div {
    display: flex;
    justify-content: space-evenly;

    .part1 {
      display: flex;
      flex-direction: column;
      align-items: left;
      padding: 0px 10px;
      @media (max-width: 567px) {
        padding: 5px;
      }
      h6 {
        padding: 0px 0px 20px;
        color: #404145;
        margin: 0;
        font-weight: 700;
        @media (max-width: 567px) {
          font-size: 12px;
        }
      }
      ul {
        list-style: none;
        padding: 0;
        li {
          padding: 10px 0px;
          color: #74767e;
          font-size: 16px;
          @media (max-width: 567px) {
            font-size: 12px;
          }
        }
      }
    }
  }
  .footer_base {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid lightgray;
    padding: 20px 20px 0px;
    @media (max-width: 576px) {
      flex-direction: column;
    }
    .logoo {
      display: flex;
      h4 {
        font-weight: 600;
        color: #74767e;
      }
      p {
        display: flex;
        align-items: center;
        color: #74767e;
        margin: 0px 0px 0px 24px;
        font-size: 14px;
      }
    }
    .social_media {
      display: flex;
      color: #74767e;
      align-items: center;

      ul {
        list-style: none;
        padding-right: 20px;
        margin: 0;
        @media (max-width: 576px) {
          padding: 0px;
        }
      }
      svg {
        width: 20px;
        height: 20px;
        margin: 10px;
      }
      button {
        border: none;
        background-color: white;
        font-size: 15px;
        color: #74767e;
        font-weight: 600;
        svg {
          width: 16px;
          height: 16px;
          margin: 2px 2px 3px 2px;
        }
      }
      .human_icon {
        border: 1px solid #74767e;
        border-radius: 50px;
        margin-left: 10px;
      }
    }
  }
`;
