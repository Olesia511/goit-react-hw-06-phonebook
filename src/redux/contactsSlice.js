import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [
  { id: 0, name: "Olesia", number: "123-12-12" },
  { id: 1, name: "Max", number: "123-12-12" }
];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            id: nanoid(),
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    }

  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
