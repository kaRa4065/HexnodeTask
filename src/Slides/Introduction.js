import { Flex } from "antd";
import React from "react";
import CustomButton from "../Components/CustomButton";
import CustomInput from "../Components/CustomInput";
import intro from "../assets/The standard in Unified Endpoint Management _ Hexnode UEM_files/baner.png";
import tick from "../assets/The standard in Unified Endpoint Management _ Hexnode UEM_files/tick.svg";
import idc from "../assets/The standard in Unified Endpoint Management _ Hexnode UEM_files/idc.png";
import gartner from "../assets/The standard in Unified Endpoint Management _ Hexnode UEM_files/gartner.png";
import forrester from "../assets/The standard in Unified Endpoint Management _ Hexnode UEM_files/forrester.png";
import backBanner from "../assets/The standard in Unified Endpoint Management _ Hexnode UEM_files/banner.jpeg";

const Introduction = () => {

  const partners = [
    {
      logo: <img src={idc} className="h-6 mb-4" alt="idc logo" />,
      content:
        "Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024",
    },
    {
      logo: <img src={gartner} className="h-6 mb-4" alt="idc logo" />,
      content:
        "Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024",
    },
    {
      logo: <img src={forrester} className="h-6 mb-4" alt="idc logo" />,
      content:
        "Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024",
    },
  ];

  return ( 
    <>
    <Flex vertical className="w-full bg-custom-bg pt-24 px-5 sm:px-20">
      <div className="pt-10 text-[#ffffff] grid xl:grid-cols-2 w-full xl:justify-items-start justify-items-center grid-cols-1 w-full pb-14 md:max-w-[1300px] mx-auto">
        <Flex vertical justify="center" className="md:max-w-[540px] order-2 xl:order-1 items-center xl:items-start">
          <p className="text-[#b2b8d2] text-base mb-2.5">
            Unified Endpoint Management
          </p>
          <h1 className="text-[42px] font-bold leading-[50px] mb-2.5 xl:text-start text-center">
            Gain control and visibility over your endpoints
          </h1>
          <p className="mb-4 font-normal text-lg xl:text-start text-center">
            Hexnode's UEM solution allows you to simplify endpoint management
            and free up IT. Focus on the big picture while Hexnode works on the
            details.
          </p>
          <div className="flex max-w-[500px] justify-between">
            <div className="flex mr-4 grow max-w-[325px]">
              <CustomInput name="Email"  />
            </div>
            <div className="flex max-w-[325px]">
              <CustomButton
                name={"LETS TRY IT OUT!"}
                type="submit"
                className={"text-[17px] w-[210px]"}
              />
            </div>
          </div>
        </Flex>
        <Flex vertical className="relative order-1  xl:order-2">
          <div className="w-full h-full max-w-[610px] ">
            <img src={backBanner} alt="banner" />
            <img src={intro} alt="banner" className="absolute top-[0px] z-10" />
          </div>
          <div className="absolute hidden top-[80px] left-[35px] w-fit md:flex p-[5px_30px_5px_5px] w-fit bg-[#fcd598] text-[#020a19] text-xl font-normal justify-start items-center rounded-full">
            <img src={tick} alt="tick" className="w-[33px] h-[33px] mr-2.5 " />
            <span fill="#fcd598">Password policy applied</span>
          </div>
          <div className="absolute top-[200px] hidden left-[420px] text-nowrap w-[250px]  md:flex p-[5px_30px_5px_5px] w-fit bg-[#c3e1e7] text-[#020a19] text-xl font-normal justify-start items-center rounded-full">
            <img src={tick} alt="tick" className="w-[33px] h-[33px] mr-2.5 " />
            <span>TvOS Kiosk Active</span>
          </div>
          <div className="absolute z-20 hidden right-[200px] bottom-[50px] md:flex p-[5px_30px_5px_10px] w-fit bg-[#bcdcbe] text-[#020a19] text-xl font-normal justify-start items-center rounded-full">
            <img src={tick} alt="tick" className="w-[33px] h-[33px] mr-2.5 " />
            <span>Device Enrolled</span>
          </div>
        </Flex>
      </div>
    </Flex>
    <Flex className="w-full bg-[#1A1C2B] sm:px-20 px-5">
    <div className="text-sm text-[#ffffff] w-full flex-col md:flex-row  justify-between py-7 md:max-w-[1300px] flex mx-auto items-center">
      {partners.map((list, i) => (
        <div key={i} className="md:items-start items-center flex flex-col max-w-[340px] py-10 md:py-1">
          {list.logo}
          <p className="text-center md:text-start">{list.content}</p>
        </div>
      ))}
    </div>
  </Flex>
 </>
  );
};

export default Introduction;
