import { Flex } from "antd";
import React from "react";
import CustomButton from "../Components/CustomButton";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Flex vertical className="w-full bg-custom-bg">
      <Flex
        align="center"
        vertical
        className=" pt-12 md:max-w-[1300px] mx-auto pb-16 "
      >
        <h3 className="text-[42px] font-bold leading-[50px] mb-2.5 text-[#ffffff] text-center mb-5">
          Get Hexnode UEM and start securing your <br />
          endpoints
        </h3>
        <CustomButton
          name={"TRY HEXNODE FOR FREE"}
          type={"button"}
          className={"py-[15px] w-[302px] text-[17px] "}
        />
      </Flex>
      <Flex className="w-full bg-[#f2f2f2]">
        <Flex
          className="py-5  w-full md:max-w-[1300px] mx-auto lg:flex-row flex-col"
          align="center"
          justify="space-between"
        >
          <div>
            <Link to={"/terms"} className="links ">
              Terms of use
            </Link>
            -
            <Link to={"/privacy"} className="links">
              Privacy
            </Link>
            -
            <Link to={"/cookie"} className="links">
              Cookies
            </Link>
          </div>
          <p className="links">
            Copyright © 2024 Mitsogo Inc. All Rights Reserved.
          </p>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
