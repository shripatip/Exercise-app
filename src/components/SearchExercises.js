import React from 'react'
import { useState, useEffect } from "react";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import { fetchData } from '../utils/fetchData';
import { exerciseOptions } from '../utils/fetchData';
import HorizontalScrollbar from "../components/HorizontalScrollbar"



const SearchExercises = ({ bodyPart, setBodyPart, setExercises }) => {
    const url1 = 'https://exercisedb.p.rapidapi.com/exercises';
    const url2 = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchBodyParts = async () => {
            const bodyPartData = await fetchData(url2, exerciseOptions);
            setBodyParts(['all', ...bodyPartData.data]);
        }
        fetchBodyParts();
    }, []);


    const handleSearch = async () => {
        if (search) {
            const { data: exerciseData } = await fetchData(url1, exerciseOptions);
            const matchedExercise = exerciseData.filter((item) => item.name.toLowerCase().includes(search)
                || item.target.toLowerCase().includes(search)
                || item.equipment.toLowerCase().includes(search)
                || item.bodyPart.toLowerCase().includes(search),
            );
            setSearch('');
            setExercises(matchedExercise);
        }
    }
    return (
        <Stack justifyContent="center" alignItems="center"
            mt="37px" p="20px">
            <Typography fontWeight="700" sx={{ fontSize: { lg: '44px', xs: '30px' } }}
                mb="50px" textAlign="center"
            >Awesome Exercises You <br />
                Should Know</Typography>
            <Box position="relative" mb="50px"  >
                <TextField
                    sx={{
                        input: { fontSize: "120%", fontWeight: '700', border: "none", borderRadius: '4px' },
                        width: { xs: '350px', lg: '800px' },
                        backgroundColor: 'white'
                    }}
                    height="70px"
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercises"
                    type="text"
                />
                <Button onClick={() => { handleSearch() }} className="search-btn"
                    sx={{
                        backgroundColor: '#FF2625',
                        color: 'white',
                        textTransform: "none",
                        width: { lg: '175px', xs: '80px' },
                        fontSize: { lg: '20px', xs: "14px" },
                        height: '60px',
                        right: 0
                    }} >Search</Button>
            </Box>
            <Box sx={{ position: "relative", width: "100%", p: "15px" }}>
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart={'true'} />
            </Box>
        </Stack >
    )
}

export default SearchExercises;