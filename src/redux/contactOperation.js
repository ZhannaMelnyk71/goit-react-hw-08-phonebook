import { createAsyncThunk } from '@reduxjs/toolkit';
import * as Api from 'services/Api';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await Api.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await Api.deleteContact(contactId);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await Api.addContact(contact);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);