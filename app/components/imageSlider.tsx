'use client'
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Button } from '@mui/material';
import * as React from 'react';


const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://www.boat-lifestyle.com/cdn/shop/files/Wave_Sigma_3_Banner_WEB_2_1600x.jpg?v=1719302682',
  },
  {
    label: 'Bird',
    imgPath:
      'https://www.boat-lifestyle.com/cdn/shop/files/RS_Banner_WEB_1_1440x.jpg?v=1706770352',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://www.boat-lifestyle.com/cdn/shop/files/Lumous-Desk_1600x.jpg?v=1719284489',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://www.boat-lifestyle.com/cdn/shop/files/Summer-Desk-Banner_1_1600x.jpg?v=1718191845',
  },
];

function ImageSlider() {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep < maxSteps - 1 ? prevActiveStep + 1 : 0);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep > 0 ? prevActiveStep - 1 : maxSteps - 1);
  };

  React.useEffect(() => {
    console.log('useEffect');
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