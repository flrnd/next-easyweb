import {
  ClockIcon,
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/outline";
import FacebookIcon from "./social/FacebookIcon";
import InstagramIcon from "./social/InstagramIcon";
import LinkedinIcon from "./social/LinkedinIcon";
import TwitterIcon from "./social/TwitterIcon";

const getIcon = (name: string): JSX.Element => {
  switch (name) {
    case "twitter":
      return <TwitterIcon />;
    case "facebook":
      return <FacebookIcon />;
    case "instagram":
      return <InstagramIcon />;
    case "linkedin":
      return <LinkedinIcon />;
    case "mail":
      return <MailIcon />;
    case "phone":
      return <PhoneIcon />;
    case "location-marker":
      return <LocationMarkerIcon />;
    case "clock":
      return <ClockIcon />;
  }
};

export { getIcon };
