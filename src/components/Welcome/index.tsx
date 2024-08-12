import { motion } from 'framer-motion';


const largura = window.innerWidth;

const cloudVariants = {
  topOne: {
    initial: { x: largura < 674 ? '50vw' : '60vw', y: largura < 674 ? '40vh' : '40vh', scale: 4 },
    animate: { x: largura < 674 ? '300vw' : '250vw', y: largura < 674 ? '40vh' : '40vh', scale: 6 },
  },
  topTwo: {
    initial: { x: largura < 674 ? '50vw' : '30vw', y: largura < 674 ? '25vh' : '25vh', scale: 5 },
    animate: { x: largura < 674 ? '-250vw' : '-250vw', y: largura < 674 ? '25vh' : '25vh', scale: 5 },
  },
  bottomThree: {
    initial: { x: largura < 674 ? '50vw' : '50vw', y: largura < 674 ? '-10vh' : '-10vh', scale: 3 },
    animate: { x: largura < 674 ? '250vw' : '200vw', y: largura < 674 ? '-10vh' : '0vh', scale: 3 },
  },
  bottomFour: {
    initial: { x: largura < 674 ? '50vw' : '50vw', y: largura < 674 ? '-30vh' : '-30vh', scale: 2 },
    animate: { x: largura < 674 ? '-250vw' : '-200vw', y: largura < 674 ? '-30vh' : '-10vh', scale: 4 },
  }
};

export default function Welcome() {
  return (
    <div className="relative z-50">

      <motion.div
        className="w-[275px] h-[75px] fixed rounded-full bg-slate-100"
        variants={cloudVariants.bottomFour}
        initial="initial"
        animate="animate"
        transition={{ duration: largura < 674 ? 7 : 14, ease: "easeInOut" }}
      >
        <div className="relative w-full h-full bg-slate-100 rounded-full before:absolute before:-top-12 before:left-10 before:w-28 before:h-24 before:bg-slate-100 before:rounded-full before:shadow-[90px_0_0_0px_#f1f5f9;]" />
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
        variants={cloudVariants.topTwo}
        initial="initial"
        animate="animate"
        transition={{ duration: largura < 674 ? 5 : 13, ease: "easeInOut" }}
      >
        <div className="relative w-full h-full bg-white rounded-full before:absolute before:-top-12 before:left-10 before:w-28 before:h-24 before:bg-white before:rounded-full before:shadow-[90px_0_0_0px_white]" />
      </motion.div>

      <motion.div
        className="w-[275px] h-[75px] fixed rounded-full bg-slate-100"
        variants={cloudVariants.topOne}
        initial="initial"
        animate="animate"
        transition={{ duration: largura < 674 ? 6 : 11, ease: "easeInOut" }}
      >
        <div className="relative w-full h-full bg-slate-100 rounded-full before:absolute before:-top-12 before:left-10 before:w-28 before:h-24 before:bg-slate-100 before:rounded-full before:shadow-[90px_0_0_0px_#f1f5f9;]" />
      </motion.div>
    </div>
  );
}
