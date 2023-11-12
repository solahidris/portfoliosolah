import React from 'react';
import Lottie from 'react-lottie';
import animationData from "../public/lottie-loading.json";

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="relative top-0 w-[50%] pb-5">
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default LottieAnimation;
