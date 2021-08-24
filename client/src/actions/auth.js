import { AUTH } from '../constants/actionTypes';
import * as api from '../api';

export const signin = (fromData, history) => async (dispatch) => {
    try {

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const signup = (fromData, history) => async (dispatch) => {
    try {

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}