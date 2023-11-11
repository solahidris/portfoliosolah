// Homepage

import ThreeDObject from "@/components/ThreeDObject";
import ParallexPage from "@/components/ParallexPage";
import React, { useState, useEffect } from "react";
import LoadingPage from "@/components/LoadingPage";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true); // Loading State

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false); // Set loading to false after
    }, 500); // Time duration - 0.5s

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
        <>
          <ThreeDObject />
          <ParallexPage />
        </>
      )}
    </div>
  );
};

export default Home;
