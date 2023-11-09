import { motion } from "framer-motion";
import { ChevronDoubleUpIcon } from "@heroicons/react/20/solid";
import { SiGithub, SiLinkedin } from "react-icons/si";

const PageFooter = () => {
  return (
    <div>
      {/* Footer - Github and Linkedin */}
      <div className="fixed bottom-0 flex left-0 mb-6 ml-[100px] gap-x-4 justify-start lg:justify-start">
        <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/solahidris"
          >
            <SiGithub className="w-[1.7rem] h-[1.7rem] lg:w-[2rem] lg:h-[2rem] hover:text-yellow-300 text-neutral-100/50" />
          </a>
        </motion.button>
        <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/solahuddinidris/"
          >
            <SiLinkedin className="w-[1.7rem] h-[1.7rem] lg:w-[2rem] lg:h-[2rem] hover:text-cyan-300 text-neutral-100/50" />
          </a>
        </motion.button>
      </div>

      {/* Footer - Scroll to Top Function */}
      <div className="fixed bottom-0 left-0 bg-red-4000 p-5 z-[200px]">
        <motion.button
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          // onClick={() => {
          //   homeRef.current!.scrollIntoView({ behavior: "smooth" });
          // }}
          className="bg-neutral-900 w-[50px] h-[50px] rounded flex items-center justify-center"
        >
          <span>
            <ChevronDoubleUpIcon className="w-[40px] h-[40px] text-white/20" />
          </span>
        </motion.button>
      </div>
    </div>
  );
};

export default PageFooter;
