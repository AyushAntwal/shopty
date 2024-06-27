import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import GitHubIcon from '@mui/icons-material/GitHub';
import Badge from '@mui/material/Badge';
import InputBase from '@mui/material/InputBase';
import { Input, OutlinedInput, TextField, Typography } from '@mui/material';
import { Person, ShoppingBag, ShoppingBagOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 5) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <AppBar
      position={isSticky ? 'sticky' : 'static'}
      sx={{
        background: 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(20px)',
        color: 'black',
        padding: '0.5rem 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <Link href='/'>
          <Typography  variant='h5' className=' font-serif'  sx={{fontWeight: 600}} noWrap component='strong'>
            SHOPTY
          </Typography>
        </Link>
        <div className='flex items-center'>
          <OutlinedInput
            startAdornment={<SearchIcon />}
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            sx={{ background: 'transparent' }}
          />
          <IconButton color="inherit">
            <Person />
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <ShoppingBagOutlined />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
