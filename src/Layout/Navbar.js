import { Flex } from "antd";
import React, { useEffect, useState } from "react";
import logo from "../assets/The standard in Unified Endpoint Management _ Hexnode UEM_files/hexnode.svg";
import CustomButton from "../Components/CustomButton";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navbarItems = [
    {
      name: "Why Hexnode",
    },
    {
      name: "Features",
    },
    {
      name: "Platforms",
    },
    {
      name: "Customers",
    },
  ];
  const scrollToSection = (id) => {
    console.log(id);
    const element = document.getElementById(id);
    console.log(document.getElementById(id));
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`${
        isScrolled ? "bg-[#ffffff]" : "bg-custom-bg"
      } w-full fixed top-0 z-30 px-5 sm:px-20`}
    >
      <Flex
        className="text-[#ffffff] py-4  w-full md:max-w-[1300px] mx-auto"
        align={"center"}
        justify="space-between"
      >
        <Flex align={"center"} gap={"large"}>
          <img
            src={logo}
            alt="Hexnode logo"
            className="w-32 h-6"
            style={{ filter: isScrolled ? "" : "invert(100%)" }}
          />
          {navbarItems?.map((navitems, i) => (
            <a
              key={i}
              className={`${
                isScrolled ? "customDesign" : ""
              } text-[15px] leading-6 font-semibold mt-2 hidden xl:block`}
              onClick={(e) => {
                e.preventDefault(); // Prevent the default anchor link behavior
                scrollToSection(`section${i + 1}`); // Manually scroll to the section
              }}
            >
              {navitems?.name}
            </a>
          ))}
        </Flex>
        <CustomButton
          name={"14 DAY FREE TRIAL"}
          type="button"
          className={" py-2.5 px-[26px] text-nowrap xl:block hidden"}
        />
        {isMenuOpen ? (
          <CloseOutlined
            className={`block xl:hidden ${
              isScrolled ? "text-custom-bg" : "text-[#ffffff]"
            }`}
            onClick={handleClick}
          />
        ) : (
          <MenuOutlined
            className={`block xl:hidden ${
              isScrolled ? "text-custom-bg" : "text-[#ffffff]"
            }`}
            style={{ fontSize: "24px", width: "24px", height: "18px" }}
            onClick={handleClick}
          />
        )}
        {isMenuOpen && (
          <div className="fixed top-0 right-0 md:w-1/2 w-full h-full bg-white shadow-lg z-20 scroll-smooth overflow-y-auto">
            <div className="flex justify-end border-b p-5">
              <CloseOutlined
                className={`block xl:hidden text-custom-bg`}
                style={{ fontSize: "24px", width: "24px", height: "18px" }}
                onClick={handleClick}
              />
            </div>
            <div className="flex flex-col p-6 text-black">
              {navbarItems.map((navitem, i) => (
                <a
                  key={i}
                  href={`#section${i + 1}`}
                  className="font-semibold py-5 hover:text-blue-500 border-b text-[15px] leading-[24px]"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent the default anchor link behavior
                    scrollToSection(`section${i + 1}`); // Manually scroll to the section
                    setIsMenuOpen(false);
                  }} // Close menu on click
                >
                  {navitem.name}
                </a>
              ))}
              <CustomButton
                name={"14 DAY FREE TRIAL"}
                type="button"
                className={" py-2.5 px-[26px] text-nowrap mt-6"}
              />
              <p className="text-center text-base text-[#020a19] py-8 font-semibold">Login</p>
            </div>
          </div>
        )}
      </Flex>
    </div>
  );
};
export default Navbar;
