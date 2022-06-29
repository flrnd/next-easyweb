import classNames from "classnames";
import { EnumAlert } from "../../../lib/types";

interface IProps {
  text: string;
  alertType: EnumAlert;
}

const parseAlertType = (alert: EnumAlert) => {
  switch (alert) {
    case EnumAlert.Danger:
      return {
        bgColor: "bg-red-100",
        borderColor: "border-red-400",
        textColor: "text-red-700",
      };
    case EnumAlert.Success:
      return {
        bgColor: "bg-green-100",
        borderColor: "border-green-400",
        textColor: "text-green-700",
      };
    case EnumAlert.Warning:
      return {
        bgColor: "bg-yellow-100",
        borderColor: "border-yellow-400",
        textColor: "text-yellow-700",
      };
    case EnumAlert.Informative:
      return {
        bgColor: "bg-blue-100",
        borderColor: "border-blue-400",
        textColor: "text-blue-700",
      };
  }
};

const AlertNotification = ({ text, alertType }: IProps) => {
  const setup = parseAlertType(alertType);
  return (
    <div
      className={classNames(
        `${setup.bgColor} border ${setup.borderColor} ${setup.textColor} px-4 py-3 rounded relative`
      )}
      role="alert"
    >
      <span className="block sm:inline">{text}</span>
    </div>
  );
};

export default AlertNotification;
