import { ACTION_TYPES } from "../types";

export const reducer = (state: any, action: { type: string; payload: any }) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_NOTIFICATION: {
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };
    }

    case ACTION_TYPES.REMOVE_NOTIFICATION: {
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification: { id: string }) =>
            notification.id !== action.payload.id
        ),
      };
    }

    default:
      return state;
  }
};
