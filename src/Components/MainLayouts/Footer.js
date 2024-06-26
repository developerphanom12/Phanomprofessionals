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

export default function Footer() {
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
            <li>Music & Audio</li>
            <li>Phanom Logo Maker</li>
            <li>Programming & Tech</li>
            <li>Data</li>
            <li>Business</li>
            <li>Lifestyle</li>
            <li>Photography</li>
            <li>End-to-End Projects</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div className="part1">
          <h6>About</h6>
          <ul>
            <li>Careers</li>
            <li>Press & News</li>
            <li>Partnerships</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Intellectual Property Claims</li>
            <li>Investor Relations</li>
          </ul>
        </div>
        <div className="part1">
          <h6>Support and Education</h6>
          <ul>
            <li>Help & Support</li>
            <li>Trust & Safety</li>
            <li>Selling on Phanom</li>
            <li>Buying on Phanom</li>
            <li>Phanom Guides</li>
            <li>
              Phanom Workspace <br />
              <a href="#"> Invoice Software</a>
            </li>
            <li>
              Learn
              <br />
              <a href="#"> Online Courses</a>
            </li>
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
            <li>Influencers</li>
            <li>Affiliates</li>
            <li>Podcast</li>
            <li>Invite a Friend</li>
            <li>Become a Seller</li>
            <li>Community Standards</li>
          </ul>
        </div>
        <div className="part1">
          <h6>Business Solutions</h6>
          <ul>
            <li>About Business Solutions</li>
            <li>Phanom Pro</li>
            <li>Phanom Certified</li>
            <li>Become an Agency</li>
            <li>Fiverr Enterprise</li>
            <li>
              ClearVoice <br />
              <a href="#"> Content Marketing</a>
            </li>

            <li>Working Not Working</li>
            <li>Contact Sales</li>
          </ul>
        </div>
      </div>
      <div className="footer_base">
        <div className="logoo">
          <h4>Phanom</h4> <p>Phanom International Ltd.2024</p>
        </div>
        <div className="social_media">
          <ul>
            <li>
              {" "}
              <FaInstagram /> <IoLogoLinkedin /> <FaFacebook /> <FaPinterest />{" "}
              <FaXTwitter />
            </li>
          </ul>
          <div className="foot">
            <button>
              <MdLanguage />
              English
            </button>
            <button>
              <MdOutlineCurrencyRupee />
              INR
            </button>
            <div className="human_icon">
              <IoMan />
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  padding: 30px 20px;
  font-family: Macan, Helvetica Neue, Helvetica, Arial, sans-serif;
  .footer_div {
    display: flex;
    justify-content: space-evenly;
    .part1 {
      display: flex;
      flex-direction: column;
      padding: 0px;
      @media (max-width: 567px) {
          padding: 0px 4px;
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
            font-size: 10px;
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
      padding: 0px;
    }
    .logoo {
      display: flex;
      @media (max-width: 576px) {
        width: 100%;
        justify-content: space-between;
      }
      h4 {
        font-weight: 600;
        color: #74767e;
        margin: 0px;
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
      @media (max-width: 576px) {
        width: 100%;
        justify-content: space-between;
        margin-top: 10px;
      }

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
        @media (max-width: 576px) {
          margin: 5px;
          width: 17px;
          height: 17px;
        }
      }
      .foot {
        display: flex;
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
          svg {
            width: 16px;
            height: 16px;
          }
        }
      }
    }
  }
`;
