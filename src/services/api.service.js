import axios from 'axios';

const apiUrl = () => process.env.REACT_APP_API_URL || 'http://localhost:3000';

export const getMethod = async (url) => axios.get(`${apiUrl()}${url}`);

export const postMethod = async (url, payload) => axios.post(`${apiUrl()}${url}`, payload);

export const putMethod = async (url, payload) => axios.put(`${apiUrl()}${url}`, payload);

export const deleteMethod = async (url) => axios.delete(`${apiUrl()}${url}`);
