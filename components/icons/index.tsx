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
  }
};

export { getIcon };
