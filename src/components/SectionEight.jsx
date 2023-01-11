import React from 'react';
import {Box, Avatar, Typography} from '@mui/material';
import Image from '../images/bolt.png'

const SectionEight = () => {
    return (
        <Box sx={{ backgroundColor:'black', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
            <Box sx={{ width:'max-content', mt:5 }}>
                <Avatar alt="Remy Sharp" src={Image} sx={{ width: 80, height: 80 }} />
            </Box>
            <Box sx={{ width:{md:'50%', sm:'70%', xs:'70%'}, my:3 }}>
                <Typography color='primary' fontWeight='fontWeightMedium'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam recusandae nisi odit atque, magni facere quia fugit eaque nulla similique cum id quas dicta incidunt vero velit dignissimos provident.
                </Typography>
            </Box>
            <Box sx={{ width:'max-content', my:3 }}>
                <Typography color='primary' variant='body1'>
                    Author
                </Typography>
                <Typography color='primary' variant='body2' fontWeight='fontWeightLight'>
                    John Bolt
                </Typography>
            </Box>
        </Box>
    )
}

export default SectionEight;