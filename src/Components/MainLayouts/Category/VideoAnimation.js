import React from "react";
import styled from "styled-components";

export default function VideoAnimation() {
  return (
    <Root>
      <div className="footer_div">
        <div className="part1">
          <h6>Editing & Post-Production</h6>
          <ul>
            <li>Video Editing</li>
            <li>Visual Effects</li>
            <li>Video ArtNEW</li>
            <li>Intro & Outro Videos</li>
            <li>Video Templates Editing</li>
            <li>Subtitles & Captions</li>
          </ul>
        </div>
        <div className="part1">
          <h6>Social & Marketing Videos</h6>
          <ul>
            <li>Video Ads & Commercials</li>
            <li>Social Media Videos</li>
            <li>UGC Videos </li>
            <li>Music Videos</li>
            <li>Slideshow Videos</li>
          </ul>
        </div>
        <div className="part1">
          <h6>Animation</h6>
          <ul>
            <li>Character Animation</li>
            <li>Animated GIFs</li>
            <li>Animation for Kids</li>
            <li>Animation for Streamers</li>
            <li>Rigging</li>
            <li>NFT Animation</li>
          </ul>
        </div>
        <div className="part1">
          <h6> Product Videos</h6>
          <ul>
            <li>3D Product Animation</li>
            <li>E-Commerce Product Videos</li>
            <li>Corporate Videos</li>
            <li>App & Website Previews</li>
          </ul>
        </div>

        <div className="part1">
          <h6>Motion Graphics</h6>
          <ul>
            <li>Logo Animation</li>
            <li>Lottie & Web Animation</li>
            <li>Text Animation</li>
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
