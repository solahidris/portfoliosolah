// directory: ./components/ParallexPage.tsx

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform, MotionValue, Variants, useMotionValue } from "framer-motion";
import BlobAnimation from "./BlobAnimation";
import { MapPinIcon, InboxIcon, PhoneIcon, GlobeAsiaAustraliaIcon } from "@heroicons/react/20/solid";
import { SiGithub, SiLinkedin } from "react-icons/si";
import ProfileGithubCards from "./ProfileGithubCards";

import { scroll } from "framer-motion/dom";


const BlobImageParallax = ({ id }: { id: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 250);

  return (
    <section className="w-full w-[60%] lg:w-[50%]">
      <div className="w-full bg-transparent flex items-center">
        <BlobAnimation /> {/* Use the BlobAnimation component here */}
      </div>
      <motion.h2 style={{ y }} className="absolute top-[65vh] right-0 lg:right-20 font-mono text-xs">{`#00${id}`}</motion.h2>
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
    <section className={` ${(id === 3) ? "w-[8%]" : "w-full w-[60%] lg:w-[50%]"}`}>
      <div
        ref={ref} className="w-full bg-transparent lg:ml-[-300px]"
      >
        {(id !== 3 && id !== 9 && id !== 10 && id !== 11 ) && <Image src={`/${id}.jpg`} alt="ImageParallex" width={300} height={300} className="min-w-[185px] min-h-[400px] object-contain"/>}
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
    restDelta: 0.001,
  });

 // Wheel Progress - Grab the progress wheel
 const progressWheel = document.querySelector<SVGSVGElement>('.progress');

 // Wheel Progress - Using useEffect to handle updates based on scroll progress
 useEffect(() => {
  const timeout = setTimeout(() => {
  }, 4000);

  const progressWheel = document.querySelector<SVGSVGElement>('.progress');
  scroll((progress) => {
    if (progressWheel) {
      progressWheel.style.strokeDasharray = `${progress}, 1`;
    }
  });

  return () => clearTimeout(timeout);
}, [scrollYProgress]);

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
        <div className="w-[40%] lg:w-[50%] ml-5 flex flex-col justify-center items-start lg:items-end">
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
        <div className="w-[40%] lg:w-[50%] pl-5 flex flex-col justify-center items-start lg:items-end">
          <p className="absolute right-2 mb-[58vh] lg:text-2xl lg:right-10 font-mono text-xl justify-start lg:mr-[320px]">Tech Stack</p>
          <div className="absolute bg-neutral-900/[85%] w-[30%] p-3 rounded">
            <p className="font-mono text-xs">These are my Tech Stacks</p>
            <p className="font-mono text-xs">Full-stack applications development</p>
            <p className="font-mono text-xs h-[50px] lg:h-[0px] lg:mb-[15px]">Specializing in Frontend</p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Title 3",
      subtitle: "Subtitle 3",
      content: (
        <div>
          <div className="w-[40%] lg:w-[50%] pl-5 flex flex-col justify-center items-start lg:items-end">
            <p className="absolute right-2 mt-[40vh] lg:text-2xl lg:right-10 font-mono text-xl justify-start lg:mr-[320px]">Github</p>
          </div>
          <ProfileGithubCards />
        </div>
      ),
    },
    {
      id: 4,
      title: "Title 4",
      subtitle: "Subtitle 4",
      content: (
        <div className="w-[40%] lg:w-[50%] pl-5 flex flex-col justify-center items-start lg:items-end">
          <p className="absolute right-2 mb-[58vh] lg:text-2xl lg:right-10 font-mono text-xl justify-start lg:mr-[320px]">Projects</p>
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
      id: 5,
      title: "Title 5",
      subtitle: "Subtitle 5",
      content: (
        <div className="w-[40%] lg:w-[50%] pl-5 flex flex-col justify-center items-start lg:items-end">
          <p className="absolute right-2 mb-[58vh] lg:text-2xl lg:right-10 font-mono text-xl justify-start lg:mr-[320px]">Projects</p>
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
      id: 6,
      title: "Title 6",
      subtitle: "Subtitle 6",
      content: (
        <div className="w-[40%] lg:w-[50%] pl-5 flex flex-col justify-center items-start lg:items-end">
          <p className="absolute right-2 mb-[58vh] lg:text-2xl lg:right-10 font-mono text-xl justify-start lg:mr-[320px]">Projects</p>
          <div className="absolute bg-neutral-900/[85%] w-[30%] p-3 rounded">
            <p className="font-mono text-xs">Project/ 2023-C</p>
            <p className="flex">
              <a href="https://banzion.com/" target="_blank" rel="noopener noreferrer" className="hidden lg:inline font-mono text-xs text-cyan-200 underline underline-offset-2">banzion.com</a>
              <a href="https://banzion.com/" target="_blank" rel="noopener noreferrer" className="lg:hidden font-mono text-xs text-cyan-200 underline underline-offset-2">banzion<br/>.com</a>
            </p>
            <span className="font-mono text-xs">{"// a blacklist company filter"}</span>
          </div>
        </div>
      ),
    },
    {
      id: 7,
      title: "Title 7",
      subtitle: "Subtitle 7",
      content: (
        <div className="w-[40%] lg:w-[50%] pl-5 flex flex-col justify-center items-start lg:items-end">
          <p className="absolute right-2 mb-[58vh] lg:text-2xl lg:right-10 font-mono text-xl justify-start lg:mr-[320px]">Projects</p>
          <div className="absolute bg-neutral-900/[85%] w-[30%] p-3 rounded">
            <p className="font-mono text-xs">Project/ 2024-A</p>
            <p className="flex">
              <a href="https://notesappv3.vercel.app/about" target="_blank" rel="noopener noreferrer" className="hidden lg:inline font-mono text-xs text-cyan-200 underline underline-offset-2">notá</a>
              <a href="https://notesappv3.vercel.app/about" target="_blank" rel="noopener noreferrer" className="lg:hidden font-mono text-xs text-cyan-200 underline underline-offset-2">notá<br/>.com</a>
            </p>
            <span className="font-mono text-xs">{"// an eisenhower matrix to-do list"}</span>
          </div>
        </div>
      ),
    },
    // {
    //   id: 8,
    //   title: "Title 8",
    //   subtitle: "Subtitle 8",
    //   content: (
    //     <div className="w-[40%] lg:w-[50%] pl-5 flex flex-col justify-center items-start lg:items-end">
    //       <p className="absolute right-2 mb-[58vh] lg:text-2xl lg:right-10 font-mono text-xl justify-start lg:mr-[320px]">Projects</p>
    //       <div className="absolute bg-neutral-900/[85%] w-[30%] p-3 rounded">
    //         <p className="font-mono text-xs">Project/ 2023-C</p>
    //         <p className="flex">
    //           <a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer" className="hidden lg:inline font-mono text-xs text-cyan-200 underline underline-offset-2">solat.eth</a>
    //           <a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer" className="lg:hidden font-mono text-xs text-cyan-200 underline underline-offset-2">solat<br/>.eth</a>
    //         </p>
    //         <span className="font-mono text-xs">{"// a prayer time mobile app"}</span>
    //       </div>
    //     </div>
    //   ),
    // },
    {
      id: 8,
      title: "Title 8",
      subtitle: "Subtitle 8",
      content: (
        <div className="w-[40%] lg:w-[50%] pl-5 flex flex-col justify-center items-start lg:items-end">
          <p className="absolute right-2 mb-[58vh] lg:text-2xl lg:right-10 font-mono text-xl justify-start lg:mr-[320px]">Other Projects</p>
          <div className="absolute bg-neutral-900/[85%] w-[30%] p-3 rounded">
            <p className="font-mono text-xs">Things I&apos;ve coded for fun / iv test previously</p>
            <div className="flex flex-col gap-2 flex-wrap">
              <a href="https://kasutkicks-nft.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-cyan-200 underline underline-offset-2">A - a reverse gas fee NFT minting page</a>
              <a href="https://moviereviewsmy.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-cyan-400 underline underline-offset-2">B - a movie ranking web</a>
              <a href="https://sayapniaga.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-cyan-200 underline underline-offset-2">C - a car dealership MVP</a>
              <a href="https://countrydarkmode.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-cyan-400 underline underline-offset-2">D - an interview test ui</a>
              <a href="https://coffeeandkicks.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-cyan-200 underline underline-offset-2">E - a mockup coffee shop</a>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 9,
      title: "Title 9",
      subtitle: "Subtitle 9",
      content: (
        <div className="w-[40%] lg:w-[50%] pl-5 flex flex-col justify-center items-start lg:items-end">

          <p className="absolute right-2 mb-[58vh] lg:text-2xl lg:right-10 font-mono text-xl justify-start lg:mr-[320px]">Contact</p>
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
              
              <div className="flex justify-start z-20 ">
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
    {
      id: 10,
      title: "Title 10",
      subtitle: "Subtitle 10",
      content: (
        <div className="min-h-[100vh] w-[85%] lg:w-[85%] pl-5 flex flex-col justify-center items-start lg:items-end">
          <motion.button whileTap={{ scale:0.95 }} whileHover={{ scale:1.1 }} value="emailSection" onClick={() => contactSectionHandler("emailSection")} className="text-center w-[100vw] lg:w-[50%] flex justify-center">
            <span className="text-xl lg:text-lg font-mono bg-cyan-400/80 text-white/80 px-3 py-1 rounded" >Email me</span>
          </motion.button>
          <p className="font-mono text-sm text-center w-[100vw] lg:w-[50%] flex justify-center pt-2">if you think im a great fit</p>
        </div>
      ),
    },
    {
      id: 11,
      title: "Title 11",
      subtitle: "Subtitle 11",
      content: (
        <div className="min-h-[100vh] w-[40%] lg:w-[80%] pl-5 flex flex-col justify-center items-start lg:items-end">
          <p className="font-mono text-xl text-center w-[100vw] lg:w-[50%] pb-5 lg:pb-20 flex justify-center">Thanks for browsing</p>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col z-10 px-2 relative min-h-screen"> 
      <svg width="50" height="50" viewBox="0 0 100 100" className="progress-wheel">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <circle cx="50" cy="50" r="30" pathLength="1" className="progress" />
      </svg>
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