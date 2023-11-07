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
import { imageData, ImageDataItem } from './ImageDataItem';

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

// export function ImageParallex({ id }: { id: number }) {
export function ImageParallex({ id, title, subtitle }: { id: number, title: string, subtitle:string }) {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>
        <Image src={`/${id}.jpg`} alt="A London skyscraper" width={300} height={300}/>
      </div>
      <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
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

  return (
    <div>
      {imageData.map((data) => (
        <ImageDataItem
          key={data.id}
          id={data.id}
          title={data.title}
          subtitle={data.subtitle}
          content={data.content}
        />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </div>
  );
}

export default ParallexPage;