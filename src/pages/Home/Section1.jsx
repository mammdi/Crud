import React from "react";
import bgmobile from "../../assest/mobile.png";

const Section1 = () => {
  return (
    <section>
    <div className="h-90vmin lg:h-90vh bg-blue-900">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-10">
          <div className="flex flex-col justify-center mx-3">
            <div className="font-sans font-bold text-white text-2xl lg:text-4xl leading-tight">
              Showcase your app <br /> with Small Apps
            </div>
            <div className="font-sans font-normal text-white text-base lg:text-lg my-5 leading-relaxed">
              Besides its beautiful design, Laapp is an incredibly rich core
              framework <br /> for you to showcase your App.
            </div>
            <div className="my-5">
              <button className="text-white p-4" style={{ background: '#2e7eed' }}>
                Download Now
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={bgmobile} alt="backgroundImage" className="w-full lg:w-auto" />
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default Section1;
