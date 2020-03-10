import axios from 'axios';

export const fetchUser = () => {
    return axios.get('/api/user');
};

export const createUser = (user) => {
    return axios.put('/api/user',user);
};

export const fetchConferences = () => {
    return axios.get('/api/conferences');
};

export const fetchLatestConference = () => {
    return axios.get('/api/conferences/latest');
};

export const createConference = (conference) => {
    return axios.post('/api/conference',conference);
};

export const updateConference = (updates) => {
    return axios.put(`/api/conference`, updates);
};

export const deleteConference = (id) => {
    return axios.delete(`/api/conference/${id}`);
};
