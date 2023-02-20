
import { LabelTitle, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';



const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  const handelFilter = (e) => {
    const searchContact = e.currentTarget.value
    dispatch(setFilter(searchContact))
       
   }

  return (
    <>
      <LabelTitle>
        Find contacts by name
        <Input type="text" name="filter" onChange={handelFilter} value={value}></Input>
      </LabelTitle>
    </>
  );
};

export default Filter;
