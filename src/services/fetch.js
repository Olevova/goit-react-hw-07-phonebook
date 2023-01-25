import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://63cedec7fdfe2764c72c14b5.mockapi.io/";

export const fetchContacts =
  createAsyncThunk("contacts/fetchAll", async (_,thunkAPI) => {
  try {
    const response = await axios.get("/contacts");
    console.log(response.data);
    return response.data;
  }
  catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
  
});



export const addContacts = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
   try {
  const response = await axios.post("/contacts",contact);
     return response.data;
  }
   catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
  try {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data.id;
      }
  catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});