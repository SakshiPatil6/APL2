
import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';
import { Facebook, Twitter, YouTube, LinkedIn } from '@mui/icons-material';

const FooterComponent = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#333',
        color: 'white',
        padding: '20px 0',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between' }}>
  
        <Box sx={{ textAlign: 'left' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
            Community Links
          </Typography>
          <Link href="#" color="inherit" underline="hover">
            Sakshat Portal
          </Link>
          <br />
          <Link href="#" color="inherit" underline="hover">
            Outreach Portal
          </Link>
          <br />
          <Link href="#" color="inherit" underline="hover">
            FAQ: Virtual Labs
          </Link>
        </Box>

        {}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
            Contact Us
          </Typography>
          <Typography variant="body2">Phone: General Information: 011-26582050</Typography>
          <Typography variant="body2">Email: support@vlabs.ac.in</Typography>
        </Box>

        {}
        <Box sx={{ textAlign: 'right' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
            Follow Us
          </Typography>
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <Link href="#" color="inherit">
              <Twitter />
            </Link>
            <Link href="#" color="inherit">
              <Facebook />
            </Link>
            <Link href="#" color="inherit">
              <YouTube />
            </Link>
            <Link href="#" color="inherit">
              <LinkedIn />
            </Link>
          </Box>
        </Box>
      </Container>

      
      <Box sx={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="body2" sx={{ padding: '10px', borderTop: '1px solid #555' }}>
          © 2024 Virtual Labs - Licensed under AGPL 3.0 & Creative Commons (CC BY-NC-SA 4.0)
        </Typography>
      </Box>
    </Box>
  );
};

export default FooterComponent;
