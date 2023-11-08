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
import RightMenu from "./RightMenu";
import { MapIcon, InboxIcon, PhoneIcon } from "@heroicons/react/20/solid";


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
        <Image src={`/${id}.jpg`} alt="ImageParallex" width={300} height={300} className="min-w-[185px] min-h-[400px] object-contain"/>
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

  // Ref ID Initialization
  const homeRef = useRef<HTMLDivElement | null>(null);
  const techStackRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  // Scroll to Section from Menu List
  const scrollToSection = (ref: string) => {
    if (ref === 'homeDiv' && techStackRef.current) {
      homeRef.current!.scrollIntoView({ behavior: 'smooth' });
    } else if (ref === 'techStackDiv' && projectsRef.current) {
      techStackRef.current!.scrollIntoView({ behavior: 'smooth' });
    } else if (ref === 'projectsDiv' && contactRef.current) {
      projectsRef.current!.scrollIntoView({ behavior: 'smooth' });
    } else if (ref === 'contactDiv' && contactRef.current) {
      contactRef.current!.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Contact Section Email & Phone functions
  const contactSectionHandler = (value:any) => {
    if (value === "phoneSection") {
      window.location.href = "tel:+60127710626";
    } else if (value === "emailSection") {
      window.open(
        `mailto:${encodeURIComponent(
          "solah.eth@gmail.com"
        )}?subject=${encodeURIComponent(
          "Work Opportunity"
        )}&body=${encodeURIComponent(
          "Hello Sol, I saw your website and wanted to reach out."
        )}`
      );
    }
  };

  const imageData = [
    {
      id: 1,
      title: "Title 1",
      subtitle: "Subtitle 1",
      content: (
        <div ref={homeRef} className="w-[40%] lg:w-[50%] ml-5 flex flex-col justify-center items-start lg:items-end">
          <p className="font-mono text-xs">Hi, I&#39;m Sol</p>
          <p className="font-mono text-xs">A self taught Front-end Developer</p>
          <div className="flex flex-col lg:flex-row lg:gap-2">
            <span className="font-mono text-xs">based in</span>
            <span className="font-mono text-xs">Kuala Lumpur,</span>
            <span className="font-mono text-xs">Malaysia 📍</span>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Title 2",
      subtitle: "Subtitle 2",
      content: (
        <div ref={techStackRef} className="w-[40%] lg:w-[50%] pl-5 flex flex-col justify-center items-start lg:items-end">
          <p className="font-mono text-xs">These are my Tech Stacks</p>
          <p className="font-mono text-xs">I can make full stack applications</p>
          <p className="font-mono text-xs">But I enjoy doing frontend just a bit more</p>
        </div>
      ),
    },
    {
      id: 3,
      title: "Title 3",
      subtitle: "Subtitle 3",
      content: (
        <div ref={projectsRef} className="w-[40%] lg:w-[50%] pl-5 flex flex-col justify-center items-start lg:items-end">
          <p className="font-mono text-xs">Project 2023-A</p>
          <p className="font-mono text-xs">kasutkicks.com</p>
          <p className="font-mono text-xs">- a sneaker marketplace with a price checker</p>
        </div>
      ),
    },
    {
      id: 4,
      title: "Title 4",
      subtitle: "Subtitle 4",
      content: (
        <div className="w-[40%] lg:w-[50%] pl-5 flex flex-col justify-center items-start lg:items-end">
          <p className="font-mono text-xs">Project 2023-B</p>
          <p className="font-mono text-xs">sharelinks.info</p>
          <p className="font-mono text-xs">- a link in bio</p>
        </div>
      ),
    },
    {
      id: 5,
      title: "Title 5",
      subtitle: "Subtitle 5",
      content: (
        <div className="w-[40%] lg:w-[50%] pl-5 flex flex-col justify-center items-start lg:items-end">
          <p className="font-mono text-xs">Project 2023-C</p>
          <p className="font-mono text-xs">solat.eth</p>
          <p className="font-mono text-xs">- a react native prayer time app</p>
        </div>
      ),
    },
    {
      id: 6,
      title: "Title 6",
      subtitle: "Subtitle 6",
      content: (
        <div className="w-[40%] lg:w-[50%] pl-5 flex flex-col justify-center items-start lg:items-end">
           <p className="font-mono text-xs">Things I&apos;ve coded for fun / iv test previously</p>
          <div className="flex flex-col gap-2 flex-wrap">
            <a href="https://moviereviewsmy.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs">A - a movie ranking web</a>
            <a href="https://sayapniaga.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs">B - a car dealership MVP</a>
            <a href="https://countrydarkmode.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs">C - an interview test ui</a>
            <a href="https://countrydarkmode.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs">D - a mockup coffee shop</a>
          </div>
        </div>
      ),
    },
    {
      id: 7,
      title: "Title 7",
      subtitle: "Subtitle 7",
      content: (
        // <div ref={contactRef} className="w-[40%] lg:w-[50%] pl-5 flex flex-col justify-start items-start lg:items-end">
        <div ref={contactRef} className="w-[40%] lg:w-[50%] pl-5 flex flex-col justify-center items-start lg:items-end">
          <p className="font-mono text-3xl">Contact</p>
          <div className="flex flex-col">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="flex justify-start z-20">
                <button value="emailSection" onClick={() => contactSectionHandler("emailSection")}>
                  <div className="flex">
                    <InboxIcon className="text-white bg-gradient-to-r from-sky-600 to-sky-400 rounded-full self-center p-[0.7rem] w-[60px] h-[60px] lg:p-[0.8rem] lg:w-[60px] lg:h-[60px]"/>
                    <div className="flex flex-col ml-2 items-start">
                      <p className="text-white font-mono font-bold mx-1 px-3 lg:text-[1.6rem] tracking-widest">Email</p>
                      <p className="bg-blue-300/10 rounded text-white font-mono text-[0.8rem] lg:text-[0.7rem] mx-4 px-3 py-1 tracking-widest">solah.eth@gmail.com</p>
                    </div>
                  </div>
                </button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="flex justify-start z-20">
                <button value="phoneSection" onClick={() => contactSectionHandler("phoneSection")}>
                  <div className="flex">
                    <PhoneIcon className="text-white bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full self-center p-[0.7rem] w-[60px] h-[60px] lg:p-[0.8rem] lg:w-[60px] lg:h-[60px]"/>
                    <div className="flex flex-col ml-2 items-start">
                      <p className="text-white font-mono font-bold self-startt mx-1 px-3 lg:text-[1.6rem] tracking-widest">Phone</p>
                      <p className="bg-blue-300/10 rounded text-white font-mono text-[0.8rem] lg:text-[0.7rem] self-centerr mx-4 px-3 py-1 tracking-widest">+60127710626</p>
                    </div>
                  </div>
                </button>
              </motion.div>
            </div>

            {/* <div className="flex lg:justify-start">
              <MapIcon className="text-white bg-gradient-to-r from-amber-600 to-amber-400 rounded-full self-center p-[0.7rem] w-[60px] h-[60px] lg:p-[0.8rem] lg:w-[60px] lg:h-[60px]"/>
              <div className="flex flex-col ml-2">
                <p className="text-white font-mono font-bold self-start mx-4 px-3 py-1 lg:text-[1.6rem] tracking-widest">Location</p>
                <p className="bg-blue-300/10 rounded text-white font-mono text-[0.8rem] self-center lg:text-[0.7rem] ml-4 px-3 py-1 tracking-widest">Kuala Lumpur, Malaysia 📍</p>
                <p className="text-white font-mono text-[0.6rem] self-start mx-4 px-3 py-1 tracking-widest lg:text-[0.5rem]">Okay with relocating ✅ </p>
              </div>
            </div> */}
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="">
        <RightMenu scrollToSection={scrollToSection} />
      </div>
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