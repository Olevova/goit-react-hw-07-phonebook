import { createSlice } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
import { fetchContacts, deleteContact, addContacts} from 'services/fetch';

const handlePending = state => {
    state.isLoading = true;
};


const contactSlice = createSlice({
    name: "contacts",
    initialState:
    {
        contacts: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchContacts.pending]:handlePending,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.contacts = action.payload;
        },
        [fetchContacts.rejected](state, action) {
            state.error = action.payload;
        },

        [addContacts.pending]:handlePending,
        [addContacts.fulfilled](state, action){
            state.contacts.push(action.payload);
            state.isLoading = false;
        },
        [addContacts.rejected](state,action){
              state.error = action.payload;  
        },
        [deleteContact.pending]:handlePending,
        [deleteContact.fulfilled](state, action) {
            state.contacts = state.contacts.filter(item => item.id !== action.payload );
            state.isLoading = false;
        },
        [deleteContact.rejected](state, action) {
            state.error = action.payload;
        }

    }
    
});



// export const { fetchContacts, addContacts } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;


// reducers: {
//         addcontact(state, action) {
//             state.contacts.push(action.payload)
//         },
//         delcontact(state, action) {
//             return {contacts: state.contacts.filter(i => i.id !== action.payload) }
//         }
//     }