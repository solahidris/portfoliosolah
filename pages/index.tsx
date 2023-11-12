// Homepage

import ThreeDObject from "@/components/ThreeDObject";
import ParallexPage from "@/components/ParallexPage";
import React, { useState, useEffect } from "react";
import LoadingPage from "@/components/LoadingPage";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true); // Loading State

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false); // Set loading to false after
    }, 40000); // Time duration - 0.5s

    // Clear the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <LoadingPage isLoading={isLoading}/>
      <AnimatePresence mode="wait">
        {!isLoading && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ position: "relative", zIndex: 1 }} // Ensure content is on top
          >
            <ThreeDObject />
            <ParallexPage />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
