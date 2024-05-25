import React from 'react';
import { Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const Logo = () => {
  const theme = useTheme();

  return (
    <Typography variant="h6" fontWeight="bold" fontSize="1.7rem">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <img
          src="https://i.pinimg.com/736x/6f/af/f7/6faff7affa40573f16d32b284deb20cb.jpg"
          alt="HabeshaFlix"
          style={{ height: '60px', borderRadius: '50%', verticalAlign: 'middle' }}
        />
        <span style={{ color: theme.palette.primary.main }}>HabeshaFlix</span>
      </Link>
    </Typography>
  );
};

export default Logo;
