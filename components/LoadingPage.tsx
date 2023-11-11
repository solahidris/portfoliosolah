// component/LoadingPage.tsx

import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import { motion } from "framer-motion";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const LoadingPage = () => {

  const count = useMotionValue(0); // Initialize Count at 0
  const rounded = useTransform(count, Math.round); // Rounded numbers
  useEffect(() => {
    const animation = animate(count, 100, { duration: 4 }); // Animate counting
    return animation.stop; // Stop
  }, []);

  return(
    <div className="flex flex-col gap-0 justify-center items-center min-h-screen">

      <motion.div initial={{ opacity:0, scale:0.75 }} animate={{ opacity:1, scale:1 }} transition={{ duration: 0.7, delay: 0.5 }} 
      className="flex flex-col justify-center items-center gap-4">
        <AiOutlineLoading3Quarters className="w-5 h-5 lg:w-6 lg:h-6 animate-spin w-full"/>
        <span className="font-mono tracking-widest animate-pulse">Loading...</span>
      </motion.div>

      <div className="pt-10">
        <motion.span className="font-mono text-[30px]">{rounded}</motion.span>
      </div>

      </div>
  )
};

export default LoadingPage;