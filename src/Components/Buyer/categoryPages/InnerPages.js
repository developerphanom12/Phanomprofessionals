import React from "react";
import Page1 from "./Page1";
import GigsSlider from "./GigsSlider";
import Websitedev from "./Websitedev";
import Populargigs from "./Populargigs";
import BrowseHistory from "./BrowseHistory";


export default function InnerPages() {
  return (
    <div>
      <Page1 />
      <BrowseHistory />
      <GigsSlider />
      <Websitedev />
      <Populargigs />
    </div>
  );
}
