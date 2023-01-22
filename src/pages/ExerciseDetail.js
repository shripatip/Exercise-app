import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from '../components/SimilarExercise'
import { youtubeOptions } from '../utils/fetchData';
export const ExerciseDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [exDetail, setexDetail] = useState({});
  const [targetMulscleSimilar, settargetMulscleSimilar] = useState([]);
  const [targetEquipmentSimilar, settargetEquipmentSimilar] = useState([]);
  const [ytVideoData, setYtVideoData] = useState([]);
  const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com/exercises/';
  const youtubeVidUrl = 'https://youtube-search-and-download.p.rapidapi.com'
  const { id } = useParams();
  useEffect(() => {
    const fetchDetailData = async () => {

      const { data: exerciseDetailData } = await fetchData(`${exerciseDbUrl}exercise/${id}`, exerciseOptions);
      setexDetail(exerciseDetailData);
      const ytData = await fetchData(`${youtubeVidUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      setYtVideoData(ytData.data.contents);
      const targetMuscleData = await fetchData(`${exerciseDbUrl}target/${exerciseDetailData.target}`, exerciseOptions);

      settargetMulscleSimilar(targetMuscleData.data);
      const TargetEquipmentData = await fetchData(`${exerciseDbUrl}equipment/${exerciseDetailData.equipment}`, exerciseOptions);

      settargetEquipmentSimilar(TargetEquipmentData.data);

    }

    fetchDetailData();

  }, [id]);


  return (
    <Box>
      <Detail exerciseDetail={exDetail} />
      <ExerciseVideos exerciseVideos={ytVideoData} name={exDetail.name} />

      <SimilarExercises targetMuscleExercises={targetMulscleSimilar} targetEquipmentExercises={targetEquipmentSimilar} />
    </Box>
  )
}
