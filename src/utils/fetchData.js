import React from 'react';
import axios from 'axios';
export const exerciseOptions = {

    headers: {
        'X-RapidAPI-Key': ' 350b42e73cmsh0ceaa1e0f3e81cfp163ad4jsn2a93eeb14e37',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    
    headers:  {
        'X-RapidAPI-Key': 'cc1d09a0bemsh7db7b7f7f5c3bbfp1ef401jsn0d3f0066672a',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }

}
export const fetchData = async (url, options) => {

    const response = await axios.get(url, options);
    return response;
}

