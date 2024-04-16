import React from "react";
import styled from "styled-components";

export default function BussinessManagement() {
  return (
    <Root>
      <div className="footer_div">
        <div className="part1">
          <h6>General & Administrative</h6>
          <ul>
            <li>Virtual Assistant</li>
            <li>Project Management</li>
            <li>HR Consulting</li>
            <li>Online InvestigationsNEW</li>
            <li>Supply Chain Management</li>
          </ul>
        </div>
        <div className="part1">
          <h6>Business Management</h6>
          <ul>
            <li>Business Registration</li>
            <li>Business Plans</li>
            <li>Business Consulting</li>
            <li>Market Research</li>
            <li>Presentations</li>
            <li>Sustainability ConsultingNEW</li>
            </ul>


        </div>
        <div className="part1">
          <h6>Accounting & Finance</h6>
          <ul>
            <li>Accounting & Bookkeeping</li>
            <li>Tax Consulting</li>
            <li>File Your Taxes</li>
            <li>Financial Forecasting & Modeling</li>
            <li>Financial Consulting</li>
          </ul>
        </div>

        <div className="part1">
          <h6>Sales & Customer Care</h6>
          <ul>
            <li>Sales</li>
            <li>Lead Generation</li>
            <li>Call Center & Calling</li>
            <li>Customer Care</li>
          </ul>
        </div>

        <div className="part1">
          <h6>E-Commerce Management</h6>
          <ul>
            <li>Product Research</li>
            <li>Store Management</li>
            <li>Amazon Experts</li>
            <li>Shopify Experts</li>
            <li>Etsy Experts</li>
          </ul>
        </div>

        <div className="part1">
          <h6>Software Management</h6>
          <ul>
            <li>CRM Management</li>
            <li>ERP Management</li>
          </ul>
        </div>

        <div className="part1">
          <h6>Legal Services</h6>
          <ul>
            <li>Applications & Registrations</li>
            <li>Legal Documents & Contracts</li>
            <li>Legal ReviewNEW</li>
            <li>Legal Consulting</li>
          </ul>
        </div>
        
        <div className="part1">
          <h6>Professional Development</h6>
          <ul>
            <li>Career Counseling</li>
            <li>Life Coaching</li>
          </ul>
        </div>

        <div className="part1">
          <h6>AI for Businesses</h6>
          <ul>
            <li>AI StrategyNEW</li>
            <li>AI LessonsNEW</li>
          </ul>
        </div>


      </div>
    </Root>
  );
}

const Root = styled.section`
  padding: 20px;
  font-family: Macan, Helvetica Neue, Helvetica, Arial, sans-serif;

  @media (max-width: 567px) {
    padding: 20px 10px;
  }
  .footer_div {
    display: flex;
    flex-wrap: wrap;
    .part1 {
      display: flex;
      flex-direction: column;
      padding: 0px 7px;
      width: 14%;
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
          padding: 5px 0px;
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
