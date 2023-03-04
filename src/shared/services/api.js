import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6403694af61d96ac487f1c15.mockapi.io/api/contacts',
});

export const getAllContacts = async () => {
  const { data } = await instance.get(`/`);
  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post(`/`, data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};
