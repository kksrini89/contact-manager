import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Header.js';
import Contacts from './Contacts';

export const Root = _ => {
  return (
    <div>
      <Header />(
      <Switch>
        <Route path="/contacts" component={Contacts} />
      </Switch>
      )
    </div>
  );
};
