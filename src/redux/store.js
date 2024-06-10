import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // вибір стандартного локального сховища
import contactsReducer from './contactsSlice'
import filtersReducer from './filtersSlice'
//Налаштування для збереження даних у локальному сховищі (localStorage).
// Налаштування persist конфігурації
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'], // вказуємо, що хочемо зберігати
}
// Створення стору.Основний store, який об'єднує редюсери контактів та фільтрів
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
})
// Застосування конфігурації до редюсера слайса контактів
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Налаштування store з підтримкою redux-persist
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
// Створення persistor для PersistGate.Об'єкт, який керує збереженням стану в localStorage.
export const persistor = persistStore(store)
export default store