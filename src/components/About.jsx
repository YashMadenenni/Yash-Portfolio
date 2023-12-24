import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

import "../../src/About.css";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justsify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />
        <h3
          className="text-white text-[20px] 
          font-bold text-center"
        >
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <div className="flex sm:flex-row flex-col mt-10">
        <motion.div 
        variants={fadeIn("right","spring", 0.1, 2)}
        className="about_img mx-auto bg-[#7549d5bb] mt-5" alt="user_image"></motion.div>

        <div className=" sm:w-1/2 w-full text-justify px-5">
          <motion.p
            variants={fadeIn("up", " spring", 0.1, 2)}
            className="mt-4 text-secoundary sm:text-[17px] text-[15px]  leading-[30px] "
          >
            I am an 2023 MSc graduate from the University of St Andrews
            with experience in various fields such as Java, B2B and B2C
            services, web development, RESTful Services, and academic exposure
            to MERN (Mongo DB, Express JS, React, Node JS) stack projects. My
            strong technical skill set as a full-stack developer has enabled me
            to deliver robust, reliable, and scalable solutions. I possess a
            deep understanding of web development frameworks, database systems,
            software architecture, and software engineering methodologies like
            Kanban and Agile, which gives me the confidence to succeed in any
            organization.
          </motion.p>
        </div>
      </div>

      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
