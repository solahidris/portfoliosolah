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

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ImageParallex({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="w-full w-[100%]">
      <div ref={ref}>
        <Image src={`/${id}.jpg`} alt="A London skyscraper" width={300} height={300} className="min-w-[300px] min-h-[400px]"/>
      </div>
      <motion.h2 style={{ y }} className="absolute right-0">{`#00${id}`}</motion.h2>
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
        <div className="pl-5 flex flex-col justify-center items-start">
          <p className="">Hi, I&#39;m Solah</p>
          <p className="">This is my Portfolio</p>
        </div>
      ),
    },
    {
      id: 2,
      title: "Title 2",
      subtitle: "Subtitle 2",
      content: (
        <div className="pl-5 flex flex-col justify-center items-start">
          <p className="">I&#39;m a Frontend Developer</p>
          <p className="">based in humble Malaysia</p>
        </div>
      ),
    },
    {
      id: 3,
      title: "Title 3",
      subtitle: "Subtitle 3",
      content: (
        <div className="pl-5 flex flex-col justify-center items-start">
          <p className="">I can code stuff. Mostly in Nextjs, Typescript &#38; Firebase GCP</p>
        </div>
      ),
    },
    {
      id: 4,
      title: "Title 4",
      subtitle: "Subtitle 4",
      content: (
        <div className="pl-5 flex flex-col justify-center items-start">
          <p className="">kasutkicks.com - a sneaker marketplace</p>
        </div>
      ),
    },
    {
      id: 5,
      title: "Title 5",
      subtitle: "Subtitle 5",
      content: (
        <div className="pl-5 flex flex-col justify-center items-start">
          <p className="">sharelinks.info - a link in bio</p>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col">
      {imageData.map((data) => (
        <div key={data.id} className="flex">
          {data.content}
          <ImageParallex id={data.id} />
        </div>
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </div>
  );
}

export default ParallexPage;