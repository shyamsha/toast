import React from "react";
import { ToastProvider } from "./components/notification/Notification";
import NotificationList from "./components/NotificationList";
import "./App.css";

function App() {
  return (
    <ToastProvider>
      <NotificationList />
    </ToastProvider>
  );
}

export default App;
