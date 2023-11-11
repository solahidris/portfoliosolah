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

  const barWidth = useTransform(count, [0, 97], ["0%", "97%"]); // Translate count to width


  return(
    <div className="flex flex-col gap-0 justify-center items-center min-h-screen pb-[120px]">
      
      <div
      className="flex flex-col justify-center items-center gap-0 pb-0 mb-[-50px]">
        <div dangerouslySetInnerHTML={{
          __html: `
            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            <lottie-player src="https://lottie.host/d1578c28-8a4e-47d9-b9c3-08e715a10616/bNZvqUVdpO.json" background="transparent" speed="1" style="width: 200px; height: 200px" loop autoplay direction="1" mode="normal"></lottie-player>
          `
        }}></div>
      </div>

      {/* Load bar animation */}
      <div className="mt-[18px] w-64 h-[30px] bg-neutral-600/90 rounded-md">
        <motion.div
          className="w-64 h-[22px] ml-[4px] mt-[4px] bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 rounded-md"
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