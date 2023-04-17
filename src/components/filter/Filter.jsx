import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selector';
import { filterContact } from 'redux/filterSlice';
import { FilterDiv, FilterLabel, FilterInput } from './filter.styled';

const Filter = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <>
      {contacts.length > 0 && (
        <FilterDiv>
          <FilterLabel >
            Find contacts by name
            <FilterInput
              type="text"
              name="filter"
              onChange={event => {
                const { value } = event.target;
                const action = filterContact(value);
                dispatch(action);
              }}
            
            />
          </FilterLabel>
        </FilterDiv>
      )}
    </>
  );
};



export default Filter;



