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
          <h6>Categories</h6>
          <ul>
            <li>Graphics & Design</li>
            <li>Digital Marketing</li>
            <li>Writing & Translation</li>
            <li>Video & Animation</li>
            
          </ul>
        </div>
        <div className="part1">
          <h6>About</h6>
          <ul>
            <li>Careers</li>
            <li>Press & News</li>
            <li>Partnerships</li>
            <li>Privacy Policy</li>
            
          </ul>
        </div>
        <div className="part1">
          <h6>Support and Education</h6>
          <ul>
            <li>Help & Support</li>
            <li>Trust & Safety</li>
            <li>Selling on Fiverr</li>
            <li>Buying on Fiverr</li>

          </ul>
        </div>
        <div className="part1">
          <h6>Community</h6>
          <ul>
            <li> Customer Success Stories</li>
            <li>Community Hub</li>
            <li>Forum</li>
            <li>Events</li>
            <li>Blog</li>
          
          </ul>
        </div>
        <div className="part1">
          <h6>Business Solutions</h6>
          <ul>
            <li>About Business Solutions</li>
            <li>Fiverr Pro</li>
            <li>Fiverr Certified</li>
            <li>Become an Agency</li>
            
          </ul>
        </div>
      </div>
 
    </Root>
  );
}
const Root = styled.section`
  padding: 30px 20px;
  font-family: Macan, Helvetica Neue, Helvetica, Arial, sans-serif;
  @media (max-width: 567px) {
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