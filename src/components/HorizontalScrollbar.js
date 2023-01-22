import React from 'react';
import { Box, Typography } from '@mui/material'
import { ScrollMenu, scrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import BodyPart from './BodyPart';
import { useContext } from 'react';
import ExerciseCard from './ExerciseCard';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};
const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyPart }) => {

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>{
      data.map((item) =>
      (<Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 15px">
        {isBodyPart ? < BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} /> :
          < ExerciseCard exercise={item} classnameo={'exercise-card2'} />}
      </Box>))

    }</ScrollMenu>
  )
}

export default HorizontalScrollbar;