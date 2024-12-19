import { Flex } from "antd";
import React, { useCallback, useEffect, useRef, useState } from "react";
import chris from "../assets/The standard in Unified Endpoint Management _ Hexnode UEM_files/chris-robinson.png";
import justin from "../assets/The standard in Unified Endpoint Management _ Hexnode UEM_files/justin-modrak.png";
import dalibor from "../assets/The standard in Unified Endpoint Management _ Hexnode UEM_files/dalibor-kruljac.png";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import gorillas from "../assets/The standard in Unified Endpoint Management _ Hexnode UEM_files/gorillas.svg";
import wolt from "../assets/The standard in Unified Endpoint Management _ Hexnode UEM_files/wolt.svg";
import costco from "../assets/The standard in Unified Endpoint Management _ Hexnode UEM_files/costco.svg";
import lowes from "../assets/The standard in Unified Endpoint Management _ Hexnode UEM_files/lowes.svg";
import polaris from "../assets/The standard in Unified Endpoint Management _ Hexnode UEM_files/polaris.svg";
import hilton from "../assets/The standard in Unified Endpoint Management _ Hexnode UEM_files/hilton.svg";
import saic from "../assets/The standard in Unified Endpoint Management _ Hexnode UEM_files/saic.svg";
import group1 from "../assets/The standard in Unified Endpoint Management _ Hexnode UEM_files/group1-automotive.png";
import merck from "../assets/The standard in Unified Endpoint Management _ Hexnode UEM_files/merck.svg";
import marriott from "../assets/The standard in Unified Endpoint Management _ Hexnode UEM_files/marriott-intl.svg";

