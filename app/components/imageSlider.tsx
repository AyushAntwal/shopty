'use client'
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Button } from '@mui/material';
import * as React from 'react';
import banners from '../banners.json';


function ImageSlider() {
  const images: any[] = banners;
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep < maxSteps - 1 ? prevActiveStep + 1 : 0);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep > 0 ? prevActiveStep - 1 : maxSteps - 1);
  };

  React.useEffect(() => {
    setInterval(() => {
      handleNext()
    }, 5000);
  }, []);

  return (
    <div className='relative overflow-hidden'>
      <img className='w-full aspect-[5/2]' src={images[activeStep]?.imgPath} alt={images[activeStep]?.label} />
      <Button className='absolute top-0 h-full left-0' onClick={handleNext} >
        <ChevronLeft />
      </Button>
      <Button className='absolute top-0 h-full right-0' onClick={handleBack}>
        <ChevronRight />
      </Button>
    </div>
  );
}

export default ImageSlider;