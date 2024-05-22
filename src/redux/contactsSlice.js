import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const slice = createSlice({
  name: "contacts",
  initialState,
  selectors: {
    selectContact: (state) => state.items,
  },
  reducers: {
    addContact: {
      prepare: (name, number) => {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const contactsReducer = slice.reducer;
export const { addContact, deleteContact } = slice.actions;
export const { selectContact } = slice.selectors;
