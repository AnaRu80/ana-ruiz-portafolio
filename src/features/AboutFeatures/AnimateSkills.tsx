import { useEffect, useRef } from "react";
import { useInView, motion, useAnimation } from "framer-motion";

const sectionVariants = {
  visible: {
    opacity: 1, scale: 1, transition: {
      duration: 1, delay: 0.25, delayChildren: 0.25, type: "spring", bounce: .4
    }
  },
  hidden: { opacity: 0, scale: 4 }
};

function Section({ children }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {

    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      variants={sectionVariants}
      ref={ref}
      animate={isInView ? "visible" : "hidden"}
      initial="hidden"
    >

      {children}
    </motion.div>
  );
}

export default Section;