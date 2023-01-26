export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.filter;

export const selectfilterContacts = state => {
    const contacts = selectContacts(state);
    const filterWord = selectFilter(state);

    return contacts.filter(cont => {
    return cont.name.toLowerCase().includes(filterWord.toLowerCase());
    });
    
} 