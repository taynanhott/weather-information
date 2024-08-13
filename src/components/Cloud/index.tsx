import { motion } from "framer-motion";
import "./index.css";

export default function Cloud() {
  return (
    <div className="cloud-container z-10">
      <motion.div
        animate={{
          y: [0, 5, 0],
          x: [0, 8, 0],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 3,
        }}
      >
        <motion.div
          className="cloudy-1"
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
          className="cloudy-2"
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

