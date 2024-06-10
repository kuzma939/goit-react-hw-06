import { createSlice } from '@reduxjs/toolkit'

const filtersSlice = createSlice({
  name: 'filters',
  // initialState-Початковий стан для фільтрів, який містить порожній рядок name.
  initialState: { 
    name: '',
  },
  reducers: {
   // changeFilter-Дія для зміни значення фільтра.
    changeFilter: (state, action) => {
      state.name = action.payload
    },
  },
})

export const { changeFilter } = filtersSlice.actions
export const selectNameFilter = state => state.filters.name //selectNameFilter: Селектор для отримання значення фільтра зі стану.
export default filtersSlice.reducer