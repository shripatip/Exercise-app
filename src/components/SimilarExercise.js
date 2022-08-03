import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./loader";

const SimilarExercise = ({ targetMuscleExercises, targetEquipmentExercises }) => {
    return (
        <Box sx={{ mt: { lg: "70px", xs: '0' } }}>
            <Typography variant='h3'>
                Exercises that target the same muscle group
            </Typography>
            <Stack direction='row' mt={6} sx={{ p: '2', position: 'relative' }}>
                {targetEquipmentExercises.length ?  <HorizontalScrollbar data={targetMuscleExercises} />:
                <Loader/>
        
        }</Stack>
         <Typography variant='h3' mt={2} mb={1}>
                Exercises that use the same equipment
            </Typography>
           <Stack direction='row' mt={6} sx={{ p: '2', position: 'relative' }}>
                {targetEquipmentExercises.length ?  <HorizontalScrollbar data={targetEquipmentExercises} />:
                <Loader/>
        
        }</Stack>

        </Box>
    )
}

export default SimilarExercise