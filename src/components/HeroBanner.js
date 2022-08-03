import React from 'react'
import { Box, Typography, Stack, Button } from '@mui/material';
import BannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
    return (
        <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
            <Typography color='#FF2625'
                fontWeight="600" fontSize='26px'
            >
                Fitness Club
            </Typography>
            <Typography fontWeight="700" mb="21px" mt="30px" sx={{ fontSize: { lg: '44px', xs: '40px' } }}>
                Sweat, Smile <br /> Repeat
            </Typography>
            <Typography fontSize='22px'
                lineHeight="35px" mb={3.5}>
                Cheak out the most effective Exercises
            </Typography>
            <Button variant="contained" 
   sx={{backgroundColor:"#FF2625",padding:"10px"}} href="#exercises">Explore Exercises</Button>
            <Typography fontWeight="600"
                color='#ff2625'
                sx={{
                    opacity: 0.1,
                    display: { lg: 'block', xs: 'none' }
                }}
                fontSize="200px">EXERCISE</Typography>
            <img src={BannerImage} alt='logo' className='hero-banner-img' />
        </Box>
    )
}

export default HeroBanner

