import React from 'react';
import {
  List,
  ContactLi,
  ContactName,
  ContactNumber,
  DeleteBut,
} from './contactList.styled';
import { deleteContact } from 'redux/ContactSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selector';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <>
      {contacts.length > 0 && (
        <List>
          {contacts.map(({ id, name, number }) => {
            return (
              <ContactLi key={id}>
                <ContactName>{name}</ContactName>:
                <ContactNumber>{number}</ContactNumber>
                <DeleteBut
                  onClick={() => {
                    const action = deleteContact(id);
                    dispatch(action);
                  }}
                >
                  Delete
                </DeleteBut>
              </ContactLi>
            );
          })}
        </List>
      )}
    </>
  );
};

export default ContactList;
