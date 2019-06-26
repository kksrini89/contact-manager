import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import { postContact } from '../store/actions';

const useStyles = makeStyles(theme => ({
  'new-contact-form': {
    padding: '25%'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

const initialState = {
  name: '',
  mobile_number: 0,
  email: '',
  title: '',
  group: '',
  type: ''
};

const ContactNew = props => {
  const [value, setValue] = useState(initialState);
  const classes = useStyles();
  const handleChange = name => event => {
    setValue({ ...value, [name]: event.target.value });
  };

  // Form submission
  const onNewContact = event => {
    try {
      event.preventDefault();
      console.log(value);
      console.log(props);
      props.postContact(value);
      props.history.push('/');
    } catch (error) {
      throw error;
    }
  };
  return (
    <div className={classes['new-contact-form']}>
      <form onSubmit={onNewContact} noValidate autoComplete="off">
        <TextField
          label="Name"
          id="nameFieldId"
          className={classes.textField}
          value={value.name}
          onChange={handleChange('name')}
          margin="normal"
        />
        <TextField
          type="number"
          label="Mobile Number"
          id="dialNumberFieldId"
          value={value.mobile_number}
          onChange={handleChange('mobile_number')}
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
        />
        <TextField
          type="text"
          label="Email"
          id="emailFieldId"
          onChange={handleChange('email')}
          value={value.email}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          label="Title"
          id="titleFieldId"
          className={classes.textField}
          value={value.title}
          onChange={handleChange('title')}
          margin="normal"
        />
        <TextField
          label="Group"
          id="groupFieldId"
          className={classes.textField}
          value={value.group}
          onChange={handleChange('group')}
          margin="normal"
        />
        <TextField
          label="Type"
          id="typeFieldId"
          className={classes.textField}
          value={value.type}
          onChange={handleChange('type')}
          margin="normal"
        />
        {/* <TextField
        id="standard-select-currency"
        select
        label="Select"
        className={classes.textField}
        value={values.currency}
        onChange={handleChange('currency')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Please select your currency"
        margin="normal"
      ></TextField> */}

        {/*<div>
          <label>Name</label>
          <input type="text" name="nameField" id="nameFieldId" />
        </div> 
        <div>
          <label>Mobile Number</label>
          <input
            type="number"
            pattern="/^[0-9]{10}/"
            name="dialNumberField"
            id="dialNumberFieldId"
          />
        </div>
        <div>
          <label>Email</label>
          <input type="text" name="emailField" id="emailFieldId" />
        </div>
        <div>
          <label>Title</label>
          <input type="text" name="titleField" id="titleFieldId" />
        </div>
        <div>
          <label>Group</label>
          <input type="text" name="groupField" id="groupFieldId" />
        </div>
        <div>
          <label>Type</label>
          <input type="text" name="typeField" id="typeFieldId" />
        </div>*/}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    postContact: function(newContact) {
      dispatch(postContact(newContact));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ContactNew);
