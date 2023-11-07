import { useState } from "react";
// import { motion } from "framer-motion";
import ThreeDObject from "@/components/ThreeDObject";
import ParallexPage from "@/components/ParallexPage";

export default function Home() {
  return (
    <div className="min-h-[1000vh] w-[100vw]">
      <ThreeDObject />
      <ParallexPage />
    </div>
  )
}
