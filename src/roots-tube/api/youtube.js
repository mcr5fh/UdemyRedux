import axios from 'axios';

const API_KEY = "AIzaSyD1KWwYKR4CusqgiF-jSW3f2DL2ai3yVOI";

const BASE_URL = "https://www.googleapis.com/youtube/v3";

const PARAMS = {
    part:"snippet",
    maxResults: 5,
    key: API_KEY
};

export default axios.create({
    baseURL: BASE_URL,
    params: PARAMS
});