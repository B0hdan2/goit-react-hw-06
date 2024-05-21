import { nanoid } from "nanoid";

export const addContact = {
  type: "contact/addcontact",
  payload: {
    id: nanoid(),
    text: "User entered text",
  },
};

export const deleteContact = {
  type: "contact/deleteContact",
  payload: "Task id",
};

export const setFilter = {
  type: "filter/setFilter",
  payload: "Filter value",
};
