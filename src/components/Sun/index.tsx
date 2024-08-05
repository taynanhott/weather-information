import { motion } from "framer-motion";
import "./index.css";

export default function Sun() {
  return (
    <div className="sun-top">
      <motion.div
        className="sun"
        initial={{ y: -400 }}
        animate={{ y: 0 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      ></motion.div>
      <div className="raios raio-1"></div>
    </div>
  );
}
