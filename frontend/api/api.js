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
    return axios.post('/api/conferences',conference);
};

export const updateConference = (id,conference) => {
    return axios.put(`/api/conferences/${id}`, conference);
};

export const deleteConference = (id) => {
    return axios.delete(`/api/conferences/${id}`);
};
