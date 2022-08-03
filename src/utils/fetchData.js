import React from 'react';
import axios from 'axios';
export const exerciseOptions = {

    headers: {
        'X-RapidAPI-Key': ' d38f19ed65msh4f13c631c8cb131p1c697cjsn8d1c2019bf75',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {

    headers: {
        'X-RapidAPI-Key': 'cc1d09a0bemsh7db7b7f7f5c3bbfp1ef401jsn0d3f0066672a',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }

}

export const fetchData = async (url, options) => {

    const response = await axios.get(url, options);
    return response;
}

