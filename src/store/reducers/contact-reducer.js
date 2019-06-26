import {
  FETCH_CONTACTS,
  LOADING_CONTACTS,
  POST_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT
} from '../actions/types';
import { data as originalData } from './../../data';

const initial_state = {
  is_contacts_loading: false,
  data: []
};

export default function(state = initial_state, action) {
  switch (action.type) {
    case LOADING_CONTACTS:
      return {
        ...state,
        is_contacts_loading: true
      };
    case FETCH_CONTACTS:
      return {
        ...state,
        is_contacts_loading: false,
        data: action.payload
      };

    case POST_CONTACT:
      const new_id = +state.data[state.data.length - 1]['id'] + 1;
      const addItem = Object.assign({}, action.payload, {
        id: `${new_id}`,
        photo: 'https://via.placeholder.com/100'
      });
      originalData.push(addItem);
      return {
        ...state,
        is_contacts_loading: false,
        data: [...state.data, addItem]
      };
    case UPDATE_CONTACT:
      const input = action.payload;
      const updatedData = state.data.map(item => {
        if (item && item.id === action.payload.id) {
          item = {
            ...item,
            input
          };
          return item;
        }
        return item;
      });
      return {
        ...state,
        data: updatedData
      };
    case DELETE_CONTACT:
      const data = state.data;
      const updatedContacts = data.filter(
        item => item && item.id !== action.payload
      );
      return {
        ...state,
        data: updatedContacts
      };
    default:
      return state;
  }
}
