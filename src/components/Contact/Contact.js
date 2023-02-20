import { Description, Button } from '../Contact/Contact.styled';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlice';

const Contact = ({ contact: { id, name, phone } }) => {
//   const dispatch = useDispatch();
//    const handleDelete = () => dispatch(deleteContact(id));
  return (
    <>
      <Description>{name}</Description>
          <Description>{phone}</Description>
           <Button type="button" onClick>Delete</Button>

          {/* <Button type="button" onClick={handleDelete}>Delete</Button> */}
    </>
  );
};
Contact.propTypes = {
  contact:PropTypes.shape({
    id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  }),
 
};

export default Contact;
