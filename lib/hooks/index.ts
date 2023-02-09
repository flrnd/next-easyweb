import { AppDispatch, RootState } from "lib/store";
import { INotificationMessage } from "lib/types";
import { useState } from "react";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
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
