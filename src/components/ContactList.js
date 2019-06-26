import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, TextField, IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';

import { fetchContacts, postContact } from '../store/actions';
import ContactItem from './ContactItem';

class ContactListComponent extends Component {
  constructor(props) {
    super(props);
    this.fetchedContacts = this.fetchedContacts.bind(this);
    this.onSearchInputChange = this.onSearchInputChange.bind(this);
    this.state = {
      searchInput: '',
      filteredContacts: []
    };
  }

  componentDidMount() {
    this.props.fetchContacts(this.fetchedContacts);
  }

  fetchedContacts(result) {
    this.setState({
      filteredContacts: result
    });
  }

  onSearchInputChange($event) {
    const val = $event.target.value;
    this.setState({ searchInput: val });
    let res =
      val !== ''
        ? this.props.contacts.data.filter(
            item => item && item.name.toLowerCase().includes(val.toLowerCase())
          )
        : this.props.contacts.data;
    this.setState({
      filteredContacts: res
    });
  }
  render() {
    const { is_contacts_loading } = this.props.contacts;    
    return (
      <Container maxWidth="md" className="listContainer">
        <TextField
          label="Search Name"
          id="searchField"
          onChange={this.onSearchInputChange}
          value={this.state.searchInput}
        />

        <IconButton
          color="default"
          href="/contacts/new"
          aria-label="Add to contact manager"
        >
          <AddIcon />
        </IconButton>

        {is_contacts_loading && (
          <div style={{ marginTop: '10%' }}>
            <b>Loading...</b>
          </div>
        )}
        <Grid container spacing={3}>
          {this.state.filteredContacts.map((item, index) => {            
            return (
              <Grid item xs={12} sm={6} md={6} lg={6} key={index}>                
                <ContactItem item={item} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    );
  }
}

ContactListComponent.defaultProps = {
  contacts: {}
};

ContactListComponent.propTypes = {
  contacts: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    contacts: state.contacts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchContacts: function(cb) {
      dispatch(fetchContacts(cb));
    },
    postContact: function(newContact) {
      dispatch(postContact(newContact));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactListComponent);
