'use client';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Card, FormControl, Input, OutlinedInput, TextField, TextareaAutosize, ThemeProvider, Typography } from "@mui/material";
import ImageSlider from "./components/imageSlider";
import Navbar from "./components/Navbar";
import { muiTheme } from "../mui-style";
import CardSlider from './components/CardSlider';
import ProductList from './components/ProductList';
import BottomNav from './components/BottomNev';
// components/VideoPlayer.js




export default function Home() {
  return (
    <ThemeProvider theme={muiTheme}>
      <main>
        <Navbar />
        <Box className=' relative'>
          <VideoPlayer />
          <div className=' absolute top-0 h-full flex items-center justify-center w-full'>
            <div className='w-full text-white text-center'>
              <Typography variant='h1'>Welcome to Shopty</Typography>
              <Typography variant='h6'>Shop for lifestyle</Typography>
            </div>
          </div>
        </Box>
        <CardSlider />
        <ImageSlider />
        <ProductList />
        {/* <TextField label='Name' variant="outlined" size="small" />
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
        <Button variant="outlined">Primary</Button>
        <FormControl className='mt-2'>
          <Input name="search" placeholder="Search..." startAdornment={<SearchIcon />} />
        </FormControl>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" href="#outlined-buttons">
          Link
        </Button>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>

        <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam numquam doloremque aliquid ipsum ea magnam exercitationem quos sunt consectetur, sit explicabo quia eligendi est a provident atque maiores dicta nostrum!</Typography>
        <Button variant="contained" color='secondary' startIcon={<SearchIcon />} >Save</Button> */}
        <BottomNav />
      </main>
    </ThemeProvider>
  );
}


export const VideoPlayer = () => {
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
        height: '100vh',
      }}
      autoPlay
      src="https://www.boat-lifestyle.com/cdn/shop/files/quinn_CpsRIdJWtpXyFN3enwbXd.mp4"
      poster="https://www.boat-lifestyle.com/cdn/shop/files/quinn_v90hMzAEa585W2YTUR9UF.jpg"
    ></video>
  );
};