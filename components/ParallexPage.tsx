// Photos from https://citizenofnowhe.re/lines-of-the-city
// import "./styles.css";
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
      {[1, 2, 3, 4, 5].map((image) => (
        <div key={image} className="flex justify-center">
          <div className="flex flex-col justify-center items-start">
            <p className="capitalize">Hi, im solah</p>
            <p className="capitalize">and this is my portfolio</p>
          </div>
          <ImageParallex id={image} />
        </div>
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </div>
  );
}

export default ParallexPage;