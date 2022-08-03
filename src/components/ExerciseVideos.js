import { MusicNote } from '@mui/icons-material';
import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Box sx={{ marginTop: { lg: '150px', xs: '20px' } }} p='20px'>
      <Typography variant='h4' mb='33px'>
        Watch <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>{name} </span>exercise videos
      </Typography>

      <Stack flexDirection='flex-start' flexWrap="wrap" alignItems="center"
        sx={{
          flexDirection: { lg: 'row' },
          gap: { lg: '70px', xs: '0' }
        }} >
{
  exerciseVideos?.slice(0,5).map((item, index) => (
<a 
  key={index}
  className="exercise-video"
  href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
target="_blank"
rel="nooreferrer"
  >
    <img src={item.video.thumbnails[0].url} alt={item.video.title}></img>
    <Box>
      <Typography variant='h6' fontSize="120% "color="#000">
{item.video.title}
      </Typography>
      <Typography variant='h6' fontSize="100%" color="#000">
{item.video.channelName}</Typography>
      

    </Box>
  </a>
))}
      </Stack>


    </Box>
  )
}

export default ExerciseVideos