import React from 'react';
import {Box, Button, Container, Grid, Typography} from '@mui/material';

const SectionSix = () => {
    return (
        <Box sx={{ backgroundColor:'black' }}>
            <Container>
                <Grid container sx={{ pb:4 }}>
                    <Grid item md={6} sm={6} xs={12} sx={{ display:'flex', flexDirection:'column', pt:9, pb:3 }}>
                        <Typography color='primary' sx={{ fontSize:'27.6px' }}>
                            Ready to start your project?
                        </Typography>
                        <Typography color='primary' fontWeight='fontWeightLight'>
                            After you provide the information, a dedicated business team will contact you.
                        </Typography>
                    </Grid>
                    <Grid item md={6} sm={6} xs={12} sx={{ display:'flex', justifyContent:'center', alignItems:'center',pt:{md:9, sm:3, xs:3}, pb:6 }}>
                        <Button size='large' variant='contained' color='secondary' sx={{  width:{md:'40%', sm:'50%', xs:'100%', pt:2} }}>
                            Contact Us
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}


export default SectionSix;