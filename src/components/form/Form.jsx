import shortid from 'shortid';
import { useState } from 'react';
import { FormContact, LabelContact, FormDiv, FormInput } from './form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/ContactSlice';
import { nanoid } from '@reduxjs/toolkit';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const nameInputId = shortid.generate();
  const nameInputIdsec = shortid.generate();

  const string = contacts.filter(
    el => el.name.toLowerCase() === name.toLowerCase()
  );

  const handleSubmit = e => {
    e.preventDefault();

    const hendleCoincidence = name => {
      alert(`${name} is already in contacts`);
    };

    const contact = {
      name,
      number,
      id: nanoid(),
    };

    string.length !== 0
      ? hendleCoincidence(name)
      : dispatch(addContact(contact)) && reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  return (
    <FormContact onSubmit={handleSubmit}>
      <FormDiv>
        <LabelContact htmlFor={nameInputId}>
          Name
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
            id={nameInputId}
          />
        </LabelContact>
        <LabelContact htmlFor={nameInputIdsec}>
          Number
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
            id={nameInputIdsec}
          />
        </LabelContact>
        <button type="Submit">Add contact</button>
      </FormDiv>
    </FormContact>
  );
}
