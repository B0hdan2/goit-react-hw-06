import { nanoid } from "nanoid";
import { ADD, DELETE, FILTER } from "./constants";

export const addContact = (name, number) => {
  return {
    type: ADD,
    payload: {
      id: nanoid(),
      name: name,
      number: number,
    },
  };
};

export const deleteContact = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};

export const setFilter = (value) => {
  return {
    type: FILTER,
    payload: value,
  };
};
