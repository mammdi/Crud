import React from "react";

const Section4Cart = ({data}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div>
        <data.icons style={{ color: "#3a85ee", fontSize: "20px" }} />
      </div>
      <div className="font-bold">{data.title}</div>
      <div className="text-sm">
        {data.describtion}
      </div>
    </div>
  );
};

export default Section4Cart;
