import { FETCH_ALL, CREATE, DELETE } from '../constants/actionTypes';
import * as api from '../api';

export const getAbstracts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAbstracts();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
    
}

export const createAbstract = (abstract) => async (dispatch) => {
    try {
      const { data } = await api.createAbstract(abstract);
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error);
    }
};
  
export const deleteAbstract = (id) => async (dispatch) => {
  try {
    
    await api.deleteAbstract(id);
    dispatch({ type: DELETE, payload: id });
    console.log('delete dispatched');
  } catch (error) {
    console.log(error);
  }
}