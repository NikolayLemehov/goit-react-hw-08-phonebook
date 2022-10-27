import React  from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';
import {useDeleteContactByIdMutation} from "../../store/contacts.service";

function ContactItem({id, name, number}) {
  const [deleteContactById] = useDeleteContactByIdMutation();

  return (
    <li key={id} className={s.item}>
      <span className={s.name}>{name}</span>
      <span>{number}</span>
      <button
        type='button'
        onClick={() => deleteContactById(id)}
      >Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
