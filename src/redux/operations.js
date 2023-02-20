import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import {fetchPending, fetchFulfilled, fetchRejected} from './contactsSlice'

axios.defaults.baseURL = 'https://63f33c8efe3b595e2edda06b.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const fetchContacts = () => async dispatch => {
//        try {
//         dispatch(fetchPending());
//            const response = await axios.get('/contacts');
//            console.log(response);
//            dispatch(fetchFulfilled(response.data));
//            return response.data;

//        } catch (error) {
//            dispatch(fetchRejected(error))

//     }
// }
