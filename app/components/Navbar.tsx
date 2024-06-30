'use client';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import { Autocomplete, InputAdornment, TextField, Typography, useMediaQuery } from '@mui/material';
import { PersonOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import Link from 'next/link';
const ShoppingBagDrawer = React.lazy(() => import('./ShoppingBagDrawer'));
const ProfileDialog = React.lazy(() => import('./ProfileDialog'));
const topSearchProducts = [
  { label: 'Boat Headset' },
];


const Navbar = () => {
  const [profile, setProfile] = useState<boolean>(false);
  const [shopCart, setShopCart] = useState<boolean>(false);
  const isDesktop = useMediaQuery('(min-width: 600px)'); // Adjust screen size as needed

  const handleDrawerOpen = () => {
    setShopCart(true);
  };

  const handleDrawerClose = () => {
    setShopCart(false);
  };

  const handleProfileDialogOpen = () => {
    setProfile(true);
  };

  const handleProfileDialogClose = () => {
    setProfile(false);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: 'transparent',
          backdropFilter: 'blur(20px)',
          color: 'black',
          padding: '0.5rem 1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Link href="/">
            <Typography variant="h5" sx={{ fontWeight: 600, fontFamily: 'serif' }} noWrap component="strong">
              SHOPTY
            </Typography>
          </Link>
          <div className="flex ml-4 items-center">
            {isDesktop && ( // Render Autocomplete only on larger screens
              <Autocomplete
                freeSolo
                id="combo-box-demo"
                options={topSearchProducts}
                sx={{ width: 300, marginRight: '1rem'}}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '0.5rem',
                      },
                    }}
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                    placeholder="Search"
                  />
                )}
              />
            )}
            <IconButton color="inherit" onClick={handleProfileDialogOpen}>
              <PersonOutlined />
            </IconButton>
            <ProfileDialog open={profile} onClose={handleProfileDialogClose} />
            <IconButton onClick={handleDrawerOpen} color="inherit">
              <Badge badgeContent={3} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <ShoppingBagDrawer open={shopCart} handleDrawerClose={handleDrawerClose} />
    </>
  );
};

export default Navbar;




