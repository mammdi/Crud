import React from "react";
import iphonepad from "../../assest/iphone-ipad.jpg";
import { GrBookmark } from "react-icons/gr";
import { RiPulseFill } from "react-icons/ri";
import { HiOutlineChartBar } from "react-icons/hi2";
import Section4Cart from "./Section4Cart";

const Section4 = () => {
  const dataBox = [
    {
      icons: GrBookmark,
      title: "Easy Prototyping",
      describtion:
        " Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui",
    },
    {
      icons: RiPulseFill,
      title: "Easy Prototyping",
      describtion:
        " Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui",
    },
    {
      icons: HiOutlineChartBar,
      title: "Easy Prototyping",
      describtion:
        " Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui",
    },
    {
      icons: GrBookmark,
      title: "Easy Prototyping",
      describtion:
        " Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui",
    },
  ];
  return (
    <section className="">
      <div className="bg-gray-100">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="text-2xl lg:text-4xl font-bold mb-4">
              An Interface For Lifestyle
            </div>
            <div className="text-gray-700">
              Small Apps makes it easy to stay on top of your Life Style. No
              late tasks. No gimmicks.
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-10">
            <div className="flex justify-center">
              <img
                src={iphonepad}
                alt="backgroundImage"
                className="w-full lg:w-auto"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-5 lg:mx-10 p-5 lg:p-10 bg-white">
                {dataBox?.map((val) => {
                  return <Section4Cart data={val} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
