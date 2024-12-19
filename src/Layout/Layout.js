import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};

export default Layout;
