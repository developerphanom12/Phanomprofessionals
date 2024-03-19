import React from "react";
import styled from "styled-components";

export default function WritingTranslation() {
  return (
    <Root>
      <div className="footer_div">
        <div className="part1">
          <h6>Content Writing</h6>
          <ul>
            <li>Articles & Blog Posts</li>
            <li>Content Strategy</li>
            <li>Website Content</li>
            <li>Creative Writing</li>
            <li>Podcast Writing</li>
            <li>Speechwriting</li>
            <li>Research & Summaries</li>
          </ul>
        </div>
        <div className="part1">
          <h6>Business & Marketing Copy</h6>
          <ul>
            <li>Brand Voice & Tone</li>
            <li>Business Names & Slogans</li>
            <li>Case Studies</li>
            <li>White Papers</li>
            <li>Ad Copy</li>
            <li>Sales Copy</li>
            <li>Email Copy</li>
            <li>Social Media Copy</li>
            <li>Press Releases</li>
            </ul>


        </div>
        <div className="part1">
          <h6>Editing & Critique</h6>
          <ul>
            <li>Proofreading & Editing</li>
            <li>AI Content Editing</li>
            <li>Writing Advice</li>
          </ul>




        </div>
        <div className="part1">
          <h6>Career Writing</h6>
          <ul>
            <li>Resume Writing</li>
            <li>LinkedIn Profiles</li>
            <li>Job Descriptions</li>
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
