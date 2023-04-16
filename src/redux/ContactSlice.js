import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import  storage  from "redux-persist/lib/storage";

const contactsSlice = createSlice({
    name:"contacts",
    initialState:{
        items:[],
        filter:"",
    },

reducers:{
    addContacts(state,action) {
        state.items = [...state.items,action.payload];
    },
    deleteContact(state,action) {
        state.items = [...state.items.filter(item => item.id !== action.payload)];
    },
    setFilter(state,action) {
        state.filter = action.payload
    },
},

});

const persistConfig = {
 key : "contacts",
 storage,
 whitelist:["items"],
}

export const persistedReducer = persistReducer(
    persistConfig,
    contactsSlice.reducer
)

export const {addContacts,deleteContact,setFilter} = contactsSlice.reducer
export const getContacts = state => state.contacts.items
export const getFilter = state => state.contacts.filter