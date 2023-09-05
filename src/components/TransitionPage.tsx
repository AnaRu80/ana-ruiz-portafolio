import { motion } from 'framer-motion'

const variants = {
  initial: {
    scaleY: 0
  },
  animate: {
    scaleY: 0,
  },
  exit: {
    scaleY: 1,
  }

}
const variants2 = {
  initial: {
    scaleY: 1
  },
  animate: {
    scaleY: 0,

  },
  exit: {
    scaleY: 0,
  }
}


export function TransitionPage({ children }: any) {
  return (
    < >
      {children}
      <motion.div
        key={"transition"}
        className='fixed top-0 left-0 w-full h-full bg-black z-50 transform origin-bottom'
        variants={variants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
      </motion.div>

      <motion.div
        className='fixed top-0 left-0 w-full h-full bg-black z-50 transform origin-top'
        variants={variants2}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  )
}
