import { motion } from 'framer-motion';

const cloudVariants = {
  topOne: {
    initial: { x: '50vw', y: '40vh', scale: 4 },
    animate: { x: '250vw', y: '40vh', scale: 4 },
  },
  topTwo: {
    initial: { x: '50vw', y: '30vh', scale: 5 },
    animate: { x: '-250vw', y: '30vh', scale: 5 },
  },
  bottomThree: {
    initial: { x: '50vw', y: '-10vh', scale: 3 },
    animate: { x: '200vw', y: '-10vh', scale: 3 },
  },
  bottomFour: {
    initial: { x: '50vw', y: '-20vh', scale: 2 },
    animate: { x: '-200vw', y: '-20vh', scale: 2 },
  }
};

export default function Welcome() {

  const largura = window.innerWidth;

  return (
    <div className="relative z-50">
      <motion.div
        className="w-[275px] h-[75px] fixed rounded-full bg-white"
        variants={cloudVariants.topOne}
        initial="initial"
        animate="animate"
        transition={{ duration: largura < 674 ? 6 : 11, ease: "easeInOut" }}
      >
        <div className="relative w-full h-full bg-white rounded-full before:absolute before:-top-12 before:left-10 before:w-28 before:h-24 before:bg-white before:rounded-full before:shadow-[90px_0_0_0px_white]" />
      </motion.div>

      <motion.div
        className="w-[275px] h-[75px] fixed rounded-full bg-white"
        variants={cloudVariants.topTwo}
        initial="initial"
        animate="animate"
        transition={{ duration: largura < 674 ? 5 : 10, ease: "easeInOut" }}
      >
        <div className="relative w-full h-full bg-white rounded-full before:absolute before:-top-12 before:left-10 before:w-28 before:h-24 before:bg-white before:rounded-full before:shadow-[90px_0_0_0px_white]" />
      </motion.div>

      <motion.div
        className="w-[275px] h-[75px] fixed rounded-full bg-white"
        variants={cloudVariants.bottomThree}
        initial="initial"
        animate="animate"
        transition={{ duration: largura < 674 ? 7 : 14, ease: "easeInOut" }}
      >
        <div className="relative w-full h-full bg-white rounded-full before:absolute before:-top-12 before:left-10 before:w-28 before:h-24 before:bg-white before:rounded-full before:shadow-[90px_0_0_0px_white]" />
      </motion.div>

      <motion.div
        className="w-[275px] h-[75px] fixed rounded-full bg-white"
        variants={cloudVariants.bottomFour}
        initial="initial"
        animate="animate"
        transition={{ duration: largura < 674 ? 7 : 14, ease: "easeInOut" }}
      >
        <div className="relative w-full h-full bg-white rounded-full before:absolute before:-top-12 before:left-10 before:w-28 before:h-24 before:bg-white before:rounded-full before:shadow-[90px_0_0_0px_white]" />
      </motion.div>
    </div>
  );
}
