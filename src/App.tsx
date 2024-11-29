/* eslint-disable react/react-in-jsx-scope */
import { DropAnimation } from "./utils/animations";
import NavBar from "./components/NavBar";
import { motion } from "motion/react";
import TextShine from "@/components/ui/animated-shiny-text";

function App() {
  return (
    <div className="w-screen h-screen bg-[#02060b]">
      <NavBar></NavBar>
      <motion.div
        variants={DropAnimation}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div>
          <TextShine
            shimmerWidth={100}
            className="text-[7rem] font-poppins font-bold text-white mt-[5%] ml-[5%] select-none w-fit whitespace-nowrap"
          >
            JULIAN SUREDA
          </TextShine>
        </div>
        <div className="text-3xl font-poppins text-gray-500 m-[0%] ml-[5%] select-none w-[55%] ">
          <span className="font-bold text-white">Software Developer</span>, and
          Ph.D in Computer Science, Studying a{" "}
          <span className="bg-clip-text text-transparent bg-highlight">
            Masters degree
          </span>{" "}
          in AI
        </div>
        <div>
          <motion.button
            className="font-bold rounded-xl text-xl ml-[5%] mt-[5%] w-28 h-12 bg-[#37415143] text-[#ffffff] justify-center flex-col"
            whileHover={{ color: "#47b9ff" }}
            transition={{ type: "EaseOut", stiffness: 100 }}
          >
            GitHub
          </motion.button>
          <motion.button
            className="font-bold rounded-xl text-xl ml-[2%] mt-[5%] w-28 h-12 bg-[#37415143] text-[#ffffff] justify-center flex-col"
            whileHover={{ color: "#47b9ff" }}
            transition={{ type: "EaseOut", stiffness: 100 }}
          >
            LinkedIn
          </motion.button>
          <motion.button
            className="font-bold rounded-xl text-xl ml-[2%] mt-[5%] w-28 h-12 bg-[#37415143] text-[#ffffff] justify-center flex-col"
            whileHover={{ color: "#47b9ff" }}
            transition={{ type: "EaseOut", stiffness: 100 }}
          >
            Email
          </motion.button>
          <motion.button
            className="font-bold rounded-xl text-xl ml-[2%] mt-[5%] w-28 h-12 bg-[#37415143] text-[#ffffff] justify-center flex-col"
            whileHover={{ color: "#47b9ff" }}
            transition={{ type: "EaseOut", stiffness: 100 }}
          >
            Resume
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
