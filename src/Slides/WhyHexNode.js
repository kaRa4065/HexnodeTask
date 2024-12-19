import { SafetyCertificateTwoTone } from "@ant-design/icons";
import { Flex } from "antd";
import React from "react";
import logo from "../assets/The standard in Unified Endpoint Management _ Hexnode UEM_files/hexnode-app-icon.svg";

const WhyHexNode = () => {
  const whyContent = [
    {
      icon: <SafetyCertificateTwoTone className="text-2xl" />,
      title: "Adapt to the new normal",
      content:
        "Hybrid, remote or onsite, you can trust Hexnode UEM to deliver. Create policies that cater to your organization’s protocols. Whether it be BYOD, COPE, or platform limited, Hexnode can manage it all.",
    },
    {
      icon: <SafetyCertificateTwoTone className="text-2xl" />,
      title: "Zero compromise security",
      content:
        "Enable full-fledged device encryption, data loss prevention, and all-rounded device security with Hexnode UEM. Be at the bleeding edge of device security without any compromises.",
    },
    {
      icon: <SafetyCertificateTwoTone className="text-2xl" />,
      title: "Get more done with automation",
      content:
        "Hexnode UEM automation features help free up IT’s time spent on mundane and repetitive tasks. Do hours’ worth of work in a few minutes.",
    },
    {
      icon: <SafetyCertificateTwoTone className="text-2xl" />,
      title: "Unified Policy Management",
      content:
        "Create a single policy through Hexnode and apply it on all the devices in your organization. Any platform or form factor, achive single pane of glass management with Hexnode.",
    },
  ];
  return (
    <div className="w-full bg-[#F7F7F7] px-5 sm:px-20">
      <Flex
        vertical
        align="center"
        className=" pt-20  md:max-w-[1300px] mx-auto"
      >
        <h3 className="text-[40px] text-[#020a19] font-bold mb-10">
          Why Hexnode
        </h3>
        <div className="md:flex md:flex-wrap md:justify-center md:items-start md:justify-between relative grid grid-cols-1 ">
          {whyContent.map((list, index) => (
            <div
              key={index}
              className="flex md:max-w-[48%] xl:max-w-[480px] h-[343px] "
            >
              <div
                className="p-8 border border-[#D7D7D7] rounded-[16px] bg-[#ffffff]
               z-10 group h-fit  transition ease-in-out delay-150 duration-700 hover:-translate-y-2"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 flex justify-center items-center bg-[#F6F9FF] rounded-md ">
                    {list.icon}
                  </div>
                  <h5 className="ml-2.5 text-2xl text-[#020a19] font-bold">
                    {list.title}
                  </h5>
                </div>
                <p className="text-lg leading-7 font-medium text-[#333333] mt-[15px] mb-[15px]">
                  {list.content}
                </p>
                <div className="overflow-hidden max-h-0 group-hover:max-h-[400px] transition-all duration-1000 ease-out">
                  <button className="text-[#dd0735]  text-xl pt-3 font-semibold  text-left hidden group-hover:block ">
                    Try Hexnode on your endpoints
                  </button>
                </div>
              </div>
            </div>
          ))}
          <img
            src={logo}
            alt="logo"
            className="absolute top-[270px] left-[585px] xl:block hidden"
          />
          <div className="absolute left-[440px] top-[135px] xl:block hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="177"
              height="134.928"
              viewBox="0 0 177.49 134.928"
              style={{
                position: "relative",
                width: "177px",
                height: "134.928px",
              }}
            >
              <path
                id="path"
                d="M-18870.2-4879.633v-95.043c0-26.781-22.783-38.885-35.471-38.885h-141.02"
                transform="translate(19047.193 5014.062)"
                fill="none"
                stroke="#020a19"
                strokeLinecap="round"
                strokeWidth="1"
                strokeDasharray="7"
              />
            </svg>
          </div>
          <div className="absolute right-[440px] top-[135px] xl:block hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="177"
              height="134.928"
              viewBox="0 0 177.49 134.928"
              style={{
                position: "relative",
                width: "177px",
                height: "134.928px",
              }}
            >
              <path
                id="path"
                d="M-19046.7-4879.633v-95.043c0-26.781,22.783-38.885,35.471-38.885h141.02"
                transform="translate(19047.195 5014.062)"
                fill="none"
                stroke="#020a19"
                strokeLinecap="round"
                strokeWidth="1"
                strokeDasharray="7"
              />
            </svg>
          </div>
          <div className="absolute left-[440px] bottom-[170px] xl:block hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="177"
              height="134.928"
              viewBox="0 0 177.49 134.928"
            >
              <path
                id="path"
                d="M-18870.2-5013.562v95.043c0,26.781-22.783,38.885-35.471,38.885h-141.02"
                transform="translate(19047.193 5014.062)"
                fill="none"
                stroke="#020a19"
                stroke-linecap="round"
                stroke-width="1"
                stroke-dasharray="7"
              ></path>
            </svg>
          </div>
          <div className="absolute right-[440px] bottom-[170px] xl:block hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="177"
              height="134.928"
              viewBox="0 0 177.49 134.928"
              style={{
                position: "relative",
                width: "177px",
                height: "134.928px",
              }}
            >
              <path
                id="path"
                d="M-19046.7-5013.562v95.043c0,26.781,22.783,38.885,35.471,38.885h141.02"
                transform="translate(19047.195 5014.062)"
                fill="none"
                stroke="#020a19"
                strokeLinecap="round"
                strokeWidth="1"
                strokeDasharray="7"
              />
            </svg>
          </div>
        </div>
      </Flex>
    </div>
  );
};

export default WhyHexNode;
