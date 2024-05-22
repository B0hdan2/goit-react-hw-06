import { ADD, DELETE, FILTER } from "./constants";

const initialState = {
  tasks: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  filter: "",
};

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    }
    case DELETE:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
