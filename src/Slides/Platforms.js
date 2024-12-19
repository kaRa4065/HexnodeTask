import { Flex } from "antd";
import React, { useState } from "react";
import android from "../assets/The standard in Unified Endpoint Management _ Hexnode UEM_files/android.jpeg";
import ios from "../assets/The standard in Unified Endpoint Management _ Hexnode UEM_files/iOS.jpeg";
import macos from "../assets/The standard in Unified Endpoint Management _ Hexnode UEM_files/macOS.jpeg";
import windos from "../assets/The standard in Unified Endpoint Management _ Hexnode UEM_files/windows.jpeg";
import tvos from "../assets/The standard in Unified Endpoint Management _ Hexnode UEM_files/tvOS.jpeg";
import fireos from "../assets/The standard in Unified Endpoint Management _ Hexnode UEM_files/fireOS.jpeg";

const Platforms = () => {
  const [toggleView, setToggleView] = useState(0);
  const [imgShow, setImgShow] = useState(0);
  const imgItems = [
    { id: 0, tag: android },
    { id: 1, tag: ios },
    { id: 2, tag: macos },
    { id: 3, tag: windos },
    { id: 4, tag: tvos },
    { id: 5, tag: fireos },
  ];
  const platformData = [
    {
      id: 1,
      title: "Android",
      content:
        " Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to it’s full capabilities.",
    },
    {
      id: 2,
      title: "iOS",
      content:
        "Manage, secure, and monitor iOS devices in your organization. With Hexnode’s ABM and ASM integration, deploy devices and apps with ease.",
    },
    {
      id: 3,
      title: "macOS",
      content:
        "Leverage Hexnode’s desktop management capabilities to their fullest. Securely deploy and manage macOS devices in bulk with Hexnode UEM.",
    },
    {
      id: 4,
      title: "Windows",
      content:
        "Spearhead modern PC management in your organization with Hexnode. Set limit’s and monitor PC health and compliance remotely with Hexnode UEM.",
    },
    {
      id: 5,
      title: "tvOS",
      content:
        "Remotely manage and secure tvOS devices with Hexnode. Display your brand aesthetics and custom messages on tvOS devices with Hexnode UEM.",
    },
    {
      id: 6,
      title: "FireOS",
      content:
        "Enroll Amazon Fire tablets, phones and e-readers in Hexnode UEM to manage them all from a single console.",
    },
  ];
  const handleClick = (index) => {
    console.log(index);
    if (index !== toggleView) {
      setToggleView(index);
      console.log(index);
    }
  };
  return (
    <div className="w-full bg-[#f7f7f7] pb-16 px-5 sm:px-20">
      <div className=" md:mx-w-[1300px] mx-auto">
        <Flex className="py-20" vertical align="center">
          <h3 className="text-[40px] text-[#020a19] text-center font-bold pb-5">
            Multi-platform Endpoint Management
          </h3>
          <h5 className="hidden md:block text-[16px] md:text-[18px] leading-[28px] text-center font-regular text-[#333333]">
            Devices of varying platforms? Hexnode thrives in a diverse
            environment.
          </h5>
        </Flex>
        <div className="md:mx-w-[1300px] mx-auto ">
          <div className="flex justify-center pt-5 lg:flex-row  flex-col  md:items-start items-center">
            <div className="flex relative overflow-hidden max-w-[600px] max-h-[565px] hidden md:flex ">
              <div
                className="  flex-col transition-transform duration-500 md:flex hidden"
                style={{
                  transform: `translateY(-${toggleView * 100}%)`,
                }}
              >
                {imgItems.map((item, index) => (
                  <div
                    key={index}
                    className="   h-full  flex-shrink-0   flex-row  bg-[#f7f7f7] rounded-lg  md:h-[565px] md:flex hidden"
                    style={{ width: "100%" }}
                  >
                    <img
                      src={item.tag}
                      alt="platform"
                      className="rounded-[18px] w-full h-full object-cover md:block hidden"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center w-full md:hidden">
              {imgItems
                .filter((item) => imgShow === item.id)
                .map((item, index) => (
                  <div
                    key={index}
                    className=" flex-shrink-0 flex flex-col bg-[#f7f7f7] rounded-lg pb-10"
                  >
                    <img
                      src={item.tag}
                      alt="platform"
                      className="rounded-[18px] w-[300px] h-[300px]"
                    />
                  </div>
                ))}
            </div>
            <Flex vertical className="divide-y bg-[#F7F7F7] pl-8">
              {platformData.map((list, index) => (
                <div
                  key={index}
                  className={`${
                    toggleView === index
                      ? "border border-[#D7D7D7] bg-[#ffffff]"
                      : " bg-[#F7F7F7] "
                  } flex flex-col items-start md:max-w-[700px] px-[30px] h-fit rounded-[15px] `}
                >
                  <h3
                    className="text-[#050607] w-full cursor-pointer font-bold text-[24px] leading-[30px] text-left transition-[padding] duration-300 ease-in-out py-[20px]"
                    onClick={(e) => handleClick(index)}
                  >
                    {list.title}
                  </h3>
                  {toggleView === index && (
                    <>
                      <p className="text-[#333333] font-normal text-[18px] leading-[28px] pt-[10px]">
                        {list.content}
                      </p>
                      <button
                        type="button"
                        className="text-[#dd0735] text-xl mt-5 font-semibold pb-[30px]"
                      >
                        Try Hexnode on your endpoints
                      </button>
                    </>
                  )}
                </div>
              ))}
            </Flex>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platforms;
