import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';



const ExerciseCard = ({ exercise,classnameo }) => {
    return (
    <Link className={classnameo} to={`/exercise/${exercise.id}`}
    onClick={()=>{ window.scrollTo({top:0,left:100,behavior:'smooth'})}}>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'
        />
    
    <Stack direction="row">
        <Button sx={{ml:'21px',color:'#fff',background:'#ffa9a9',fontSize:'14px',borderRadius:"15px",p:'7px 2px',
    textTransform:'capitalize',
    '&:hover':{
backround:'red !Important',
    }}}>
{exercise.bodyPart}
        </Button>
        <Button sx={{ml:'21px',color:'#fff',background:'#ffcc77',fontSize:'14px',borderRadius:"15px",padding:'7px 3px',
    textTransform:'capitalize'}}>
{exercise.target}
        </Button>
    </Stack>
    <Typography ml="21px" color='#000' fontWeight='bold' mt="11px" pb='15px' textTransform='capitalize' fontSize='23px' >
        {exercise.name}
    </Typography>
    </Link>
    
    )
}

export default ExerciseCard