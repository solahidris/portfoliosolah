// component/LoadingPage.tsx

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { motion } from "framer-motion";

const LoadingPage = () => {
  return(
    <motion.div initial={{ opacity:0, scale:0.75 }} animate={{ opacity:1, scale:1 }} transition={{ duration: 1 }}
    className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center gap-4">
        <AiOutlineLoading3Quarters className="w-5 h-5 lg:w-6 lg:h-6 animate-spin w-full"/>
        <span className="font-mono tracking-widest animate-pulse">Loading...</span>
      </div>
    </motion.div>
  )
};

export default LoadingPage;