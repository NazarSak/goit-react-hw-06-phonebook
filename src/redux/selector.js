
import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
        if (!contacts) return;
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    }
);