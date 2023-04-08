import axios, { Axios } from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 8,
  },
  headers: {
    'X-RapidAPI-Key':' d90252a778mshf9fd349ad860da6p1b990cjsn92dea7c0e767',
    //  'd90252a778mshf9fd349ad860da6p1b990cjsn92dea7c0e767',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};