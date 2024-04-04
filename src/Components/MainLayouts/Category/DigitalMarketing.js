import React from "react";
import styled from "styled-components";

export default function DigitalMarketing() {
  return (
    <Root>
      <div className="footer_div">
        <div className="part1">
          <h6> Search</h6>
          <ul>
            <li>Search Engine Optimization (SEO)</li>
            <li>Search Engine Marketing (SEM)</li>
            <li>Local SEO</li>
            <li>E-Commerce SEO</li>
            <li>Video SEO</li>
          </ul>
        </div>
        <div className="part1">
          <h6>Social</h6>
          <ul>
            <li>Social Media Marketing</li>
            <li>Paid Social Media</li>
            <li>Influencer Marketing</li>
            <li>Community Management</li>
          </ul>
        </div>
        <div className="part1">
          <h6>Analytics & Strategy</h6>
          <ul>
            <li>Marketing Strategy</li>
            <li>Marketing AdviceNEW</li>
            <li>Web Analytics</li>
          </ul>
        </div>
        <div className="part1">
          <h6> Methods & Techniques</h6>
          <ul>
            <li>Video Marketing</li>
            <li>E-Commerce Marketing</li>
            <li>Email Marketing</li>
            <li>Guest Posting</li>
            <li>Affiliate Marketing</li>
            <li>Display Advertising</li>
            <li>Public Relations</li>
            <li>Text Message Marketing</li>
          </ul>
        </div>


      </div>
    </Root>
  );
}
const Root = styled.section`
   padding: 20px;
  font-family: Macan, Helvetica Neue, Helvetica, Arial, sans-serif;
  @media (max-width: 567px){
    padding: 20px 10px;
  }
  .footer_div {
    display: flex;
    justify-content: space-evenly;

    .part1 {
      display: flex;
      flex-direction: column;
      align-items: left;
      padding: 0px 7px;
      @media (max-width: 567px) {
        padding: 5px;
      }
      h6 {
        padding: 0px 0px 10px;
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
          padding: 6px 0px;
          color: #74767e;
          font-size: 13px;
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
