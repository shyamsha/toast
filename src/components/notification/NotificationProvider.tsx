import { useReducer, createContext, useContext, useCallback } from "react";

import Notification from "./Notification";

import { addNotification } from "./state/actions";
import { reducer } from "./state/reducer";
import { ADD_NOTIFICATION } from "./types";

const NotificationContext = (createContext as any)();

export const useNotifications = () => {
  const dispatch = useContext(NotificationContext);

  if (!dispatch) {
    throw new Error(
      "useNotifications can only be used inside NotificationContext"
    );
  }

  const showNotification = useCallback(
    ({ type, message }: ADD_NOTIFICATION) => {
      (dispatch as any)(
        addNotification({
          type,
          message,
        })
      );
    },
    []
  );

  return { showNotification };
};

export const NotificationProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, {
    notifications: [],
  });

  return (
    <NotificationContext.Provider value={dispatch}>
      <div className="notifications-wrapper">
        {state.notifications.map((notification: any) => {
          return (
            <Notification
              key={notification.id}
              dispatch={dispatch}
              {...notification}
            />
          );
        })}
      </div>
      {props.children}
    </NotificationContext.Provider>
  );
};
