import { Box, Typography, Grid } from '@mui/material';
import Image from '../images/jumanji1.jpg'
import Image2 from '../images/marketing1.jpg'
import Image3 from '../images/graphicdesign1.jpg'
import React from 'react';

const SectionFive = () => {
    return (
        <Box>
            <Typography align='center' variant='h4' fontWeight='fontWeightBold' sx={{ mt:10 }} >
                What we do
            </Typography>

            <Box display='flex' alignItems='center' justifyContent='center'>
                <Typography align='center'  fontWeight='fontWeightLight' sx={{ mt:6, fontSize:'19px', width:{md:'80%', sm:'80%', xs:'80%'} }} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus excepturi voluptates animi adipisci distinctio error necessitatibus eum cum minima quaerat.
                </Typography>
            </Box>

            <Box display='flex' justifyContent='center' alignItems='center' sx={{ height:'auto' }}>
                <Grid container sx={{ width:{md:'80%', sm:'90%', xs:'90%'}, height:'100%', display:'flex', justifyContent:'space-between' }}>
                    <Grid item md={4} sm={12} xs={12} sx={{ display:'flex', flexDirection:'column', justifyContent:'space-around', alignItems:'center', pt:2, my:3 }}>
                        <Box component='img' src={Image3} sx={{ height:'300px', width:{md:'90%', sm:'80%', xs:'90%'}}}></Box>
                        <Box sx={{ mx:{md:2, sm:9, xs:2} }}>
                            <Typography align='left' fontWeight='fontWeightMedium' sx={{ fontSize:'23px', my:2 }}>
                                Graphic Design
                            </Typography>
                            <Typography align='left' fontWeight='fontWeightLight' sx={{ fontSize:'16px', my:2 }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorem quia voluptate nulla 
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={12} xs={12} sx={{ display:'flex', flexDirection:'column', justifyContent:'space-around', alignItems:'center', pt:2, my:3 }}>
                        <Box component='img' src={Image2} sx={{ height:'300px', width:{md:'90%', sm:'80%', xs:'90%'}}}></Box>
                        <Box sx={{ mx:{md:2, sm:9, xs:2} }}>
                            <Typography align='left' fontWeight='fontWeightMedium' sx={{ fontSize:'23px', my:2 }}>
                                Web Development
                            </Typography>
                            <Typography align='left' fontWeight='fontWeightLight' sx={{ fontSize:'16px', my:2 }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorem quia voluptate nulla 
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={12} xs={12} sx={{display:'flex', flexDirection:'column', justifyContent:'space-around', alignItems:'center', pt:2, my:3 }}>
                        <Box component='img' src={Image} sx={{ height:'300px', width:{md:'90%', sm:'80%', xs:'90%'}}}></Box>
                        <Box sx={{ mx:{md:2, sm:9, xs:2} }}>
                            <Typography align='left' fontWeight='fontWeightMedium' sx={{ fontSize:'23px', my:2 }}>
                                Marketing
                            </Typography>
                            <Typography align='left' fontWeight='fontWeightLight' sx={{ fontSize:'16px', my:2 }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorem quia voluptate nulla 
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}


export default SectionFive;