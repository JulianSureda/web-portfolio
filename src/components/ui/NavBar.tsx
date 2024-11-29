/* eslint-disable react/react-in-jsx-scope */
import { motion } from "motion/react";
import { DropAnimation } from "@/utils/animations";

function NavBar() {
  return (
    <motion.nav
      variants={DropAnimation}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="w-screen h-[8vh] bg-[#02060b] flex items-center">
        <img
          src="src\assets\logo.svg"
          alt="icon"
          draggable="false"
          className="ml-5 h-12 w-12"
        />
        <motion.div
          className="text-white text-lg ml-5 select-none font-poppins"
          whileHover={{ color: "#47b9ff" }}
          transition={{ type: "EaseOut", stiffness: 100 }}
        >
          Introducction
        </motion.div>
        <motion.div
          className="text-white text-lg ml-5 select-none font-poppins"
          whileHover={{ color: "#47b9ff" }}
          transition={{ type: "EaseOut", stiffness: 100 }}
        >
          knowledge
        </motion.div>
        <motion.div
          className="text-white text-lg ml-5 select-none font-poppins"
          whileHover={{ color: "#47b9ff" }}
          transition={{ type: "EaseOut", stiffness: 100 }}
        >
          Experience
        </motion.div>
        <motion.div
          className="text-white text-lg ml-5 select-none font-poppins"
          whileHover={{ color: "#47b9ff" }}
          transition={{ type: "EaseOut", stiffness: 100 }}
        >
          Contact
        </motion.div>
      </div>
    </motion.nav>
  );
}

export default NavBar;
