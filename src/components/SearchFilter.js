import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Input } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  searchInput: {
    color: blue
  }
}));
const SearchFilter = props => {
  const classes = useStyles();

  return (
    <Input
      className={classes.searchInput}
      type="text"
      name="searchFilter"
      id="searchFilter"
    />
  );
};

SearchFilter.defaultProps = {
  input: ''
};

SearchFilter.propTypes = {
  input: PropTypes.string.isRequired
};

export default SearchFilter;
