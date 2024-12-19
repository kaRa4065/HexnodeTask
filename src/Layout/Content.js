import React from "react";
import Introduction from "../Slides/Introduction";
import WhyHexNode from "../Slides/WhyHexNode";
import Features from "../Slides/Features";
import Platforms from "../Slides/Platforms";
import Customers from "../Slides/Customers";

const Content = () => {
  return (
    <div className="w-full">
      {/* Assign unique ids to each section */}
      <div>
        <Introduction />
      </div>
      <div id="section1">
        <WhyHexNode />
      </div>
      <div id="section2">
        <Features />
      </div>
      <div id="section3">
        <Platforms />
      </div>
      <div id="section4">
        <Customers />
      </div>
    </div>
  );
};

export default Content;
