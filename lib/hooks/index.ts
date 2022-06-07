import { useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, INotificationMessage, RootState } from "../types";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// notification
export const useNotification = (): any => {
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
