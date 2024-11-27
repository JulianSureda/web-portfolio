/* eslint-disable react/react-in-jsx-scope */
import { DropAnimation } from "./animations/animations";
import NavBar from "./components/NavBar";
import { motion } from "motion/react";

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
        <div className="text-[7rem] font-poppins font-bold text-white mt-[5%] ml-[5%] select-none">
          JULIAN SUREDA
        </div>
        <div className="text-3xl font-poppins text-gray-500 m-[0%] ml-[5%] select-none w-[55%] ">
          <span className="font-bold text-white">Software Developer</span>, and
          Ph.D in Computer Science, Studying a{" "}
          <span className="bg-clip-text text-transparent bg-highlight">
            Masters degree
          </span>{" "}
          in AI
        </div>
      </motion.div>
    </div>
  );
}

export default App;
