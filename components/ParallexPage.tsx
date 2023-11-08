// directory: ./components/ParallexPage.tsx

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import BlobAnimation from "./BlobAnimation";

const BlobImageParallax = ({ id }: { id: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="w-full w-[60%] lg:w-[50%]">
      <div className="w-full bg-transparent flex items-center">
        <BlobAnimation /> {/* Use the BlobAnimation component here */}
      </div>
      <motion.h2 style={{ y }} className="absolute top-[85vh] right-0 lg:right-20 font-mono text-xs">{`#00${id}`}</motion.h2>
    </section>
  );
};

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ImageParallex({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="w-full w-[60%] lg:w-[50%]">
      <div ref={ref} className="w-full bg-transparent">
        <Image src={`/${id}.jpg`} alt="A London skyscraper" width={300} height={300} className="min-w-[185px] min-h-[400px] object-contain"/>
      </div>
      <motion.h2 style={{ y }} className="absolute right-0 lg:right-20 font-mono text-xs">{`#00${id}`}</motion.h2>
    </section>
  );
}

const ParallexPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const imageData = [
    {
      id: 1,
      title: "Title 1",
      subtitle: "Subtitle 1",
      content: (
        <div className="w-[40%] lg:w-[50%] ml-5 flex flex-col justify-center items-start lg:items-end">
          <p className="font-mono text-xs">Hi, I&#39;m Sol.</p>
          <p className="font-mono text-xs">A self taught Front-end Developer</p>
          <p className="font-mono text-xs">based in Kuala Lumpur, Malaysia. 📍</p>
        </div>
      ),
    },
    {
      id: 2,
      title: "Title 2",
      subtitle: "Subtitle 2",
      content: (
        <div className="w-[40%] lg:w-[50%] pl-5 flex flex-col justify-center items-start lg:items-end">
          <p className="font-mono text-xs">I&#39;m a Frontend Developer</p>
        </div>
      ),
    },
    {
      id: 3,
      title: "Title 3",
      subtitle: "Subtitle 3",
      content: (
        <div className="w-[40%] lg:w-[50%] pl-5 flex flex-col justify-center items-start lg:items-end">
          <p className="font-mono text-xs">I can code stuff. Mostly in Nextjs, Typescript & Firebase GCP</p>
        </div>
      ),
    },
    {
      id: 4,
      title: "Title 4",
      subtitle: "Subtitle 4",
      content: (
        <div className="w-[40%] lg:w-[50%] pl-5 flex flex-col justify-center items-start lg:items-end">
          <p className="font-mono text-xs">kasutkicks.com - a sneaker marketplace</p>
        </div>
      ),
    },
    {
      id: 5,
      title: "Title 5",
      subtitle: "Subtitle 5",
      content: (
        <div className="w-[40%] lg:w-[50%] pl-5 flex flex-col justify-center items-start lg:items-end">
          <p className="font-mono text-xs">sharelinks.info - a link in bio</p>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col">
      {imageData.map((data) => (
        <div key={data.id} className="flex">
          {data.content}
          {/* Use BlobImageParallax for the first section and ImageParallex for other sections */}
          {data.id === 1 ? <BlobImageParallax id={data.id} /> : <ImageParallex id={data.id} />}
        </div>
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </div>
  );
}

export default ParallexPage;