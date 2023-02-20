import axios from "axios";
import {fetchPending, fetchFulfilled, fetchRejected} from './contactsSlice'

axios.defaults.baseURL = 'https://63f33c8efe3b595e2edda06b.mockapi.io';

export const fetchContacts = () => async dispatch => {
       try {
        dispatch(fetchPending());
        const response = await axios.get('/contacts');
        dispatch(fetchFulfilled(response.data));
        
       } catch (error) {
           dispatch(fetchRejected(error))
        
    }
}