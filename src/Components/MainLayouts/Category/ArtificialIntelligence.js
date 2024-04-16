import React from "react";
import styled from "styled-components";

export default function ArtificialIntelligence(){
  return (
    <Root>
      <div className="footer_div">
        
        <div className="part1">
          <h6>AI Development</h6>
          <ul>
            <li>AI Applications</li>
            <li>AI Integrations</li>
            <li>AI Chatbot</li>
            <li>AI Agents</li>
            <li>AI Fine-Tuning</li>
            <li>Custom GPT AppsNE</li>
          </ul>
        </div>

        <div className="part1">
          <h6>AI Artists</h6>
          <ul>
            <li>Midjourney Artists</li>
            <li>DALL-E Artists</li>
            <li>Stable Diffusion Artists</li>
            <li>All AI Art Services</li>
            </ul>


        </div>

        <div className="part1">
          <h6>AI Video</h6>
          <ul>
            <li>AI Music Videos</li>
            <li>AI Video Art</li>
            <li>AI Spokespersons Videos</li>
          </ul>
        </div>

        <div className="part1">
          <h6>Data</h6>
          <ul>
            <li>Data Science & ML</li>
            <li>Data Analytics</li>
            <li>Data Visualization</li>
          </ul>
        </div>

        <div className="part1">
          <h6>AI for Businesses</h6>
          <ul>
            <li>AI Consulting</li>
            <li>AI StrategyNEW</li>
            <li>AI LessonsNEW</li>
          </ul>
        </div>

        <div className="part1">
          <h6>AI Audio</h6>
          <ul>
            <li>Voice Synthesis & AI</li>
            <li>Text to Speech</li>
          </ul>
        </div>

        <div className="part1">
          <h6>AI Content</h6>
          <ul>
            <li>AI Content Editing</li>
            <li>Custom Writing PromptsNEW</li>
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
