import React from "react";
import Page1 from "./Page1";
import SimpleSlider from "./BrowseHistory";
import GigsSlider from "./GigsSlider";
import Websitedev from "./Websitedev";
import Populargigs from "./Populargigs";


export default function InnerPages() {
  return (
    <div>
      <Page1 />
      <SimpleSlider />
      <GigsSlider />
      <Websitedev />
      <Populargigs />
    </div>
  );
}
