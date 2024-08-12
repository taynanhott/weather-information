import { motion } from "framer-motion";
import "./index.css";

export default function Cloud() {
  return (
    <div className="cloud-container z-10">
      <motion.div
        className="cloudy-1"
        initial={{ y: -400, scale: 1.3 }}
        animate={{ y: 0, scale: 1.3 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="cloudy-2"
        initial={{ y: -400, scale: 1.4 }}
        animate={{ y: 0, scale: 1.4 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
}
