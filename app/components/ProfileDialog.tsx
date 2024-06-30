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
      onClose={handleClickClose}
      sx={{ '& .MuiDialog-paper': { borderRadius: '1rem' } }}
    >
      <DialogTitle>
        <Typography variant="h5" className="font-bold mb-2 text-center" color='text.secondary'>Sign Up to Get Started</Typography>
      </DialogTitle>
      <DialogContent sx={{}}>
        <div className="flex-col gap-4 px-5 flex">
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
          <Button variant="outlined" size='large' color="primary" fullWidth startIcon={<Google />}>
            Sign Up
          </Button>
          <Divider className="my-2" textAlign="center">
            <strong>OR</strong>
          </Divider>
          <div>
            <Button variant="contained" size='large' color="primary" fullWidth>
              Sign Up with Google
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileDialog;