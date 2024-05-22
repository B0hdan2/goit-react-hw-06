import { createAction, nanoid } from "@reduxjs/toolkit";

export const addContact = createAction("add", (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
});

export const deleteContact = createAction("delete");

export const setFilter = createAction("filter");
