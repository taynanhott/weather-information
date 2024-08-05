import { motion } from "framer-motion";
import "./index.css";

export default function Rain() {
  return (
    <div className="rain-container">
      <motion.div
        className="rain-1"
        initial={{ y: -400 }}
        animate={{ y: 0 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="rain-2"
        initial={{ y: -400 }}
        animate={{ y: 0 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
}
