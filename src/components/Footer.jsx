import React from 'react';
import {Box, Container, Grid, Typography, Divider} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <Box sx={{ height:'auto' }}>
            <Container>
                <Grid container>
                    <Grid item md={6} sm={12} xs={12} sx={{ height:'auto', display:'flex', alignItems:'center', my:2 }}>
                        <Box sx={{ p:1 }}>
                            <Typography>
                                About Jumangi
                            </Typography>
                            <Typography fontWeight='fontWeightLight' >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolores sed excepturi tenetur ipsa tempora animi earum dicta laborum sunt.
                            </Typography>
                        </Box>  
                    </Grid>
                    <Grid item md={6} sm={12} xs={12} sx={{ height:'auto',display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                        <Grid container sx={{ display:'flex', alignItems:'center', justifyContent:'center', p:2 }}>
                            <Grid item md={4} sm={4} xs={12}>
                               <Box sx={{ py:2 }}>
                                <Typography>
                                        Company
                                </Typography>

                                <Box>
                                        <ul>
                                            <li style={{ fontSize:'14px' }}>Policy Privacy</li>
                                            <li style={{ fontSize:'14px' }}>Terms of use</li>
                                            <li style={{ fontSize:'14px' }}>Contact Us</li>
                                        </ul>
                                </Box>
                               </Box>
                            </Grid>
                            <Grid item md={4} sm={4} xs={12}>
                                <Box>
                                    <Typography>
                                    Account
                                    </Typography>

                                    <Box>
                                        <ul>
                                            <li style={{ fontSize:'14px' }}>Sign In</li>
                                            <li style={{ fontSize:'14px' }}>Sign Up</li>
                                            <li style={{ fontSize:'14px' }}>Reset Password</li>
                                        </ul>
                                </Box>
                                </Box>
                                
                            </Grid>
                            <Grid item md={4} sm={4} xs={12} >
                                <Box>
                                    <Typography sx={{ mb:2 }}>
                                    Stay Connected
                                    </Typography>

                                    <Box>
                                        <GoogleIcon sx={{ color:'red', mr:1 }} />
                                        <FacebookIcon sx={{ color:'blue', mr:1 }} />
                                        <TwitterIcon sx={{ mr:1 }} />
                                    </Box>
                                </Box>
                                

                               
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Divider sx={{ my:2}}/>
            <Container>
                <Typography fontWeight='fontWeightLight' sx={{ fontSize:'15px', my:2 }}>
                    © 2022 designed and developed by Kenneth Rockson.
                </Typography>
            </Container>
        </Box>
        
    )
}

export default Footer;