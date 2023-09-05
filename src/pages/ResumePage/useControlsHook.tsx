import { useState } from 'react';
import { Button } from '../../components';
import { useControls } from 'react-zoom-pan-pinch';
import { useTranslation } from 'react-i18next';

export function useControlsHook() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    console.log(currentSlide);

    setCurrentSlide(prevSlide => (prevSlide === 0 ? 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    console.log(currentSlide);
    setCurrentSlide(prevSlide => (prevSlide === 1 ? 0 : prevSlide + 1));
  };

  const handleSlideTo = (index: any) => {
    setCurrentSlide(index);
  };
  const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();
    return (
      <div>
        <Button text='+' onClick={() => zoomIn()} />
        <Button text='-' onClick={() => zoomOut()} />
        <Button text='Reset' onClick={() => resetTransform()} />
      </div>
    );
  };
  return { currentSlide, Controls, handlePrevSlide, handleNextSlide, handleSlideTo, t };
}
