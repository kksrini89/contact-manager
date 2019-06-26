import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ContactNew from './ContactNew';
import ContactList from './ContactList';

const Contacts = () => (
  <Switch>
    <Route path="/" exact component={ContactList} />
    <Route path="/contacts/new" component={ContactNew} />
  </Switch>
);

export default Contacts;
