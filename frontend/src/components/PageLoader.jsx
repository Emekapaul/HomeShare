import React from "react";
import Loading from "../assets/page-loader.svg";

const PageLoader = ({ loaderText }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="flex flex-col gap-[5px] items-center">
        <div className="-mt-8">
          <img src={Loading} width="70px" alt="gear spinning icon" />
        </div>
        <span className="font-bold text-[22px] text-white">
          {loaderText || "Loading page..."}
        </span>
      </div>
    </div>
  );
};

export default PageLoader;
