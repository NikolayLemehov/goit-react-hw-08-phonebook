import s from './RegisterView.module.css'
import {useDispatch} from "react-redux";
import {useState} from "react";
import {capitalizeFirstLetter} from "../../../utils/utils";
import authOperations from "../../../store/auth.operations";
import { useLocation } from 'react-router-dom';

const initFields = {
  name: '',
  email: '',
  password: '',
}

export default function RegisterView() {
  const dispatch = useDispatch();
  const [fields, setFields] = useState(initFields);

  const onInputChange = ({target: {name, value}}) => {
    setFields(prev => ({...prev, [name]: value}))
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register(fields));
    setFields(initFields);
  }


  return (
    <div>
      <form className={s.form} onSubmit={onFormSubmit}>
        {Object.keys(fields).map(key => (
          <div key={key}>
            <label>
              {capitalizeFirstLetter(key)} <input
              value={fields[key]}
              name={key}
              onChange={onInputChange}
              type="text"/>
            </label>
          </div>
        ))}
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
