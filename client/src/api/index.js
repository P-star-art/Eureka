import axios from 'axios';

const url = 'http://localhost:5000/abstracts';

export const fetchAbstracts = () => axios.get(url);