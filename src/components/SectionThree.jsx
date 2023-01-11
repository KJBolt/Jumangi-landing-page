import React from 'react';
import {Box, Grid, Typography} from '@mui/material';
import Image from '../images/team1.jpg';


const SectionThree = () => {
    return (
        <Box>
            <Grid container sx={{ height:{md:'700px', sm:'auto', xs:'auto'} }}>
                <Grid item sx={{  display:'flex', justifyContent:'center', alignItems:'center', p:1, my:6 }}  md={6} sm={12} xs={12}>
                    <Box component='img' src={Image} sx={{ height:'370px', width:{md:'80%', sm:'80%', xs:'90%'}}}></Box>
                </Grid>
                <Grid item sx={{ display:'flex', justifyContent:'center', alignItems:'center', my:3 }} md={6} sm={12} xs={12}>
                    <Box sx={{ width:{md:'90%', sm:'80%', xs:'90%'}, p:2, my:1 }}>
                        <Typography sx={{ fontSize:'33px' }} fontWeight='fontWeightBold'>
                            At Jumangi, we love what we do.
                        </Typography>

                        <ul style={{ color:'gray' }}>
                            <li style={{ paddingBottom:'10px', fontSize:'15px' }}>Infographic founders first mover advantage.</li>
                            <li style={{ paddingBottom:'10px', fontSize:'15px' }}>Business model canvas long tail assets monetization.</li>
                            <li style={{ paddingBottom:'10px', fontSize:'15px' }}>Churn rate learning curve crowdsource niche market.</li>
                            <li style={{ paddingBottom:'10px', fontSize:'15px' }}>Responsive web design handshake twitter.</li>
                            <li style={{ paddingBottom:'10px', fontSize:'15px' }}>Accelerator bandwidth twitter lean startup.</li>
                        </ul>

                        <Typography sx={{ color:'gray', lineHeight:'30px', fontSize:'15px' }} fontWeight="fontWeightMedium">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quod enim dolores possimus inventore numquam vero eos nobis libero alias sit laudantium atque ratione fugit reprehenderit magnam voluptatum. Id, doloremque.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>       
    )
}


export default SectionThree;