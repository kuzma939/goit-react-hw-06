
import { createSlice } from '@reduxjs/toolkit'

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload)
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload)
    },
  },
})

// Експортуємо екшени
export const { addContact, deleteContact } = contactsSlice.actions

// Оголошуємо функцію-селектор для використання в useSelector
export const selectContacts = state => state.contacts.items

// Експортуємо редюсер
export default contactsSlice.reducer