import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import contactsReducer from './contactsSlice'
import filtersReducer from './filtersSlice'
//Налаштування для збереження даних у локальному сховищі (localStorage).
const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
}
//Редюсер контактів з підтримкою збереження стану.
// Застосування конфігурації до редюсера слайса контактів
const persistedContactsReducer = persistReducer(persistConfig, contactsReducer)

// Створення стору.Основний store, який об'єднує редюсери контактів та фільтрів.
export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
})

// Створення persistor для PersistGate.Об'єкт, який керує збереженням стану в localStorage.
export const persistor = persistStore(store)