import { useSelector } from 'react-redux';

import { ContactListItem } from './ContactListItem';

export const ContactList = () => {
  const contacts = useSelector(store => store.contacts.items);
  const filter = useSelector(store => store.filter);

  const filterContacts = () => {
    if (!filter) {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const contactsList = filterContacts();

  return (
    <ul>
      {contactsList.map(({ id, name, number }) => {
        return (
          <ContactListItem key={id} name={name} number={number} nameId={id} />
        );
      })}
    </ul>
  );
};

export default ContactList;
