import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
// import { filterReducer } from './filterSlice';


// import { combineReducers } from 'redux';

// const contactReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// export const store = configureStore({
//   reducer: contactReducer,
// });
export const store = configureStore({
  reducer: {
    contacts: contactsReducer
  },

});
