import { useState } from "react";

const useNotification = (): any => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState({
    type: "",
    content: "",
  });

  const notification = (
    message: { type: string; content: string },
    time = 5000
  ) => {
    setShowNotification(true);
    setNotificationMessage(message);
    setTimeout(() => {
      setShowNotification(false);
    }, time);
  };
  return [showNotification, notificationMessage, notification];
};

export default useNotification;
