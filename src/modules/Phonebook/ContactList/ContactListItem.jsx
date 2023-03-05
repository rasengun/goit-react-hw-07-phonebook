import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

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

ContactListItem.propTypes = {
  nameId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
