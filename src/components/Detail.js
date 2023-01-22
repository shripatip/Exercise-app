import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import Equipment from '../assets/icons/equipment.png';
const Detail = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
    
    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon: TargetImage,
            name: target
        },
        {
            icon: Equipment,
            name: equipment
        }
    ]
    return (
        <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: "20px", alignItems: 'center' }}>
            <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
                <Typography variant='h4' fontSize="250%" textTransform='capitalize' fontWeight={600}>{name}
                </Typography >
                <Typography sx={{ fontSize: { lg: '21px', xs: '18px' } }} color="#4F4C4C">
                    Exercises keep you strong.{' '}
                    <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
                    of the best <br /> exercises to target your {target}. It will help you improve your{' '}
                    <br /> mood and gain energy.
                </Typography>
            {
                extraDetail.map((detail) => (
                    <Stack key={detail.name} direction='row' gap='24px' alignItems='center'>
                        <Button sx={{ background: '#fff2db', borderRadius: '50%', width: '100px', height: '100px' }}>
                            <img src={detail.icon} alt={bodyPart} style={{width:'50px' ,height:'50px' }}/></Button>
                        <Typography variant ="h6" textTransform="capitalize">{detail.name}</Typography>
                    </Stack>))

            }
            </Stack>
        </Stack>
    )
}

export default Detail;