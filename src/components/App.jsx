import Form from './form/Form';
import { Header } from './header/Header';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';


// const contactsList = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ]

export default function App() {

  return (
    <>
      <Header title={'Phonebook'} />
      <Form/>
      <Header title={'Contacts'} />
      <Filter/>
      <ContactList/>
    </>
  );
}