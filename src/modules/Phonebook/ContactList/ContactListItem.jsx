import { useDispatch } from 'react-redux';

import { fetchDeleteContact } from 'redux/contacts/contacts-operations';

export const ContactListItem = ({ nameId, name, number }) => {
  const dispatch = useDispatch();

  const onDeletingContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  return (
    <li>
      <span>Name: {name}</span>
      <span>Phone: {number}</span>
      <button onClick={() => onDeletingContact(nameId)} type="button">
        Delete
      </button>
    </li>
  );
};
