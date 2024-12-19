import { Flex } from "antd";
import React from "react";
import zeroTouch from "../assets/The standard in Unified Endpoint Management _ Hexnode UEM_files/zero-touch.jpeg";
import Automation from "../assets/The standard in Unified Endpoint Management _ Hexnode UEM_files/automation.jpeg";
import Remote from "../assets/The standard in Unified Endpoint Management _ Hexnode UEM_files/remote-access.jpeg";
import Endpoint from "../assets/The standard in Unified Endpoint Management _ Hexnode UEM_files/endpoint-security.jpeg";
import Integrations from "../assets/The standard in Unified Endpoint Management _ Hexnode UEM_files/integrations.jpeg";
import AppManagement from "../assets/The standard in Unified Endpoint Management _ Hexnode UEM_files/app-management.jpeg";

const Features = () => {
  const Features = [
    {
      icon: <img src={zeroTouch} alt="Zero-touch Enrollment" />,
      title: "Zero-touch Enrollment",
      content:
        "Onboard endpoints and users with minimal user intervention. Provision devices and set up configurations well before the user gets their hands on.",
    },
    {
      icon: <img src={Automation} alt="Zero-touch Enrollment" />,
      title: "Automation",
      content:
        "Automate endpoint compliance with dynamic grouping and breeze through day-to-day IT tasks with scripting capabilities. Hexnode also allows the creation of automated reports.",
    },
    {
      icon: <img src={Remote} alt="Zero-touch Enrollment" />,
      title: "Remote Access Management",
      content:
        "Hexnode UEM enables the enterprise to manage every single device in the corporate ecosystem for optimal and secure operation.",
    },
    {
      icon: <img src={Endpoint} alt="Zero-touch Enrollment" />,
      title: "Endpoint Security and Compliance",
      content:
        "Hexnode helps you maintain compliance with international regulatory bodies and set up custom rules for compliance within your business for security purposes.",
    },
    {
      icon: <img src={Integrations} alt="Zero-touch Enrollment" />,
      title: "Integrations",
      content:
        "Hexnode's various integrations make it easy to fit into your current endpoint ecosystem. These integrations include Azure AD, Okta, Android Enterprise, Apple School and Business manager, and many more enterprise and technology integrations.",
    },
    {
      icon: <img src={AppManagement} alt="Zero-touch Enrollment" />,
      title: "App Management",
      content:
        "Set up a bespoke app store, enable mandatory apps, and ensure endpoints come equipped with all the required applications, custom enterprise apps included.",
    },
  ];
  return (
    <div className="w-full px-5 sm:px-20" >
      <Flex vertical align="center" className="py-20 md:max-w-[1300px] mx-auto">
        <h3 className="text-[40px] text-[#020a19] font-bold text-center pb-[60px]">
          Powerful endpoint management, built for <br />
          the devices you choose
        </h3>
        <div className="grid md:grid-cols-3  sm:grid-cols-2 grid-cols-1 relative gap-20 ">
          {Features.map((list,index) => (
            <div key={index} className="flex flex-col rounded-[16px] bg-[#ffffff] md:max-w-[380px] max-w-[340px] items-center lg:items-start">
              <div className="  bg-[#F6F9FF] rounded-md">
                {list.icon}
              </div>
              <h5 className="ml-2.5 text-[32px] text-[#020a19] font-bold  pb-5 pt-10 text-center  sm:text-center lg:text-start">
                {list.title}
              </h5>
              <p className="text-lg leading-7 font-medium text-[#333333] mt-[15px] text-center mb-[15px] lg:text-start  sm:text-center">
                {list.content}
              </p>
            </div>
          ))}
        </div>
      </Flex>
    </div>
  );
};

export default Features;
