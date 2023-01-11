import React from 'react';
import {Box, Paper, Typography, Button} from '@mui/material';
import Image from '../images/bg4.jpg';


const styles = {
    paperContainer: {
        height: 750,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${Image})`,
    },
}


const LandingPageSection = () => {
    return (
        <Box sx={{width:'100%', height:'auto' }}>
            <Paper style={styles.paperContainer}>
                <Box sx={{ position:'relative', top:'50%', left:'50%', transform:'translate(-50%, -50%)', width:{md:'max-content', sm:'90%', xs:'90%'}, p:2 }}>
                    <Typography color='primary' align='center' fontWeight='fontWeightBold' sx={{ mb:3, fontSize:{md:'68px', sm:'48px', xs:'39px'} }}>
                        WELCOME TO JUMANGI
                    </Typography>
                    <Typography color='primary' variant='h5' align='center' sx={{ mb:4 }}>
                        The best online platform ever.
                    </Typography>
                    <Box sx={{display:{md:'flex', sm:'flex', xs:'flex'}, flexDirection:{md:'row', sm:'row', xs:'column'}, alignItems:'center', justifyContent:'center'}}>
                        <Button variant='contained' color='primary' size='medium' sx={{ mr:2, p:1, my:2 }}>
                            Contact Us
                        </Button>
                        <Button variant='contained' color='secondary' sx={{  p:1 }} size='medium'>
                            Discover More
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}


export default LandingPageSection;