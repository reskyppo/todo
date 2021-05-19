import React from "react";
import ICPlus from "../assets/ic-plus.svg";
import ICCLock from "../assets/ic-clock.svg";

const Card = ({ title, addBtn, datas }) => {
  return (
    <div className="w-1/5">
      <div className="bg-grey-100 rounded-md p-4">
        <div className="flex justify-between">
          <div className="font-bold text-xl">{title}</div>
          {addBtn && (
            <div className="flex">
              <img
                src={ICPlus}
                alt="Icon Plus"
                className="w-3/4 cursor-pointer"
              />
            </div>
          )}
        </div>
        {datas?.map((data, idx) => (
          <div className="bg-white mt-4 p-4 rounded-md" key={idx}>
            <h2 className="text-md font-medium">{data.title}</h2>
            <p className="mt-2">{data.desc}</p>
            <div className="mt-2 w-1/4 rounded-sm py-1 font-medium text-sm text-center text-blue-2 ring-1 ring-blue-2 ring-opacity-50 bg-blue-1 ">
              {data.label}
            </div>
            <div className="flex items-center mt-2">
              <img src={ICCLock} alt="Clock's Icon" className="w-4" />
              <p className="text-md font-medium ml-2">{data.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
