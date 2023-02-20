import FormContacts from '../FormContacts/FormContacts';
import { Contain, PhoneBook, PhoneContacts } from './App.styled';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading, getError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Contain>
      <PhoneBook>Phonebook</PhoneBook>
      <FormContacts />
      <PhoneContacts>Contacts</PhoneContacts>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </Contain>
  );
};

export default App;
