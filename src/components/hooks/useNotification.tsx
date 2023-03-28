import { useState, useEffect } from "react";
import { showNotification } from "../types";

function useNotification() {
  const [showNotification, setShowNotification] = useState<showNotification>({
    type: "",
    message: "",
  });

  const handleNotification = (type: string, message: string) => {
    setShowNotification({
      type,
      message,
    });

    setTimeout(() => {
      setShowNotification({
        ...showNotification,
      });
    }, 2000);

    // return { type, message };
  };
  useEffect(() => {
    return () => {};
  }, []);

  return [handleNotification, showNotification];
}

export default useNotification;
