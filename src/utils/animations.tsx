export const DropAnimation = {
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
