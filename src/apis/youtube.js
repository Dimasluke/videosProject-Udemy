import axios from 'axios';

const KEY = 'AIzaSyCvIK883_RnTz9vX0xY4Qa89Qm-QE86aqo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
