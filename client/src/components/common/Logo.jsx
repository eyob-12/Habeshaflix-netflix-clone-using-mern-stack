import React from 'react';
import { Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const Logo = () => {
  const theme = useTheme();

  return (
    <Typography variant="h6" fontWeight="bold" fontSize="1.7rem">
      <Link to="/" style={{ textDecoration: 'none', gap: '8px' }}>
        <img
          src="https://images.squarespace-cdn.com/content/v1/59f0a6e9f09ca487886b21e2/1527236501791-PL8UQJXN2C3M3GIMCX7R/Artboard+Landscap.png"
          alt="HabeshaFlix"
          style={{ height: '60px', borderRadius: '50%', verticalAlign: 'middle' }}
        />
        <span style={{ color: theme.palette.primary.main }}>ሐበሻFlix</span>
      </Link>
    </Typography>
  );
};

export default Logo;
