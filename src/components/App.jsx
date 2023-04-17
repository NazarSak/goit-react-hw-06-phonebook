import Form from './form/Form';
import { Header } from './header/Header';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';

export default function App() {
  return (
    <>
      <Header title={'Phonebook'} />
      <Form />
      <Header title={'Contacts'} />
      <Filter />
      <ContactList />
    </>
  );
}
