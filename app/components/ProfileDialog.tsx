'use client';
import React, { useState } from 'react';
import { Button, Dialog, DialogContent, DialogTitle, Divider, Grid, IconButton, InputLabel, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';


export interface ProfileDialogProps {
  open: boolean;
  onClose: (value: any) => void;
}

const ProfileDialog = (props: ProfileDialogProps) => {
  const [emailError, setEmailError] = useState(false); // Example state for error handling

  const handleEmailChange = (event: any) => {
    // Implement email validation logic here
    setEmailError(true);
  };

  const handleClickClose = () => {
    props.onClose({});
  };
  return (
    <Dialog
      open={props.open}
      maxWidth='md'
      fullWidth
      onClose={handleClickClose}
      sx={{ '& .MuiDialog-paper': { borderRadius: '1rem' } }}
    >
      <DialogContent>
        <Typography variant="h5" className="font-bold z-10 my-5 text-center" color='text.secondary'>Sign Up to Get Started</Typography>
        <div className="flex">
          <img className='translate-x-20 hidden md:block scale-110 w-1/2 -ml-20 z-0' src="https://img.freepik.com/free-vector/group-customers-shopping-online-store-huge-tablet-sale-internet-shop-buyer-with-purchases-cart-flat-illustration_74855-18344.jpg?t=st=1719792063~exp=1719795663~hmac=17d0919bf18d78d090b826d72f14e93be50243def918180a20e293783059f891" alt="Cover image" srcSet='' />
          <div className="flex-col gap-4 px-5">
            <TextField
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '1rem' } }}
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              size='medium'
              fullWidth
              variant="outlined"
            />
            <TextField
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '1rem' } }}
              autoFocus
              margin="dense"
              id="email"
              size='medium'
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
            />
            <Button sx={{ borderRadius: '1rem' }} variant='contained' size='large' color="primary" fullWidth >
              Sign Up
            </Button>
            <Divider className="my-8" textAlign="center">
              <strong>OR</strong>
            </Divider>
            <div>
              <Button sx={{ borderRadius: '1rem' }} variant='outlined' size='large' fullWidth startIcon={<Google />}>
                Sign Up with Google
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileDialog;