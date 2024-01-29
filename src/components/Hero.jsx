import { motion } from "framer-motion";


import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={"absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5"}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#eab308] " />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-lime-500  " />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} `}>
            Hey! I am <span className='text-lime-400  font-family: sans-serif'>Harshavardhan</span>
            
          </h1>
          <br/>
          <br/>
          <br/>
          <p className={`${styles.heroSubText} mt-2 bg-gradient-to-r from-purple-950 `}>
            | Full Stack Developer | Chatbot Developer | 
            <br className="sm:block hidden " />
            <br/>
            Feel free to connect with me! Finding episodes in every connect.
          </p>

          <br/>
          <br/>
        
          
         
        </div>

        

        
      </div>

      <ComputersCanvas />

      
      <div  className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center text-lime-300 text-[24px] ">
      <p >Press button &nbsp;&nbsp;&nbsp;&nbsp;</p>
        <a href='#about'>
        
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center   items-start p-2">
          
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-lime-400 mb-1"
            />
            </div>
            </a>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;to go down</span>
      </div>
    </section>
  );
};

export default Hero;