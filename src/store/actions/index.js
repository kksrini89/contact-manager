import { data } from '../../data';
import { FETCH_CONTACTS, LOADING_CONTACTS, POST_CONTACT, DELETE_CONTACT } from './types';

export const loadingContacts = () => {
  return {
    type: LOADING_CONTACTS
  };
};

export const fetchContacts = cb => dispatch => {
  dispatch(loadingContacts());
  return setTimeout(() => {
    cb(data);
    dispatch({ type: FETCH_CONTACTS, payload: data });
  }, 2000);
};

export const postContact = contact => dispatch => {
  dispatch(loadingContacts());
  return setTimeout(() => {
    // data.push(contact);
    dispatch({ type: POST_CONTACT, payload: contact });
  }, 2000);
};

export const deleteContact = id => dispatch => {
  return setTimeout(() => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  }, 2000);
}
