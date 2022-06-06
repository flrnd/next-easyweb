import { useState } from "react";
import { INotificationMessage } from "../types";

const useNotification = (): any => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] =
    useState<INotificationMessage>({
      type: "",
      content: "",
    });

  const notification = (message: INotificationMessage, time = 5000) => {
    setShowNotification(true);
    setNotificationMessage(message);
    setTimeout(() => {
      setShowNotification(false);
    }, time);
  };
  return [showNotification, notificationMessage, notification];
};

export default useNotification;
