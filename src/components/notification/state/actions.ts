import { v4 } from "uuid";

import { ACTION_TYPES, ADD_NOTIFICATION } from "../types";

export const addNotification = ({ message, type }: ADD_NOTIFICATION) => {
  return {
    type: ACTION_TYPES.ADD_NOTIFICATION,
    payload: {
      id: v4(),
      type,
      message,
    },
  };
};

export const removeNotification = (id: string) => {
  return {
    type: ACTION_TYPES.REMOVE_NOTIFICATION,
    payload: {
      id,
    },
  };
};
