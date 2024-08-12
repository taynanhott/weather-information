import { motion } from "framer-motion";
import "./index.css";

export default function Rain() {
  return (
    <div className="rain-container">
      <motion.div
        className="rain-1"
        initial={{ y: -200, scale: 1.3 }}
        animate={{ y: 0, scale: 1.3 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="rain-2"
        initial={{ y: -200, scale: 1.4 }}
        animate={{ y: 0, scale: 1.4 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
}
