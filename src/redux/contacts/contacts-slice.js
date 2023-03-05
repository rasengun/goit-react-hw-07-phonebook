import { createSlice } from '@reduxjs/toolkit';

import * as actions from './contacts-actions';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(actions.fetchAllContactsLoading, store => {
        store.loading = true;
      })
      .addCase(actions.fetchAllContactsSuccess, (store, { payload }) => {
        store.loading = false;
        store.items = payload;
      })
      .addCase(actions.fetchAllContactsError, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(actions.fetchaAddContactsLoading, store => {
        store.loading = true;
      })
      .addCase(actions.fetchAddContactsSuccess, (store, { payload }) => {
        store.loading = false;
        store.items.push(payload);
      })
      .addCase(actions.fetchAddContactsError, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(actions.fetchaDeleteContactsLoading, store => {
        store.loading = true;
      })
      .addCase(actions.fetchDeleteContactsSuccess, (store, { payload }) => {
        store.loading = false;
        const index = store.items.findIndex(item => item.id === payload);
        store.items.splice(index, 1);
      })
      .addCase(actions.fetchDeleteContactsError, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});

export default contactsSlice.reducer;
