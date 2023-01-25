import { createSlice } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
import { fetchContacts, deleteContact, addContacts} from 'services/fetch';



const contactSlice = createSlice({
    name: "contacts",
    initialState:
    {
        contacts: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchContacts.pending](state) {
            console.log("gruz");
            state.isLoading = true;
        },
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.contacts = action.payload;
        },
        [addContacts.fulfilled](state, action){
            state.contacts.push(action.payload);
        },

        [deleteContact.fulfilled](state, action) {
            console.log(action.payload.id);
            state.contacts = state.contacts.filter(item => item.id !== action.payload );
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