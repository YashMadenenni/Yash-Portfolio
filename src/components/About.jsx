import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
// import Spin from "react-reveal/Spin";
import { Icon } from '@iconify/react';

import yashCV from "../assets/resume/YashwanthMadenenni.pdf"
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
          variants={fadeIn("right", "spring", 0.1, 2)}
          className="about_img mx-auto bg-[#7549d5bb] mt-5"
          alt="user_image"
        ></motion.div>

        <div className=" sm:w-1/2 w-full text-justify px-5">
          <motion.p
            variants={fadeIn("up", " spring", 0.1, 2)}
            className="mt-4 text-secoundary sm:text-[17px] text-[15px]  leading-[30px] "
          >
            I am an 2023 MSc graduate from the University of St Andrews with
            experience in various fields such as Java, B2B and B2C services, web
            development, RESTful Services, and academic exposure to MERN (Mongo
            DB, Express JS, React, Node JS) stack projects. My strong technical
            skill set as a full-stack developer has enabled me to deliver
            robust, reliable, and scalable solutions. I possess a deep
            understanding of web development frameworks, database systems,
            software architecture, and software engineering methodologies like
            Kanban and Agile, which gives me the confidence to succeed in any
            organization.
          </motion.p>
          <motion.div variants={fadeIn("up", " spring", 0.1, 2)}
           className=" flex sm:flex-row flex-col justify-between mt-4 ">
            <div className=" flex flex-row gap-4 justify-center my-4 ">
            <a
              href="https://www.linkedin.com/in/yashwanth-kumar-m-s-8826951b6/"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <Icon icon="uil:linkedin-alt" color="#7549d5bb" width="30" height="30"/>
            </a>
          
            <a
              href="https://github.com/YashMadenenni"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <Icon icon="uil:github-alt" color="#7549d5bb" width="30" height="30"/>
            </a>
            </div>

            <div className="mx-auto sm:mx-0">
            <a href={yashCV}
            target="_blank"
            rel="noopener noreferrer">
            <button type="button" className="text-white bg-gradient-to-r
            from-purple-500 via-purple-600 to-purple-700 
            hover:bg-gradient-to-br 
            focus:ring-4 
            focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 
            dark:shadow-lg dark:shadow-purple-800/80 font-medium 
            rounded-lg text-sm px-5 py-2.5 
            text-center me-2 mb-2 inline-flex items-center justify-center w-60 sm:w-full">
              Download CV
              <Icon icon="lucide:arrow-down-to-line" color="white" width="25" height="25" />
              </button>
            </a>
            </div>

          </motion.div>
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
