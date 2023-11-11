import { useState, useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const LoadingPage = () => {
  return(
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center gap-4">
        <AiOutlineLoading3Quarters className="w-5 h-5 lg:w-6 lg:h-6 animate-spin w-full"/>
        <span className="font-mono tracking-widest animate-pulse">Loading...</span>
      </div>
    </div>
  )
};

export default LoadingPage;