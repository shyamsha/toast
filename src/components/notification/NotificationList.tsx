import React, { useContext } from "react";
// import useNotification from "../components/hooks/useNotification";
import { ToastContext } from "./Notification";

function NotificationList() {
  // const { handleNotification, showNotification }: any = useNotification();
  const setToast = useContext(ToastContext);
  const handleClick = (e: { target: any }) => {
    const { target } = e;
    const type = target.getAttribute("data-type");
    const message = `${type} Notification`;
    // handleNotification(type, message);
    // showNotification({
    //   type,
    //   message: message,
    // });
    setToast({
      type: type,
      message: message,
    });
  };

  return (
    <div className="content">
      <h1>Add Notification</h1>
      <div className="actions">
        <button className="info" onClick={handleClick} data-type="INFO">
          Info
        </button>
        <button className="success" onClick={handleClick} data-type="SUCCESS">
          Success
        </button>
        <button className="warning" onClick={handleClick} data-type="WARNING">
          Warning
        </button>
        <button className="error" onClick={handleClick} data-type="ERROR">
          Error
        </button>
      </div>
    </div>
  );
}

export default NotificationList;
