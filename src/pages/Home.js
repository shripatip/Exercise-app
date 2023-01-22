import React from 'react'
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import HeroBanner from "../components/HeroBanner";
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

export const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart} />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart} />
    </Box>
  )
}
