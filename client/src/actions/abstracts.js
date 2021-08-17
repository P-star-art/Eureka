import * as api from '../api';

export const getAbstracts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAbstracts();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
    
}

export const createAbstract = (abstract) => async (dispatch) => {
    try {
      const { data } = await api.createAbstract(abstract);
      dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };