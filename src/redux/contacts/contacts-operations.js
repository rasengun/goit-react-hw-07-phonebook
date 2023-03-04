import * as api from 'shared/services/api';

import * as actions from './contacts-actions';

export const fetchAllContacts = () => {
  const func = async dispatch => {
    try {
      dispatch(actions.fetchAllContactsLoading());
      const data = await api.getAllContacts();
      dispatch(actions.fetchAllContactsSuccess(data));
    } catch ({ response }) {
      dispatch(actions.fetchAllContactsError(response.data.message));
    }
  };

  return func;
};

export const fetchAddContact = data => {
  const func = async (dispatch, getState) => {
    try {
      const { contacts } = getState();
      if (contacts.items.find(contact => contact.name === data.name)) {
        alert(`${data.name} is already in contacts`);
        return;
      }
      dispatch(actions.fetchaAddContactsLoading());
      const result = await api.addContact(data);
      dispatch(actions.fetchaAddContactsLoading(result));
    } catch ({ response }) {
      dispatch(actions.fetchAddContactsError(response.data.message));
    }
  };

  return func;
};

export const fetchDeleteContact = id => {
  const func = async dispatch => {
    try {
      dispatch(actions.fetchaDeleteContactsLoading());
      const data = await api.deleteContact(id);
      dispatch(actions.fetchDeleteContactsSuccess(data));
    } catch ({ response }) {
      dispatch(actions.fetchDeleteContactsError(response.data.message));
    }
  };

  return func;
};
