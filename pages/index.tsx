// Homepage

import ThreeDObject from "@/components/ThreeDObject";
import ParallexPage from "@/components/ParallexPage";
import React, { useState, useEffect } from "react";
import LoadingPage from "@/components/LoadingPage";
import { motion } from "framer-motion";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true); // Loading State

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false); // Set loading to false after
    }, 4000); // Time duration - 0.5s

    // Clear the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {isLoading ? (
        <>
          <LoadingPage />
        </>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity:1 }} transition={{ duration: 0.5 }}>
          <ThreeDObject />
          <ParallexPage />
        </motion.div>
      )}
    </div>
  );
};

export default Home;
