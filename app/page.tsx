'use client';
import { Box, Button, Card, FormControl, Input, OutlinedInput, TextField, TextareaAutosize, ThemeProvider, Typography } from "@mui/material";
import ImageSlider from "./components/imageSlider";
import { muiTheme } from "../mui-style";
import React from "react";
const CardSlider = React.lazy(() => import('./components/CardSlider'));
const ProductList = React.lazy(() => import('./components/ProductList'));




export default function Home() {
  return (
    <main>
      <ThemeProvider theme={muiTheme}>
        <Box className=' relative  h-screen'>
          <VideoPlayer />
          <div className='animation-text-in absolute top-0 h-full flex items-center justify-center w-full'>
            <div className='w-full text-white text-center'>
              <Typography variant='h1' className='text-gradient'>Welcome to Shopty</Typography>
              <Typography variant='h6'>Shop for lifestyle</Typography>
            </div>
          </div>
        </Box>
        <CardSlider />
        <ImageSlider />
        <ProductList />
      </ThemeProvider>
    </main>
  );
}


const VideoPlayer = () => {
  return (
    <video
      preload="none"
      loop
      playsInline
      muted
      className="svelte-jk0m5r"
      data-index="3"
      data-jsonkey="2CdZFaPewO"
      style={{
        borderRadius: '2px',
        objectFit: 'cover',
        objectPosition: 'center top',
        zIndex: 1,
        border: '0px solid rgb(255, 255, 255)',
        width: '100vw',
        height: '100%',
      }}
      autoPlay
      src="https://www.boat-lifestyle.com/cdn/shop/files/quinn_CpsRIdJWtpXyFN3enwbXd.mp4"
      poster="https://www.boat-lifestyle.com/cdn/shop/files/quinn_v90hMzAEa585W2YTUR9UF.jpg"
    ></video>
  );
};