import React from "react";
import { AiOutlineApple } from "react-icons/ai";
import { BsAndroid2 } from "react-icons/bs";
import { FaWindows } from "react-icons/fa6";



const Section7 = () => {
  return (
    <section className="">
      <div className="py-28" style={{ background: "#2e7eed" }}>
        <div className="container mx-auto">
          <div className="text-center">
            <div
              className=" mb-4 text-white"
              style={{
                fontSize: "40px",
                fontWeight: "300px",
                lineHeight: "50px",
              }}
            >
              It's time to change your mind
            </div>
            <div
              className="text-white"
              style={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "25px",
              }}
            >
              Download over 2 million humans .Get Small Apps free forever! We
              say you won’t look back.
            </div>
            <div className="flex justify-center align-middle flex-wrap mt-14">
              <div className="p-3 w-48 flex justify-center align-middle border-2 m-3 border-white rounded-full  text-white">
                <AiOutlineApple style={{ fontSize: "20px", margin:'0 6px' }} />
                <div>IPHONE</div>
              </div>
              <div className="p-3 w-48 flex justify-center align-middle border-2 m-3 border-white rounded-full  text-white">
                <BsAndroid2 style={{ fontSize: "20px", margin:'0 6px'}} />
                <div>ANDROID</div>
              </div>
              <div className="p-3 w-48 flex justify-center align-middle border-2 m-3 border-white rounded-full  text-white">
                <FaWindows style={{ fontSize: "20px" , margin:'0 6px'}} />
                <div>WINDOWS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
