/* eslint-disable react/react-in-jsx-scope */
import { motion } from "motion/react";

function ShowUpAnn() {
  const Show = {
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
    <motion.div
      variants={DropAnimation}
      initial="hidden"
      animate="visible"
      exit="hidden"
    ></motion.div>
  );
}

export default ShowUpAnn;
