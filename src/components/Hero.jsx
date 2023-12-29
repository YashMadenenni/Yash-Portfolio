import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import TypeWriterEffect from "react-typewriter-effect";
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute 
      inset-0 top-[120px] max-w-7xl
      flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#F3BD3C]" />
          <div className="w-1 sm:h-80 h-96 bg-gradient-to-t from-yellow-0 via-yellow-200 to-yellow-400   " />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm
            <span className="text-[#F3BD3C]">Yash</span>
          </h1>
          <div
            className={`${styles.heroSubText} mt-2  bg-gradient-to-r from-red-500 to-white-100 bg-clip-text text-transparent`}
          >
            <TypeWriterEffect
              textStyle={{
                 color: "#F3BD3C",
                textShadow:
                  "0px 0px 6px #F3BD3C",
              }}
              // startDelay={1000}
              cursorColor="#F3BD3C"
              multiText={[
                "Full stack developer",
                "MERN stack developer",
                "Software Engineer",
                "Web development enthusiast",
              ]}
              multiTextDelay={1000}
              typeSpeed={30}
              multiTextLoop
            />
          </div>
        </div>
      </div>
      <ComputersCanvas />

      <div
        className="absolute xs:bottom-1
      bottom-20 w-full flex justify-center items-center "
      >
        <a href="#about">
          <div
            className=" w-[35px] h-[64px] 
          rounded-3xl border-4 border-[#F3BD3C]
          flex justify-center items-start p-2"
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#F3BD3C] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
