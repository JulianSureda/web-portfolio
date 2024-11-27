/* eslint-disable react/react-in-jsx-scope */
import { motion } from "motion/react";

function NavBar() {
  const DropAnimation = {
    hidden: {
      opacity: 0,
      y: -50, // Move the navbar up initially
    },
    visible: {
      opacity: 1,
      y: 0, // Move the navbar to its normal position
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 25, // Smooth animation
        delay: 0.2, // Add a slight delay before it appears
      },
    },
  };
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
          className="ml-5 h-14 w-14"
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
