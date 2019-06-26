import React from 'react';
import { Provider } from 'react-redux';

import Contacts from './components/Contacts';
import Header from './components/Header';
import store from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Contacts />
      </div>
    </Provider>
  );
}

export default App;
