import { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import { useSelector, useDispatch } from 'react-redux';

import {
  fetchAllContacts,
  fetchAddContact,
} from 'redux/contacts/contacts-operations';

import { setFilter } from 'redux/filter/filter-slice';

const Phonebook = () => {
  const filter = useSelector(store => store.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const onAddContact = ({ name, number }) => {
    dispatch(fetchAddContact({ name, number }));
  };

  const onFilter = e => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={onAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChangeFilter={onFilter} />
      <ContactList />
    </>
  );
};

export default Phonebook;
