import React, { useState } from 'react';
import s from './ContactForm.module.css';
import InputField from '../InputField';
import {useAddContactItemMutation} from "../../store/contacts.service";

const initValue = {
  name: '',
  number: '',
};

function ContactForm() {
  const [value, setValue] = useState(initValue);
  const [addContactItem] = useAddContactItemMutation();

  const handleInputChange = (e) => setValue((p) =>
    ({...p, [e.target.name]: e.target.value }));

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addContactItem(value);
    setValue(initValue)
  };

  const { name, number } = value;
  return (
    <form className={s.container} onSubmit={handleFormSubmit}>
      <InputField
        label='Name'
        value={name}
        onChange={handleInputChange}
        type='text'
        name='name'
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <InputField
        label='Number'
        value={number}
        onChange={handleInputChange}
        type='tel'
        name='number'
        pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
        title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
        required
      />
      <button className={s.btn} type='submit'>Add contact</button>
    </form>
  );
}

export default ContactForm;
