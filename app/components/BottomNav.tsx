'use client';
import React from 'react';
import { Box, Typography, Grid, Button, Link, IconButton, OutlinedInput, ThemeProvider } from '@mui/material';
import { Facebook, Instagram, Twitter, Pinterest, Apple } from '@mui/icons-material';
import { muiTheme } from '@/mui-style';

function BottomNav() {
    return (
        <ThemeProvider theme={muiTheme}>
            <Box sx={{ bgcolor: '#f5f5f7', color: 'black', p: 4, pb: 5 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" gutterBottom>
                            CUSTOMER SERVICE
                        </Typography>
                        <Link href="#" color="inherit" display="block">Contact Us</Link>
                        <Link href="#" color="inherit" display="block">Track Order</Link>
                        <Link href="#" color="inherit" display="block">Return Order</Link>
                        <Link href="#" color="inherit" display="block">Cancel Order</Link>
                        <Box mt={2}>
                            <Typography variant="body2">15 Days return policy*</Typography>
                            <Typography variant="body2">Cash on delivery*</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" gutterBottom>
                            COMPANY
                        </Typography>
                        <Link href="#" color="inherit" display="block">About Us</Link>
                        <Link href="#" color="inherit" display="block">We are Hiring</Link>
                        <Link href="#" color="inherit" display="block">Terms & Conditions</Link>
                        <Link href="#" color="inherit" display="block">Privacy Policy</Link>
                        <Link href="#" color="inherit" display="block">Blog</Link>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" gutterBottom>
                            CONNECT WITH US
                        </Typography>
                        <IconButton href="#" color="inherit">
                            <Facebook />
                        </IconButton>
                        <IconButton href="#" color="inherit">
                            <Instagram />
                        </IconButton>
                        <IconButton href="#" color="inherit">
                            <Twitter />
                        </IconButton>
                        <IconButton href="#" color="inherit">
                            <Apple />
                        </IconButton>
                        <IconButton href="#" color="inherit">
                            <Pinterest />
                        </IconButton>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" gutterBottom>
                            KEEP UP TO DATE
                        </Typography>
                        <Box component="form" sx={{ display: 'flex' }}>
                            <OutlinedInput
                                placeholder="Enter Email Id"
                                fullWidth
                                sx={{ borderEndEndRadius: 0, borderTopRightRadius: 0 }}
                            />
                            <Button sx={{ borderEndStartRadius: 0, borderStartStartRadius: 0, px: 2 }} variant="contained" color="primary">
                                SUBSCRIBE
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}

export default BottomNav;
