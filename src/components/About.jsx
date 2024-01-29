import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full ">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col "
      >
        <img
          src={icon}
          alt="web-development"
          className="w-24 h-24 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] text-orange-500 max-w-3xl leading-[30px] rounded-2xl bg-gradient-to-l hover:bg-gradient-to-r from-pink-500/30"
      >
        I'm a Mern stack developer with experience in Watson AI, Database, JavaScript frameworks like React, Node.js, and Express.js and Jquery. 
        <br/>I started career as a Field Service Specialist in  Critical care equipment's like Defibrillator, ventilator, Patient monitor and Pacemaker. Later in covid-pandemic, 
        I switched to IT industry by learning basic skills of coding. In the process of self-growth in my current job. I learned methods of Artificial Intelligence using IBM
        Watson AI and started developing chatbots. To advance in AI and implement in live applications, developed a web-development skill called MERN stack in collaboration
        with AWS, as a Full-stack developer and I also developed external scripting projects in it. Currently working in the AI based software called CLAUDE used in modern 
        Catalog Automation of E-commerce products.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");