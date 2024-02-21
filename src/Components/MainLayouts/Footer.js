import React from "react";
import styled from "styled-components";
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
            <li>Fiverr Logo Maker</li>
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
            <li>Selling on Fiverr</li>
            <li>Buying on Fiverr</li>
            <li>Fiverr Guides</li>
            <li>
              Fiverr Workspace <br />
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
            <li>Fiverr Pro</li>
            <li>Fiverr Certified</li>
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
          <FaInstagram /> <IoLogoLinkedin /> <FaFacebook /> <FaPinterest />{" "}
          <FaXTwitter />
        </div>
        <div>
          <button>
            <MdLanguage />
            English
          </button>
          <button>
          <MdOutlineCurrencyRupee />
            INR
          </button>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  padding: 40px 20px;
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
    justify-content: space-evenly;
    border-top: 1px solid lightgray;
    padding: 20px 0px;
    .logoo {
      display: flex;
      h4 {
        font-weight: 600;
        color: #74767e;
      }
      p {
        padding: 0px 10px;
        display: flex;
        align-items: center;
        color: #74767e;
        margin: 0;
      }
    }
    .social_media {
      display: flex;
      color: #74767e;
    }
  }
`;
