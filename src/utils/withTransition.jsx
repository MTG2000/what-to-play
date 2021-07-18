import { motion } from "framer-motion";

export const withTransition = (BaseComponent) => (props) => (
  <motion.div
    initial={{ opacity: 0, x: "100vw" }}
    animate={{ opacity: 1, x: 0, transition: { type: "spring" } }}
    exit={{ opacity: 0, x: "-100vw", transition: { ease: "easeInOut" } }}
  >
    <BaseComponent {...props} />
  </motion.div>
);
