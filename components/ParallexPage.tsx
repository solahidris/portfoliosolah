// directory: ./components/ParallexPage.tsx

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
import BlobAnimation from "./BlobAnimation";
import RightMenu from "./RightMenu";
import { MapPinIcon, InboxIcon, PhoneIcon, ChevronDoubleUpIcon, GlobeAsiaAustraliaIcon } from "@heroicons/react/20/solid";
import { SiGithub, SiLinkedin } from "react-icons/si";

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
      <div ref={ref} className="w-full bg-transparent lg:ml-[-300px]">
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
    if (ref === 'homeDiv') {
      homeRef.current!.scrollIntoView({ behavior: 'smooth' });
    } else if (ref === 'techStackDiv') {
      techStackRef.current!.scrollIntoView({ behavior: 'smooth' });
    } else if (ref === 'projectsDiv') {
      projectsRef.current!.scrollIntoView({ behavior: 'smooth' });
    } else if (ref === 'contactDiv') {
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
          <p className="absolute right-2 mb-[220px] lg:mb-[350px] lg:text-2xl lg:right-10 font-mono text-xl justify-start lg:mr-[280px]">Profile</p>
          <div className="absolute bg-neutral-900/[85%] w-[35%] p-3 rounded">
            <p className="font-mono text-xs">Hi, I&#39;m Sol</p>
            <p className="font-mono text-xs">A self taught Front-end Developer</p>
            <div className="flex flex-col lg:flex-row lg:gap-2">
              <span className="font-mono text-xs">based in</span>
              <span className="font-mono text-xs">Kuala Lumpur,</span>
              <span className="font-mono text-xs flex gap-1">Malaysia <GlobeAsiaAustraliaIcon className="w-[12px]" /></span>
            </div>
            <div className="flex pt-8 gap-x-4 justify-start lg:justify-start">
              <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} ><a target="_blank" rel="noreferrer" href="https://github.com/solahidris"><SiGithub className="w-[1.7rem] h-[1.7rem] lg:w-[2rem] lg:h-[2rem] animate-pulse hover:text-yellow-400"/></a></motion.button>
              <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} ><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/solahuddinidris/"><SiLinkedin className="w-[1.7rem] h-[1.7rem] lg:w-[2rem] lg:h-[2rem] animate-pulse hover:text-blue-500"/></a></motion.button>
            </div>
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
          <p className="absolute right-2 mb-[52vh] lg:text-2xl lg:right-10 font-mono text-xl justify-start lg:mr-[320px]">Tech Stack</p>
          <div className="absolute bg-neutral-900/[85%] w-[30%] p-3 rounded">
            <p className="font-mono text-xs">These are my Tech Stacks</p>
            <p className="font-mono text-xs">I can make full stack applications</p>
            <p className="font-mono text-xs h-[50px] lg:h-[0px] lg:mb-[15px]">But I enjoy doing frontend just a bit more</p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Title 3",
      subtitle: "Subtitle 3",
      content: (
        <div ref={projectsRef} className="w-[40%] lg:w-[50%] pl-5 flex flex-col justify-center items-start lg:items-end">
          <p className="absolute right-2 mb-[52vh] lg:text-2xl lg:right-10 font-mono text-xl justify-start lg:mr-[320px]">Projects</p>
          <div className="absolute bg-neutral-900/[85%] w-[30%] p-3 rounded">
            <p className="font-mono text-xs">Project/ 2023-A</p>
            <p className="flex">
              <a href="https://www.kasutkicks.com/" target="_blank" rel="noopener noreferrer" className="hidden lg:inline font-mono text-xs text-cyan-200 underline underline-offset-2">kasutkicks.com</a>
              <a href="https://www.kasutkicks.com/" target="_blank" rel="noopener noreferrer" className="lg:hidden font-mono text-xs text-cyan-200 underline underline-offset-2">kasutkicks<br/>.com</a>
            </p>
            <span className="font-mono text-xs">{"// a sneaker marketplace with a price checker"}</span>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Title 4",
      subtitle: "Subtitle 4",
      content: (
        <div className="w-[40%] lg:w-[50%] pl-5 flex flex-col justify-center items-start lg:items-end">
          <p className="absolute right-2 mb-[52vh] lg:text-2xl lg:right-10 font-mono text-xl justify-start lg:mr-[320px]">Projects</p>
          <div className="absolute bg-neutral-900/[85%] w-[30%] p-3 rounded">
            <p className="font-mono text-xs">Project/ 2023-B</p>
            <p className="flex">
              <a href="https://www.sharelinks.info/" target="_blank" rel="noopener noreferrer" className="hidden lg:inline font-mono text-xs text-cyan-200 underline underline-offset-2">sharelinks.info</a>
              <a href="https://www.sharelinks.info/" target="_blank" rel="noopener noreferrer" className="lg:hidden font-mono text-xs text-cyan-200 underline underline-offset-2">sharelinks<br/>.info</a>
            </p>
            <span className="font-mono text-xs">{"// a link in bio"}</span>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "Title 5",
      subtitle: "Subtitle 5",
      content: (
        <div className="w-[40%] lg:w-[50%] pl-5 flex flex-col justify-center items-start lg:items-end">
          <p className="absolute right-2 mb-[52vh] lg:text-2xl lg:right-10 font-mono text-xl justify-start lg:mr-[320px]">Projects</p>
          <div className="absolute bg-neutral-900/[85%] w-[30%] p-3 rounded">
            <p className="font-mono text-xs">Project/ 2023-C</p>
            <p className="flex">
              <a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer" className="hidden lg:inline font-mono text-xs text-cyan-200 underline underline-offset-2">solat.eth</a>
              <a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer" className="lg:hidden font-mono text-xs text-cyan-200 underline underline-offset-2">solat<br/>.eth</a>
            </p>
            <span className="font-mono text-xs">{"// a prayer time mobile app"}</span>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      title: "Title 6",
      subtitle: "Subtitle 6",
      content: (
        <div className="w-[40%] lg:w-[50%] pl-5 flex flex-col justify-center items-start lg:items-end">
          <p className="absolute right-2 mb-[52vh] lg:text-2xl lg:right-10 font-mono text-xl justify-start lg:mr-[320px]">Other Projects</p>
          <div className="absolute bg-neutral-900/[85%] w-[30%] p-3 rounded">
            <p className="font-mono text-xs">Things I&apos;ve coded for fun / iv test previously</p>
            <div className="flex flex-col gap-2 flex-wrap">
              <a href="https://kasutkicks-nft.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-cyan-200 underline underline-offset-2">A - a reverse gas fee NFT minting page</a>
              <a href="https://moviereviewsmy.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-cyan-400 underline underline-offset-2">B - a movie ranking web</a>
              <a href="https://sayapniaga.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-cyan-200 underline underline-offset-2">C - a car dealership MVP</a>
              <a href="https://countrydarkmode.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-cyan-400 underline underline-offset-2">D - an interview test ui</a>
              <a href="https://countrydarkmode.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-cyan-200 underline underline-offset-2">E - a mockup coffee shop</a>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 7,
      title: "Title 7",
      subtitle: "Subtitle 7",
      content: (
        <div ref={contactRef} className="w-[40%] lg:w-[50%] pl-5 flex flex-col justify-center items-start lg:items-end">

          <p className="absolute right-2 mb-[52vh] lg:text-2xl lg:right-10 font-mono text-xl justify-start lg:mr-[320px]">Contact</p>
          <div className="flex flex-col gap-6">
            
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="flex justify-start z-20">
              <button value="phoneSection" onClick={() => contactSectionHandler("phoneSection")}>
                <div className="flex">
                  <PhoneIcon className="text-white bg-gradient-to-r from-green-700 to-emerald-400 rounded-full self-center p-[0.7rem] min-w-[60px] h-[60px] lg:p-[0.8rem] lg:w-[60px] lg:h-[60px]"/>
                  <div className="bg-neutral-900/[85%] ml-4 w-[100%] p-2 rounded">
                    <div className="flex flex-col items-start h-[60px]">
                      <span className="text-white font-mono font-bold px-4 text-sm lg:text-[20px] h-[30px] tracking-widest">Phone</span>
                      <span className="flex items-center bg-blue-300/10 rounded text-cyan-200 font-mono text-[10px] h-[30px] lg:text-[0.7rem] px-4 tracking-widest">+60127710626</span>
                    </div>
                  </div>
                </div>
              </button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="flex justify-start z-20">
                <button value="emailSection" onClick={() => contactSectionHandler("emailSection")}>
                  <div className="flex">
                    <InboxIcon className="text-white bg-gradient-to-r from-sky-700 to-sky-400 rounded-full self-center p-[0.7rem] min-w-[60px] h-[60px] lg:p-[0.8rem] lg:w-[60px] lg:h-[60px]"/>
                    <div className="bg-neutral-900/[85%] ml-4 w-[100%] p-2 rounded">
                      <div className="flex flex-col items-start h-[60px]">
                        <span className="text-white font-mono font-bold px-4 text-sm lg:text-[20px] h-[30px] tracking-widest">Email</span>
                        <span className="flex items-center bg-blue-300/10 rounded text-cyan-200 font-mono text-[10px] h-[30px] lg:text-[0.7rem] px-4 tracking-widest">solah.eth@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </button>
              </motion.div>
              
              <div className="flex justify-start z-20">
                  <div className="flex">
                    <MapPinIcon className="text-white bg-gradient-to-r from-red-700 to-red-400 rounded-full self-center p-[0.7rem] min-w-[60px] h-[60px] lg:p-[0.8rem] lg:w-[60px] lg:h-[60px]"/>
                    <div className="bg-neutral-900/[85%] ml-4 w-[100%] h-[130%] p-2 rounded">
                      <div className="flex flex-col items-start h-[60px] gap-2">
                        <span className="text-white font-mono font-bold px-4 text-sm lg:text-[20px] h-[30px] tracking-widest">Location</span>
                        <span className="flex items-center bg-blue-300/10 rounded text-white font-mono text-[10px] h-[30px] lg:text-[0.7rem] px-4 tracking-widest text-start">Kuala Lumpur, Malaysia </span>
                        <span className="flex items-center text-white font-mono text-[10px] h-[30px] text-[8px] px-4 tracking-widest text-start">Okay with relocating ✅</span>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

 
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col z-10 px-2 relative min-h-screen"> 

      <div className="absolute top-0 left-0 w-full z-40">
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

      {/* Footer - Github and Linkedin */}
      {/* <div className="fixed bottom-0 flex left-0 mb-6 ml-[100px] gap-x-4 justify-start lg:justify-start">
        <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} ><a target="_blank" rel="noreferrer" href="https://github.com/solahidris"><SiGithub className="w-[1.7rem] h-[1.7rem] lg:w-[2rem] lg:h-[2rem] hover:text-yellow-300 text-neutral-100/50"/></a></motion.button>
        <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} ><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/solahuddinidris/"><SiLinkedin className="w-[1.7rem] h-[1.7rem] lg:w-[2rem] lg:h-[2rem] hover:text-cyan-300 text-neutral-100/50"/></a></motion.button>
      </div> */}
      
      {/* Footer - Scroll to Top Function */}
      {/* <div className="fixed bottom-0 left-0 bg-red-4000 p-5 z-[200px]">
        <motion.button whileTap={{ scale: 0.80 }} whileHover={{ scale: 1.1 }} onClick={() => {homeRef.current!.scrollIntoView({ behavior: 'smooth' })}} className="bg-neutral-900 w-[50px] h-[50px] rounded flex items-center justify-center">
          <span><ChevronDoubleUpIcon className="w-[40px] h-[40px] text-white/20"/></span>
        </motion.button>
      </div> */}
      
    </div>
  );
}

export default ParallexPage;