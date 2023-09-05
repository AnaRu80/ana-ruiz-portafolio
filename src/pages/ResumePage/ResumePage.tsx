import CVImgPart1 from '../../assets/cv/Ana_Ruiz_App_Web_FrontEnd_1.png';
import CVImgPart2 from '../../assets/cv/Ana_Ruiz_App_Web_FrontEnd_2.png';
import CVFile from '../../assets/cv/Ana_Ruiz_App_Web_FrontEnd.pdf';
import { Button, TransitionPage, Text } from '../../components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {
  TransformWrapper,
  TransformComponent,
} from 'react-zoom-pan-pinch';
import { motion } from 'framer-motion';
import { useControlsHook } from './useControlsHook';

export function ResumePage() {
  const { currentSlide, Controls, handlePrevSlide, handleNextSlide, handleSlideTo, t } = useControlsHook();

  return (
    <TransitionPage>
      <div className='relative w-5/6 md:w-3/6   mx-auto rou'>
        <div className='realtive '>
          {[1, 2].map((_, index) => (
            <div
              className={`duration-700  ease-in-out transition-opacity  
            ${currentSlide === index ? 'visible' : 'hidden'}`}
            >
              <TransformWrapper>
                <div className='flex flex-row items-end justify-between'>
                  <Controls />
                  <Text fontWeight='bold' type='neutral' text={`${index + 1}/2`} classNameText='mb-1 md:mb-2 ' />
                </div>
                <motion.div className='shadow-2xl cursor-pointer'
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "spring",
                      damping: 5,
                    }
                  }}
                >
                  <TransformComponent>
                    <motion.img src={index === 0 ? CVImgPart1 : CVImgPart2} width='100%' className='rounded-lg ' />
                  </TransformComponent>
                </motion.div>
              </TransformWrapper>
            </div>
          ))}
        </div>
        <div className='absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2'>
          {[1, 2].map((_, index) => (
            <button
              type='button'
              className={` w-3 h-3 rounded-full ${currentSlide === index ? 'bg-yellow-400' : 'bg-gray-400'
                }`}
              onClick={() => handleSlideTo(index)}
            ></button>
          ))}
        </div>
        {[1, 2].map((_, index) => (
          <button
            type='button'
            className={`absolute top-0 ${index === 0 ? 'left-0' : 'right-0'
              }  z-30 flex items-center top-2/4 justify-center px-4 cursor-pointer group focus:outline-none`}
            onClick={index == 0 ? handlePrevSlide : handleNextSlide}
          >
            <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500/70  group-hover:bg-yellow-500/50 group-focus:ring-1 group-focus:ring-yellow-500  group-focus:outline-none text-white'>
              {index === 0 ? (
                <FaChevronLeft />
              ) : (
                <FaChevronRight />
              )}
            </span>
          </button>
        ))}
      </div>
      <div className=' text-center mt-5'>


        <Button
          text={t('resume.download')}
          onClick={() => window.open(CVFile, '_blank')}
        />
      </div>
    </TransitionPage>
  );
}
