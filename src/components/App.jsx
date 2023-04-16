import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Form from './form/Form';
import { Header } from './header/Header';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';


const contactsList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]

export default function App() {

  const [contacts, setContacts] = useState( () => JSON.parse(window.localStorage.getItem("contacts")) ?? contactsList);


  // 
  const [filter, setFilter] = useState('');
  // 
  

useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);





  const handleSubmit = ({ name, number }) => {
    const ID = nanoid();
    const string = contacts.filter(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    string.length !== 0
      ? hendleCoincidence(name)
      : setContacts(prevContacts => {
          return [...prevContacts, { id: ID, name, number }];
        });
  };

  const hendleCoincidence = name => {
    alert(`${name} is already in contacts`);
  };

  const ChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const hendeleClickDelete = id => {
    setContacts(contacts.filter(el => el.id !== id));
  };

  const searchName = () => {
    const lowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCase)
    );
  };

  return (
    <>
      <Header title={'Phonebook'} />
      <Form onSubmit={handleSubmit} contacts={contacts} />
      <Header title={'Contacts'} />
      <Filter OnChangeFilter={ChangeFilter} valueFilter={filter} />
      {contacts.length > 0 && (
        <ContactList contacts={searchName()} remove={hendeleClickDelete} />
      )}
    </>
  );
}