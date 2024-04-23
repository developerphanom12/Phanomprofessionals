import React from "react";
import GigsSlider from "./GigsSlider";
import Websitedev from "./Websitedev";
import Populargigs from "./Populargigs";
import BrowseHistory from "./BrowseHistory";
import Page from "./Page";


export default function InnerPages() {
  return (
    <div>
      <Page />
      <BrowseHistory />
      <GigsSlider />
      <Websitedev />
      <Populargigs />
    </div>
  );
}
