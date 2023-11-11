// component/LoadingPage.tsx

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface LoadingPageProps {
  isLoading: boolean;
}

const LoadingPage: React.FC<LoadingPageProps> = ({isLoading}) => {

  const count = useMotionValue(0); // Initialize Count at 0
  const rounded = useTransform(count, Math.round); // Rounded numbers
  useEffect(() => {
    if (isLoading) {
      const animation = animate(count, 100, { duration: 4 }); // Animate counting for 4 seconds
      return () => animation.stop(); // Stop the animation on unmount
    }
  }, [isLoading, count]);

  const barWidth = useTransform(count, [0, 96], ["0%", "96%"]); // Translate count to width


  return(
    <div className="flex flex-col gap-0 justify-center items-center min-h-screen pb-[120px]">
      
      <motion.div initial={{ opacity:0, scale:0.75 }} animate={{ opacity:1, scale:1 }} transition={{ duration: 0.7, delay: 0.5 }} 
      className="flex flex-col justify-center items-center gap-4 pb-6">
        <AiOutlineLoading3Quarters className="w-5 h-5 lg:w-6 lg:h-6 animate-spin w-full"/>
        <span className="font-mono tracking-widest animate-pulse">Loading...</span>
      </motion.div>

      {/* Load bar animation */}
      <div className="mt-[18px] w-64 h-[30px] bg-neutral-200/90 rounded-md">
        <motion.div
          className="w-64 h-[22px] ml-[4px] mt-[4px] bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 rounded-md"
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