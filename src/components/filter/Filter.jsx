import PropTypes from 'prop-types';
import shortid from 'shortid';
import React from 'react';
import { FilterDiv,FilterLabel,FilterInput } from './filter.styled';

const Filter = ({ OnChangeFilter,valueFilter }) => {
  const filterID = shortid.generate();

  return (
    <FilterDiv>
      <FilterLabel htmlFor={filterID}>Find contacts by name
      <FilterInput
        type="text"
        name="name"
        id={filterID}
        onChange={OnChangeFilter}
        value={valueFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      </FilterLabel>
    </FilterDiv>
  );
};

Filter.propTypes = {
  OnChangeFilter: PropTypes.func.isRequired,
  valueFilter:PropTypes.string.isRequired
};

export default Filter;
