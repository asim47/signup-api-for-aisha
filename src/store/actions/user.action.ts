import * as ReducerActions from '../reducers/';
import * as Actions from './';
import { AppThunkPromise } from '../store';
import axios from 'axios';
import { API_ENDPOINT } from '../../constants';


export const loginAction = (body: Record<string, string>): AppThunkPromise<string | void> => {
  return async (dispatch) => {
    try {
    } catch (error) {
      if (error instanceof Error) {
        return error.message;
      }
    }
  };
};



export const signUpAction = (
  name: string,
  email: string,
  password: string,
  gender: string,
): AppThunkPromise<string | void> => {
  return async (dispatch) => {
    try {

      const body = {
        "Name": name,
        "Email": email,
        "Password": password,
        "Gender": gender
      }

      const res = await axios.post(`${API_ENDPOINT}/api/v1/customer/create`, body)

      dispatch(ReducerActions.setUserData({
        customer: res.data.Customer,
        token: res.data.Token
      }))

    } catch (error: any) {
      console.log(error?.response?.data?.Msg)
      return error?.response?.data?.Msg || "Something went wrong"
    }
  };
};