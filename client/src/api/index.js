import axios from 'axios';

const url = 'http://localhost:5000/abstracts';

export const fetchAbstracts = () => axios.get(url);
export const createAbstract = (newAbstract) => axios.post(url, newAbstract);
export const deleteAbstract = (id) => axios.delete(`${url}/${id}`);