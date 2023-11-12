// component/LoadingPage.tsx

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import lottieLoading from "../public/lottie-loading.json";
import lottieNyan from "../public/lottie-nyan.json";
import Lottie from "lottie-react";


interface LoadingPageProps {
  isLoading: boolean;
}

const LoadingPage: React.FC<LoadingPageProps> = ({isLoading}) => {

  const loadLottieScript = () => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
    script.async = true;
    document.body.appendChild(script);
  };

  const count = useMotionValue(0); // Initialize Count at 0
  const rounded = useTransform(count, Math.round); // Rounded numbers
  useEffect(() => {
    if (isLoading) {
      const animation = animate(count, 100, { duration: 4 }); // Animate counting for 4 seconds
      loadLottieScript(); // Load Lottie Scripts

      return () => animation.stop(); // Stop the animation on unmount
    }
  }, [isLoading, count]);
  
  const barWidth = useTransform(count, [0, 97], ["0%", "97%"]); // Translate count to width


  return(
    <div className="flex flex-col gap-0 justify-center items-center min-h-screen pb-[120px]">
      
      <div
      className="flex flex-col justify-center items-center gap-0 pb-0 mb-[-50px]">
        <div className="relative top-0 w-[50%] lg:max-w-[20%] pb-5">
          <Lottie animationData={lottieLoading} loop={true} />
        </div>
        <div className="absolute bottom-0 lg:max-w-[30%] bg-blue-000">
          <Lottie animationData={lottieNyan} loop={true} />
        </div>
      </div>

      {/* Load bar animation */}
      <div className="mt-[18px] w-64 h-[30px] bg-neutral-600/90 rounded-md">
        <motion.div
          className="w-64 h-[22px] ml-[4px] mt-[4px] bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 rounded-md"
          style={{ width: barWidth }}
        />
      </div>

      {/* Number count 0-100 */}
      <div className="flex gap-2 items-end justify-center">
        <motion.span className="font-mono text-[24px] mt-4 tracking-wide text-white/80">{rounded}</motion.span>
        <span className="mb-[5px] text-white/80">%</span>
      </div>

    </div>
  )
};

export default LoadingPage;

