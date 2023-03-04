import { createAction } from '@reduxjs/toolkit';

export const fetchAllContactsLoading = createAction('contacts/fetch/loading');
export const fetchAllContactsSuccess = createAction('contacts/fetch/success');
export const fetchAllContactsError = createAction('contacts/fetch/error');

export const fetchaAddContactsLoading = createAction('contacts/add/loading');
export const fetchAddContactsSuccess = createAction('contacts/add/success');
export const fetchAddContactsError = createAction('contacts/add/error');

export const fetchaDeleteContactsLoading = createAction(
  'contacts/delete/loading'
);
export const fetchDeleteContactsSuccess = createAction(
  'contacts/delete/success'
);
export const fetchDeleteContactsError = createAction('contacts/delete/error');
