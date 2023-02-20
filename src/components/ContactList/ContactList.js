import Contact from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { List, ListItem } from './ContactList.styled';

const filterContacts = (items, filter) =>
  items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

const ContactList = () => {
  const items = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = filterContacts(items, filter);

  return (
    <List>
      {visibleContacts.map((item, id) => (
        <ListItem key={id}>
          <Contact contact={item} />
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
