import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import { Button, FormLabel, FormErr } from './FormContacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const schema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.string().min(9).max(9).required(),
});

const initialValues = {
  name: '',
  phone: '',
};

const FormContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    const { name, phone } = values;
    console.log(values);

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    } else if (contacts.find(contact => contact.phone === phone)) {
      alert(`${phone} is already in contacts`);
      return;
    }
    dispatch(addContact(values));

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
        <label htmlFor="phone">
          Number
          <Field type="tel" name="phone" />
          <FormErr name="phone" />
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
