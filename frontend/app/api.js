import axios from 'axios';

export const fetchUser = () => {
    return axios.get('/api/user/');
};

export const createUser = (user) => {
    return axios.put('/api/user/',user);
};

export const fetchConferences = () => {
    return axios.get('/api/conferences/');
};

export const fetchLatestConference = () => {
    return axios.get('/api/conferences/latest');
};

export const createConference = (conference) => {
    return axios.put('/api/conferences',conference);
};

export const updateConference = (name,conference) => {
    return axios.put(`/api/conferences/${name}`, conference);
};
