import React from 'react';
import {Box, Grid, Typography} from '@mui/material';

const NumberCount = () => {
    return (
        <Box display='flex' justifyContent='center' alignItems='center' sx={{ backgroundColor:'black' }}>
            <Grid container sx={{ width:'90%' }}>
                <Grid sx={{ display:'flex', justifyContent:'center', alignItems:'center', my:8}} item md={2} sm={4} xs={12}>
                    <Box sx={{width:'max-content' }}>
                        <Typography color='primary' align='center' sx={{ fontSize:'33px' }}>
                            7 
                        </Typography>
                        <Typography color='primary' align='center'>
                            Years 
                        </Typography>
                    </Box>
                </Grid>
                <Grid sx={{ display:'flex', justifyContent:'center', alignItems:'center', my:5}} item md={2} sm={4} xs={12}>
                <Box sx={{ width:'max-content' }}>
                        <Typography align='center' color='primary' sx={{ fontSize:'33px' }}>
                            1900
                        </Typography>
                        <Typography color='primary' align='center'>
                            Projects 
                        </Typography>
                    </Box>
                </Grid>
                <Grid sx={{ display:'flex', justifyContent:'center', alignItems:'center', my:5}} item md={2} sm={4} xs={12}>
                    <Box sx={{ width:'max-content' }}>
                            <Typography color='primary' align='center' sx={{ fontSize:'33px' }}>
                                60 
                            </Typography>
                            <Typography color='primary' align='center'>
                                Awards 
                            </Typography>
                    </Box>
                </Grid>
                <Grid sx={{ display:'flex', justifyContent:'center', alignItems:'center', my:5}} item md={2} sm={4} xs={12}>
                <Box sx={{ width:'max-content' }}>
                        <Typography color='primary' align='center' sx={{ fontSize:'33px' }}>
                            40 
                        </Typography>
                        <Typography color='primary' align='center'>
                            Team 
                        </Typography>
                    </Box>
                </Grid>
                <Grid sx={{ display:'flex', justifyContent:'center', alignItems:'center', my:5}} item md={2} sm={4} xs={12}>
                    <Box sx={{ width:'max-content' }}>
                            <Typography color='primary' align='center' sx={{ fontSize:'33px' }}>
                                400 
                            </Typography>
                            <Typography color='primary' align='center'>
                                Clients 
                            </Typography>
                    </Box>
                </Grid>
                <Grid sx={{ display:'flex', justifyContent:'center', alignItems:'center', my:5}} item md={2} sm={4} xs={12}>
                    <Box sx={{ width:'max-content' }}>
                            <Typography color='primary' align='center' sx={{ fontSize:'33px' }}>
                                3
                            </Typography>
                            <Typography color='primary' align='center'>
                                Continent 
                            </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default NumberCount;