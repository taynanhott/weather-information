import { motion } from "framer-motion";
import "./index.css";

export default function Rain() {
  return (
    <div className="rain-container">
      <motion.div
        animate={{
          y: [0, 5, 0],
          x: [0, 8, 0],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 3,
        }}
      >
        <motion.div
          className="rain-1"
          initial={{ y: -400, scale: 1.3 }}
          animate={{ y: 0, scale: 1.3 }}
          transition={{
            duration: 3,
            ease: "easeInOut",
          }}
        ></motion.div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 5, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 3,
        }}
      >
        <motion.div
          className="rain-2"
          initial={{ y: -400, scale: 1.3 }}
          animate={{ y: 0, scale: 1.3 }}
          transition={{
            duration: 3,
            ease: "easeInOut",
          }}
        ></motion.div>
      </motion.div>
    </div>
  );
}
