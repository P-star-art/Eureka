import axios from 'axios';

const API = axios.create({ baseURL: 'https://eurekaches.herokuapp.com/' })

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
      req.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile")).token
      }`;
    }
  
    return req;
  });

export const fetchAbstracts = () => API.get('/abstracts');
export const createAbstract = (newAbstract) => API.post('/abstracts', newAbstract);
export const deleteAbstract = (id) => API.delete(`/abstracts/${id}`);

// export const fetchUsers = () => API.get('/users');
export const signIn = (formData) => API.post('/users/signin', formData);
export const signUp = (formData) => API.post('/users/signup', formData);