import React from 'react';
import {Box, Typography, Container} from '@mui/material';

const SectionTwo = () => {
    return (
        <Box sx={{ height:'auto', backgroundColor:'black', py:9 }} display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            <Container>
                <Typography color='primary' fontWeight='fontWeightRegular' sx={{ fontSize:'27px', mb:3 }}>
                    Jumagi agency, for web design and development since 2020 based in Ghana.
                </Typography>
                <Typography color='primary' fontWeight='fontWeightLight' sx={{ fontSize:'19px' }}>
                    in Jumangi we care about every detail, our goal to make our clients satisfied with their projects.
                </Typography>
            </Container>
            
        </Box>
    );
}


export default SectionTwo;