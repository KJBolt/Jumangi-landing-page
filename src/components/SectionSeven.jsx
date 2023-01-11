import React from 'react';
import {Box, Typography, Grid} from '@mui/material';
import Image from '../images/coffee.jpg';
import Image1 from '../images/whitebag.jpg';
import Image2 from '../images/spray.jpg';
import Image3 from '../images/cup.jpg';
import Image4 from '../images/bag.jpg';
import Image5 from '../images/browncup.jpg';

const SectionSeven = () => {
    return (
        <Box>
            <Typography align='center' variant='h4' fontWeight='fontWeightBold' sx={{ mt:10 }} >
                What we have done
            </Typography>

            <Box display='flex' alignItems='center' justifyContent='center'>
                <Typography align='center'  fontWeight='fontWeightLight' sx={{ mt:6, fontSize:'19px', width:{md:'80%', sm:'80%', xs:'80%'} }} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus excepturi voluptates animi adipisci distinctio error necessitatibus eum cum minima quaerat.
                </Typography>
            </Box>

            <Grid container sx={{height:'auto', mt:4 }}>
                <Grid item md={4} sm={6} xs={12} sx={{ height:'300px' }}>
                    <Box component='img' src={Image} sx={{ height:'100%', width:'100%' }} />
                </Grid>
                <Grid item md={4} sm={6} xs={12} sx={{ height:'300px' }}>
                    <Box component='img' src={Image1} sx={{ height:'100%', width:'100%' }} />
                </Grid>
                <Grid item md={4} sm={6} xs={12} sx={{ height:'300px' }}>
                    <Box component='img' src={Image2} sx={{ height:'100%', width:'100%' }} />
                </Grid>
                <Grid item md={4} sm={6} xs={12} sx={{ height:'300px' }}>
                    <Box component='img' src={Image3} sx={{ height:'100%', width:'100%' }} />
                </Grid>
                <Grid item md={4} sm={6} xs={12} sx={{ height:'300px' }}>
                    <Box component='img' src={Image4} sx={{ height:'100%', width:'100%' }} />
                </Grid>
                <Grid item md={4} sm={6} xs={12} sx={{ height:'300px' }}>
                    <Box component='img' src={Image5} sx={{ height:'100%', width:'100%' }} />
                </Grid>
            </Grid>
            
        </Box>
    )
}

export default SectionSeven;