import React from 'react';
import Lottie from 'react-lottie';
import animationData from "../public/lottie-nyan.json";

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
    <div className="absolute bottom-0">
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default LottieAnimation;