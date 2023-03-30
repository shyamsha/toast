import React from "react";
import NotificationList from "./components/Notification/NotificationList";
import "./App.css";
import { NotificationProvider } from "./components/Notification/NotificationProvider";

function App() {
  return (
    <NotificationProvider>
      <NotificationList />
    </NotificationProvider>
  );
}

export default App;
