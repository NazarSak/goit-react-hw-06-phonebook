import { useDispatch } from 'react-redux';
// import { selectVisibleContacts } from 'redux/selector';
import { filterContact } from 'redux/filterSlice';
import { FilterDiv, FilterLabel, FilterInput } from './filter.styled';



const Filter = () => {
  // const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <>
    
        <FilterDiv>
          <FilterLabel>
            Find contacts by name
            <FilterInput
              type="text"
              name="filter"
              onChange={e => dispatch(filterContact(e.target.value))}
            />
          </FilterLabel>
        </FilterDiv>
      
    </>
  );
};

export default Filter;
