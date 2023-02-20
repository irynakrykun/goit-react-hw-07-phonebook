import { createSlice } from '@reduxjs/toolkit';

const ContactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: ContactsInitialState,
  reducer: {
    fetchPending(state) {
      state.isLoading = true;
    },
    fetchFulfilled(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchRejected(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPending, fetchFulfilled, fetchRejected } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
