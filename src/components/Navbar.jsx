import React from 'react';
import {AppBar, Toolbar, Typography, Box, Button} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    return (
        <div>
           <AppBar component='nav' position="fixed" elevation={1}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography color='success' variant="h5" component="div" fontWeight='fontWeightBold' sx={{ cursor:'pointer' }} >
                            Jumangi
                        </Typography>
                    </Box>
                
                
                
                    <Box sx={{ display:{lg:'flex', md:'none', xs: 'none'} }}>
                        <Typography color='success' fontWeight='fontWeightMedium' component="div" sx={{ mr:3, mt:1, cursor:'pointer' }}>
                            Home
                        </Typography>

                        <Typography color='success' fontWeight='fontWeightMedium' variant="body1" component="div" sx={{ mr: 3, mt:1, cursor:'pointer' }}>
                            Services
                        </Typography>
                    
                        <Typography color='success' fontWeight='fontWeightMedium' variant="body1" component="div" sx={{ mr: 3, mt:1, cursor:'pointer' }}>
                            About
                        </Typography>
                    
                        <Typography color='success' fontWeight='fontWeightMedium' variant="body1" component="div" sx={{ mr: 3, mt:1, cursor:'pointer' }}>
                            Portfolio
                        </Typography>
                    
                        <Typography color='success'  variant="body1" fontWeight='fontWeightMedium' component="div" sx={{ mr: 3, mb:1, mt:1, cursor:'pointer' }}>
                            Pricing
                        </Typography>

                        <Button color='secondary' variant="contained" sx={{ mr:3, cursor:'pointer' }}>
                            Contact Us
                        </Button>

                        <Typography color='success'  variant="body1" fontWeight='fontWeightMedium' component="div" sx={{ mr: 3, mb:1, mt:1, cursor:'pointer' }}>
                            En
                        </Typography>
                    </Box>
                    <IconButton edge="start" color="success" aria-label="menu" sx={{ mr: 2, display:{lg:'none', md:'block', sm:'block', xs: 'block'} }}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}


export default Navbar;