
import PropTypes from 'prop-types';
import React from 'react';
import {
  List,
  ContactLi,
  ContactName,
  ContactNumber,
  DeleteBut,
} from './contactList.styled';

function ContactList({ contacts, remove }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactLi key={id}>
            <ContactName>{name}</ContactName>:
            <ContactNumber>{number}</ContactNumber>
            <DeleteBut onClick={() => remove(id)}>Delete</DeleteBut>
          </ContactLi>
        );
      })}
    </List>
  );
}

ContactList.propTypes = {
  remove: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
