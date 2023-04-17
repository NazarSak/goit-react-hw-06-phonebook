import {configureStore} from '@reduxjs/toolkit';
import { contactsReducer } from './ContactSlice';
import { filterReducer } from './filterSlice';
import storage  from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  FLUSH,
} from 'redux-persist';

const contactsPersistConfig = {
  key: 'contacts',
  storage: storage,
};

const contactsPersistReducer = persistReducer(contactsPersistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
      contacts: contactsPersistReducer,
      filter: filterReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
      serializableCheck: {
          ignoreActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE],
      },
  }),
});

export const persistor = persistStore(store);
