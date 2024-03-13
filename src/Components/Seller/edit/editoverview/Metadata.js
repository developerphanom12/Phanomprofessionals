import React, { useState } from "react";
import styled from "styled-components";

export default function Metadata({ value }) {
  const [active, setActive] = useState("page1");
  const [selectedProgrammingLanguages, setSelectedProgrammingLanguages] =
    useState([]);
  const [selectedWebsiteFeatures, setSelectedWebsiteFeatures] = useState([]);

  // Inside handleFeatureCheckboxChange function
  const handleFeatureCheckboxChange = (feature) => {
    if (selectedWebsiteFeatures.includes(feature)) {
      setSelectedWebsiteFeatures(
        selectedWebsiteFeatures.filter((item) => item !== feature)
      );
    } else {
      setSelectedWebsiteFeatures([...selectedWebsiteFeatures, feature]);
    }
  };

  // Inside handleLanguageCheckboxChange function
  const handleLanguageCheckboxChange = (language) => {
    if (selectedProgrammingLanguages.includes(language)) {
      setSelectedProgrammingLanguages(
        selectedProgrammingLanguages.filter((item) => item !== language)
      );
    } else {
      setSelectedProgrammingLanguages([
        ...selectedProgrammingLanguages,
        language,
      ]);
    }
  };
  return (
    <Root>
      <div className="main_metadata">
        <div className="button_tab_area">
          <button
            className={active === "page1" ? "btn_1 active" : "btn_1"}
            onClick={() => {
              setActive("page1");
            }}
          >
            PROGRAMMING LANGUAGE*
          </button>
        </div>
        <div className="button_tab_area">
          <button
            className={active === "pagess" ? "btn_1 active" : "btn_1"}
            onClick={() => {
              setActive("pagess");
            }}
          >
            WEBSITE FEATURE
          </button>
        </div>
        {/* <div className="button_tab_area">
          <button
            className={active === "page2" ? "btn_1 active" : "btn_1"}
            onClick={() => {
              setActive("page2");
            }}
          >
            EXPERTISE
          </button>
        </div>
        <div className="button_tab_area">
          <button
            className={active === "page3" ? "btn_1 active" : "btn_1"}
            onClick={() => {
              setActive("page3");
            }}
          >
            FRONTEND FRAMEWORK
          </button>
        </div>
        <div className="button_tab_area">
          <button
            className={active === "page4" ? "btn_1 active" : "btn_1"}
            onClick={() => {
              setActive("page4");
            }}
          >
            BACKEND FRAMEWORK
          </button>
        </div> */}
      </div>
      <div className="all_pages">
        {active === "page1" ? (
          <div className="button_pages">
            <h6>Select the language you provide services for*</h6>
            <div className="select_tabs">
              <ul>
                {/* {Array.isArray(value.programing_language) &&
                  value.programing_language.map((language, index) => (
                    <li key={index}>
                      <label>
                        <input
                          type="checkbox"
                          value={language}
                          checked={selectedProgrammingLanguages.includes(
                            language
                          )}
                          onChange={() =>
                            handleLanguageCheckboxChange(language)
                          }
                        />
                        {language}
                      </label>
                     
                    </li>
                  ))} */}

                {Array.isArray(value.programing_language) &&
                  value.programing_language.map((language, index) => (
                    <li key={index}>
                      <label>
                        <input
                          type="checkbox"
                          value={language}
                          checked={selectedProgrammingLanguages.includes(
                            language
                          )}
                          onChange={() =>
                            handleLanguageCheckboxChange(language)
                          }
                        />
                        {language}
                      </label>
                    </li>
                  ))}
                {/* Manually added options */}
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="NewLanguage1"
                      checked={selectedProgrammingLanguages.includes(
                        "NewLanguage1"
                      )}
                      onChange={() =>
                        handleLanguageCheckboxChange("NewLanguage1")
                      }
                    />
                    New Language 1
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="NewLanguage2"
                      checked={selectedProgrammingLanguages.includes(
                        "NewLanguage2"
                      )}
                      onChange={() =>
                        handleLanguageCheckboxChange("NewLanguage2")
                      }
                    />
                    New Language 2
                  </label>
                </li>
              </ul>
            </div>
          </div>
        ) : active === "pagess" ? (
          <div className="button_pages">
            <h6>Select Features</h6>
            <div className="select_tabs">
              {/* <ul>
               
                {Array.isArray(value.website_feature) &&
                  value.website_feature.map((feature, index) => (
                    <li key={index}>
                      <label>
                        <input
                          type="checkbox"
                          value={feature}
                          checked={selectedWebsiteFeatures.includes(feature)}
                          onChange={() => handleFeatureCheckboxChange(feature)}
                        />
                        {feature}
                      </label>
                    </li>
                  ))}
               
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="NewFeature1"
                      checked={selectedWebsiteFeatures.includes("NewFeature1")}
                      onChange={() =>
                        handleFeatureCheckboxChange("NewFeature1")
                      }
                    />
                    New Feature 1
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="NewFeature2"
                      checked={selectedWebsiteFeatures.includes("NewFeature2")}
                      onChange={() =>
                        handleFeatureCheckboxChange("NewFeature2")
                      }
                    />
                    New Feature 2
                  </label>
                </li>
              </ul> */}



<ul>
      <li>
        <label>
          <input
            type="checkbox"
            value="Feature 1"
            checked={selectedWebsiteFeatures.includes("Feature 1")}
            onChange={() => handleFeatureCheckboxChange("Feature 1")}
          />
          Feature 1
        </label>
      </li>
      <li>
        <label>
          <input
            type="checkbox"
            value="Feature 2"
            checked={selectedWebsiteFeatures.includes("Feature 2")}
            onChange={() => handleFeatureCheckboxChange("Feature 2")}
          />
          Feature 2
        </label>
      </li>
      {/* Add more checkboxes for other features */}
    </ul>
            </div>
          </div>
        ) : (
          // ) : active === "page2" ? (
          //   <div className="button_pages">
          //     <h6>Select up to five areas you are an expert in</h6>
          //     <div className="select_tabs">
          //       <ul>
          //         <li>
          //           <label>
          //             {" "}
          //             <input type="checkbox" />
          //             Algorithms & Data structures
          //           </label>
          //           <label>
          //             {" "}
          //             <input type="checkbox" />
          //             Debugging
          //           </label>
          //           <label>
          //             {" "}
          //             <input type="checkbox" />
          //             Localization
          //           </label>
          //           <label>
          //             {" "}
          //             <input type="checkbox" />
          //             Performance
          //           </label>
          //           <label>
          //             {" "}
          //             <input type="checkbox" />
          //             Security
          //           </label>
          //           <label>
          //             {" "}
          //             <input type="checkbox" />
          //             Operating systems
          //           </label>
          //           <label>
          //             {" "}
          //             <input type="checkbox" />
          //             Design
          //           </label>
          //           <label>
          //             {" "}
          //             <input type="checkbox" />
          //             Databases
          //           </label>
          //           <label>
          //             {" "}
          //             <input type="checkbox" />
          //             Source control
          //           </label>
          //           <label>
          //             {" "}
          //             <input type="checkbox" />
          //             Testing procedures
          //           </label>
          //         </li>
          //       </ul>
          //     </div>
          //   </div>
          // ) : active === "page3" ? (
          //   <div className="button_pages">
          //     <h6>Select up to five frontend frameworks you are an expert in</h6>
          //     <div className="select_tabs">
          //       <ul>
          //         <li>
          //           <label>
          //             {" "}
          //             <input type="checkbox" />
          //             React.js
          //           </label>
          //           <label>
          //             {" "}
          //             <input type="checkbox" />
          //             AngularJS
          //           </label>
          //           <label>
          //             {" "}
          //             <input type="checkbox" />
          //             Vue.js
          //           </label>
          //           <label>
          //             {" "}
          //             <input type="checkbox" />
          //             jQuery
          //           </label>
          //           <label>
          //             {" "}
          //             <input type="checkbox" />
          //             Bootstrap
          //           </label>
          //           <label>
          //             {" "}
          //             <input type="checkbox" />
          //             Ember.js
          //           </label>
          //           <label>
          //             {" "}
          //             <input type="checkbox" />
          //             Backbone.js
          //           </label>
          //           <label>
          //             {" "}
          //             <input type="checkbox" />
          //             Semantic-UI
          //           </label>
          //           <label>
          //             {" "}
          //             <input type="checkbox" />
          //             Foundation
          //           </label>
          //           <label>
          //             {" "}
          //             <input type="checkbox" />
          //             Svelte
          //           </label>
          //           <label>
          //             {" "}
          //             <input type="checkbox" />
          //             Preact
          //           </label>
          //           <label>
          //             {" "}
          //             <input type="checkbox" />
          //             Tailwind CSS
          //           </label>
          //         </li>
          //       </ul>
          //     </div>
          //   </div>
          // ) : active === "page4" ? (
          //   <div className="button_pages">
          //     <h6>Select up to five backend frameworks you are an expert in</h6>
          //     <div className="select_tabs">
          //       <ul>
          //         <li>
          //           <label>
          //             {" "}
          //             <input type="checkbox" />
          //             Django
          //           </label>
          //           <label>
          //             {" "}
          //             <input type="checkbox" />
          //             Laravel
          //           </label>
          //           <label>
          //             {" "}
          //             <input type="checkbox" />
          //             Spring
          //           </label>
          //           <label>
          //             {" "}
          //             <input type="checkbox" />
          //             Express.js
          //           </label>
          //           <label>
          //             {" "}
          //             <input type="checkbox" />
          //             Node.js
          //           </label>
          //           <label>
          //             {" "}
          //             <input type="checkbox" />
          //             CakePHP
          //           </label>
          //           <label>
          //             {" "}
          //             <input type="checkbox" />
          //             Flask
          //           </label>
          //           <label>
          //             {" "}
          //             <input type="checkbox" />
          //             Koa
          //           </label>
          //           <label>
          //             {" "}
          //             <input type="checkbox" />
          //             Meteor.js
          //           </label>
          //         </li>
          //       </ul>
          //     </div>
          //   </div>
          <div className="button_pages">
            <h6>Select the language you provide services for*</h6>
            <div className="select_tabs">
              <ul>
                <li>
                  <label>
                    {" "}
                    <input type="checkbox" />
                    ASP.NET
                  </label>
                  <label>
                    {" "}
                    <input type="checkbox" />
                    JavaScript
                  </label>
                  <label>
                    {" "}
                    <input type="checkbox" />
                    PHP
                  </label>
                  <label>
                    {" "}
                    <input type="checkbox" />
                    Ruby/RoR
                  </label>
                  <label>
                    {" "}
                    <input type="checkbox" />
                    Flash
                  </label>
                  <label>
                    {" "}
                    <input type="checkbox" />
                    TypeScript
                  </label>
                  <label>
                    {" "}
                    <input type="checkbox" />
                    Go
                  </label>
                  <label>
                    {" "}
                    <input type="checkbox" />
                    C&C++
                  </label>
                  <label>
                    {" "}
                    <input type="checkbox" />
                    Lua
                  </label>
                  <label>
                    {" "}
                    <input type="checkbox" />
                    MATLAB
                  </label>
                  <label>
                    {" "}
                    <input type="checkbox" />
                    Rust
                  </label>
                  <label>
                    {" "}
                    <input type="checkbox" />
                    AutoHotkey
                  </label>
                </li>
                <li>
                  <label>
                    {" "}
                    <input type="checkbox" />
                    HTML & CSS
                  </label>
                  <label>
                    {" "}
                    <input type="checkbox" />
                    Perl
                  </label>
                  <label>
                    {" "}
                    <input type="checkbox" />
                    Python
                  </label>
                  <label>
                    {" "}
                    <input type="checkbox" />
                    Scala
                  </label>
                  <label>
                    {" "}
                    <input type="checkbox" />
                    Java
                  </label>
                  <label>
                    {" "}
                    <input type="checkbox" />
                    C#
                  </label>
                  <label>
                    {" "}
                    <input type="checkbox" />
                    Kotlin
                  </label>
                  <label>
                    {" "}
                    <input type="checkbox" />
                    VB
                  </label>
                  <label>
                    {" "}
                    <input type="checkbox" />
                    Delphi
                  </label>
                  <label>
                    {" "}
                    <input type="checkbox" />
                    Assembly
                  </label>
                  <label>
                    {" "}
                    <input type="checkbox" />
                    Pine Script
                  </label>
                  <label>
                    {" "}
                    <input type="checkbox" />
                    Haskell
                  </label>
                </li>
              </ul>
            </div>
          </div>
        )}
        <div className="button_page">
          <div className="select_tabs">
            <ul>
              <li>
                <label>
                  <input type="checkbox" />
                  Other
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  /* border: 1px solid #74767e; */
  .main_metadata {
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
    color: #74767e;
    border: 1px solid #b5b6ba;
    .button_tab_area {
      background: #f7f7f7;
      .btn_1 {
        border: 1px solid #f5f5f5;
        background-color: #f7f7f7;
        width: 100%;
        text-align: left;
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        padding: 16px 12px;
        cursor: pointer;
        display: flex;
        flex: 1;
        color: #74767e;
      }
      .active {
        width: 102%;
        border-right: 1px solid #fff;
        background-color: #fff;
        border-top: 1px solid #c5c6c9;
        border-bottom: 1px solid #c5c6c9;
        :nth-child(1) {
          border-top: 1px solid #fff;
        }
      }
    }
  }

  .all_pages {
    display: flex;
    flex-direction: column;
    border: 1px solid #b5b6ba;
    border-left: 1px solid #fff;
    .button_page {
      border-top: 1px solid #dbdbdb;
    }
    .button_pages,
    .button_page {
      display: flex;
      flex-direction: column;
      padding: 12px 24px 24px;
      h6 {
        font-size: 14px;
        color: #74767e;
        line-height: 140%;
        font-weight: 700;
      }
      .select_tabs {
        display: flex;
        flex-direction: column;
        ul {
          display: flex;
          li {
            flex: 1;
            display: flex;
            flex-direction: column;
            label {
              padding: 10px;
              font-size: 13px;
              input {
                width: 20px;
                height: 20px;
                margin-right: 5px;
                border-radius: 20px;
                border: 1px solid #dbdbdb;
                &:hover {
                  border: 1px solid #202020;
                  cursor: pointer;
                }
                &::after {
                  border: 6px solid #fff;
                  color: #000;
                }
              }
            }
          }
        }
      }
    }
  }
`;
