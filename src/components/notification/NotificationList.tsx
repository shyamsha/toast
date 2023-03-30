import React from "react";
import { useNotifications } from "./NotificationProvider";

function NotificationList() {
  const { showNotification }: any = useNotifications();
  const handleClick = (e: { target: any }) => {
    const { target } = e;
    const type = target.getAttribute("data-type");
    const message = `${type} Notification`;
    showNotification({
      type,
      message,
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
