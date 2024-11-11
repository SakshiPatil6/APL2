import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Rating } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './logo.jpg'; 

const HeaderComponent = ({ onDrawerToggle }) => {
  const [open, setOpen] = useState(false);  
  const [rating, setRating] = useState(0);  

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log('Rating submitted:', rating);
    setOpen(false);
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: 1201, backgroundColor: '#ffffff', borderBottom: '4px solid #ff9800' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        
        <IconButton color="inherit" edge="start" onClick={onDrawerToggle} sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        
     
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          {/* Logo */}
          <img src={logo} alt="Logo" style={{ height: '50px', marginRight: '10px' }} /> 
          
          <Typography variant="h6" color="textPrimary">
            Virtual Labs
          </Typography>
        </Box>

        
        <Button variant="contained" onClick={handleOpen} sx={{ backgroundColor: '#007bff' }}>
          Rate Me
        </Button>
        
        
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Rate Us</DialogTitle>
          <DialogContent>
            <Typography>Rate your experience out of 5 stars:</Typography>
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
