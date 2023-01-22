import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png'


const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    return (
        <Stack type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            onClick={() => {
                setBodyPart(item);
                window.scrollTo({ top: 0, left: 100, behavior: 'smooth' });
            }}
            sx={{
                borderTop: item === bodyPart ? '4px solid #ff2625' : '',
                borderBottomLeftRadius: '20px',
                backgroundColor: '#fff',
                borderBottomLeftRadius: '20px',
                width: '250px',
                height: '250px',
                cursor: 'pointer',
                gap: '47px'
            }}>
            <img src={Icon} alt='dumbell' style={{ width: "40px", height: "40px" }} />
            <Typography fontSize='24px' fontWeight='bold' color='#3A1212' textTransform='capitalize'>{item} </Typography>
        </Stack >
    )
}

export default BodyPart