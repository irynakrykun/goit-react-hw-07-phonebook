import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
// import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { Button, FormLabel, FormErr } from './FormContacts.styled';
import {  useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';


const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().min(9).max(11).required(),
});

const initialValues = {
  name: '',
  number: '',
  // id: nanoid(4),
};

const FormContacts = () => {
  // const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    } else if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts`);
      return;
    }

 
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormLabel autoComplete="off">
        <label htmlFor="name">
          Name
          <Field type="text" name="name" />
          <FormErr name="name" />
        </label>
        <label htmlFor="number">
          Number
          <Field type="tel" name="number" />
          <FormErr name="number" />
        </label>
        <Button type="submit">Add contact</Button>
      </FormLabel>
    </Formik>
  );
};

FormContacts.propTypes = {
  initialValues: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  validationSchema: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default FormContacts;
