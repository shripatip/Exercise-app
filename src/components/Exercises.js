import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material/';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard'
import { Pagination } from '@mui/material'

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const url = 'https://exercisedb.p.rapidapi.com/exercises';
  useEffect(() => {
    const fetchPartSpecefic = async () => {
      let exercisesData = [];
      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }
      setExercises(exercisesData.data);
    }
    fetchPartSpecefic();
  }, [bodyPart]);



  const Paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  }
  const endIndex = currentPage * 9;
  const startIndex = endIndex - 9;

  const currentPageExercises = exercises.slice(startIndex, endIndex);
  return (
    <Box id="exercises"
      mt='50px'
      p="20px"
      sx={{
        mt: { lg: '110px' }
      }}
    >
      <Typography variant='h3' mb='46px'>
        Showing Results
      </Typography>
      <Stack direction='row' sx={{ gap: { lg: '110px', sm: "50px" } }}
        flexWrap='wrap' justifyContent='center'>
        {currentPageExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} classnameo={'exercise-card'} />
        ))}
      </Stack>
      <Stack mt='80px' alignItems='center'>{
        (exercises.length > 9) && (
          <Pagination color='standard'
            variant="outlined" shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / 9)}
            page={currentPage}
            onChange={Paginate}
            size="large"
          ></Pagination>
        )
      }
      </Stack>
    </Box>
  )
}

export default Exercises