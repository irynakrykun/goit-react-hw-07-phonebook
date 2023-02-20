import FormContacts from '../FormContacts/FormContacts';
import { Contain, PhoneBook, PhoneContacts } from './App.styled';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "redux/selectors";
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);
  console.log(items);
  console.log(isLoading);
  console.log(error);

  useEffect(()=> {
    dispatch(fetchContacts());
  }, [dispatch]);
    
  return (
    <Contain>
      <PhoneBook>Phonebook</PhoneBook>
      <FormContacts />

      <PhoneContacts>Contacts</PhoneContacts>

      <Filter />
      <ContactList />
    </Contain>
  );
};

export default App;