const Customers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [percentage, setPercentage] = useState(100);
  const carouselRef = useRef(null);
  const images = [
    {
      image: justin,
      content: "Hexnode is of great value. Works great with Android and iOS!",
      jt: "Technology Coordinator",
      name: "Justin Modrak",
    },
    {
      image: chris,
      content: "It seemed to be in-line with everything we were looking at.",
      jt: "Executive Account Manager, NCS",
      name: "Chris Robinson",
    },

    {
      image: dalibor,
      content:
        "Most complete MDM solution I found, and I tested many of them, including major names",
      jt: "KAMELEYA LTD",
      name: "Dalibor Kruljac",
    },
  ];

  const carouseImgItems = [
    { src: wolt },
    { src: costco },
    { src: marriott },
    { src: saic },
    { src: costco },
    { src: gorillas },
    { src: polaris },
    { src: lowes },
    { src: merck },
    { src: group1 },
    { src: hilton },
  ];
  const duplicatedItems = React.useMemo(
    () => [...carouseImgItems, ...carouseImgItems],
    [carouseImgItems]
  );

  useEffect(() => {
    const carousel = carouselRef.current;
    const itemWidth = 160; // Width of an individual image + margins
    let scrollPosition = 0;

    const scrollAndStop = () => {
      // Move the scroll position forward
      scrollPosition += itemWidth;

      if (carousel) {
        carousel.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });

        // Reset to the start seamlessly when reaching the duplicated end
        if (scrollPosition >= carousel.scrollWidth / 2) {
          setTimeout(() => {
            carousel.scrollTo({ left: 0, behavior: "instant" });
            scrollPosition = 0;
          }, 500); // Delay reset slightly to ensure smoothness
        }
      }
    };

    // Scroll every second
    const interval = setInterval(scrollAndStop, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [duplicatedItems.length]);
  const handleRightClick = useCallback(() => {
    if (currentIndex < 2) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);

      // Update percentage based on new index
      const newPercentage = 100 - newIndex * 100;
      setPercentage(newPercentage);
    }
  }, [currentIndex]);

  const handleLeftClick = useCallback(() => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);

      // Update percentage based on new index
      const newPercentage = 100 - newIndex * 100;
      setPercentage(newPercentage);
    }
  }, [currentIndex]);
  return (
    <div className="bg-[#ffffff] pt-10 pb-16 px-5 sm:px-20">
      <Flex
        align="center"
        justify="center"
        className="pt-[40px] md:mx-w-[1300px] mx-auto"
        vertical
      >
        <h3 className="text-[40px] text-[#020a19] font-bold pb-16 ">
          What our customers say
        </h3>
        <div className="relative  flex items-center md:mx-w-[1040px]">
          {/* Carousel Container */}
          <button
            type="button"
            className=" min-w-[56px] h-[56px] rounded-lg bg-[#F7F7F7] flex items-center justify-center mr-8 md:block hidden"
            onClick={handleLeftClick}
          >
            <LeftOutlined
              className={` ${
                currentIndex <= 0 ? "text-gray-300 cursor-not-allowed " : ""
              }`}
            />
          </button>
          <div className="flex relative overflow-hidden lg:max-w-[1040px] lg:w-full w-[280px]  mx-auto">
            <div
              className="flex transition-transform duration-500 justify-center"
              style={{
                transform: `translateX(${percentage}%)`,
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="lg:w-full w-[280px] flex-shrink-0 flex lg:flex-row flex-col bg-[#f7f7f7] rounded-[25px] sm:rounded-[25px] lg:items-center"
                  style={{ width: "100%" }}
                >
                  <img
                    src={image.image}
                    alt={`Slide ${index + 1}`}
                    className=" w-[280px] h-[280px] lg:h-[400px] object-cover md:rounded-l-[25px] mb-6 sm:mb-0"
                  />
                  <div className="lg:w-full w-[280px] text-center md:text-left rounded-b-[25px] rounded-r-lg flex flex-col  justify-between h-full">
                    <blockquote className="text-2xl pt-10 font-bold lg:pb-4 h-[60%] px-10">
                      "{image.content}"
                    </blockquote>
                    <div className="flex flex-col justify-center lg:h-[40%] h-[20%] bg-[#020a19]/5 px-10 rounded-b-[25px] lg:rounded-br-[25px] lg:py-0 py-4 lg:w-full w-[280px]">
                      <p className="font-bold lg:text-xl text-base lg:text-start text-center ">
                        {image.name}
                      </p>
                      <p className="lg:text-sm text-[#020a19] text-xs lg:text-start text-center ">
                        {image.jt}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            type="button"
            className=" min-w-[56px] h-[56px] rounded-lg bg-[#F7F7F7] flex items-center justify-center ml-8 md:block hidden"
            onClick={handleRightClick}
          >
            <RightOutlined
              className={` ${
                currentIndex >= 2 ? "text-gray-300 cursor-not-allowed " : ""
              }`}
            />
          </button>
        </div>
        <div className="flex items-center mt-8 md:hidden sm:flex">
          <button
            type="button"
            className=" min-w-[56px] h-[56px] rounded-lg bg-[#F7F7F7] flex items-center justify-center mr-4"
            onClick={handleLeftClick}
          >
            <LeftOutlined
              className={` ${
                currentIndex <= 0 ? "text-gray-300 cursor-not-allowed " : ""
              }`}
            />
          </button>
          <button
            type="button"
            className=" min-w-[56px] h-[56px] rounded-lg bg-[#F7F7F7] flex items-center justify-center"
            onClick={handleRightClick}
          >
            <RightOutlined
              className={` ${
                currentIndex >= 2 ? "text-gray-300 cursor-not-allowed " : ""
              }`}
            />
          </button>
        </div>
        <div className="relative overflow-hidden xl:w-[1200px] lg-w-[800px] md:w-[600px] sm:w-[400px] w-[200px] mx-auto mt-20 ">
          <div
            ref={carouselRef}
            className="flex w-full overflow-hidden whitespace-nowrap  items-center "
          >
            {duplicatedItems.map((item, index) => (
              <div
                key={index}
                className="inline-block w-40 flex-shrink-0 flex items-center justify-center"
                style={{
                  minWidth: "80px", // For maintaining consistency across screen sizes
                }}
              >
                <img
                  src={item.src}
                  alt={`carousel-${index}`}
                  className="w-[130px] h-[60px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Flex>
    </div>
  );
};

export default Customers;
