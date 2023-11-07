import { useState } from "react";
// import { motion } from "framer-motion";
import ThreeDObject from "@/components/ThreeDObject";
import ParallexPage from "@/components/ParallexPage";
import BlobAnimation from "@/components/BlobAnimation";

export default function Home() {
  return (
    <div className="min-h-[500vh] w-[100vw]">
      <ThreeDObject />
      <ParallexPage />
      {/* <div className="bg-red-7000 lg:w-[5rem] lg:h-[5rem]"><BlobAnimation /></div> */}
    </div>
  )
}
