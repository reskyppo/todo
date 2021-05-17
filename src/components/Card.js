import React from "react";
import ICPlus from "../assets/ic-plus.svg";
import ICCLock from "../assets/ic-clock.svg";

const Card = ({title}) => {
  return (
    <div className="w-1/5">
      <div className="bg-grey-100 rounded-md p-4">
        <div className="flex justify-between">
          <div className="font-bold text-xl">{title}</div>
          <div className="flex">
            <img
              src={ICPlus}
              alt="Icon Plus"
              className="w-3/4 cursor-pointer"
            />
          </div>
        </div>
        <div className="bg-white mt-4 p-4 rounded-md">
          <h2 className="text-md font-medium">judul</h2>
          <p className="mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, ab
            soluta enim neque veritatis dolore numquam ea culpa nesciunt, vero
            quisquam illum voluptate dolor rerum iure officiis harum
            voluptatibus ipsa?
          </p>
          <div className="mt-2 w-1/4 rounded-sm py-1 font-medium text-center text-blue-2 ring-1 ring-blue-2 ring-opacity-50 bg-blue-1 ">
            Frontend
          </div>
          <div className="flex items-center mt-2">
            <img src={ICCLock} alt="Clock's Icon" className="w-4" />
            <p className="text-md font-medium ml-2">Jun 21</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
