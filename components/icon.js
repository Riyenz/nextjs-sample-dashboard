import Bell from "../assets/icons/bell-icon.svg";
import Chart from "../assets/icons/chart-icon.svg";
import ChevronDownIcon from "../assets/icons/chevron-down-icon.svg";
import Cog from "../assets/icons/cog-icon.svg";
import Home from "../assets/icons/home-icon.svg";
import Mail from "../assets/icons/mail-icon.svg";
import Play from "../assets/icons/play-icon.svg";
import Profile from "../assets/icons/profile-icon.svg";
import Search from "../assets/icons/search-icon.svg";
import Users from "../assets/icons/users-icon.svg";
import More from "../assets/icons/more-icon.svg";
import ArrowUp from "../assets/icons/arrow-up-icon.svg";
import ArrowDown from "../assets/icons/arrow-down-icon.svg";

const iconTypes = {
  home: Home,
  chart: Chart,
  cog: Cog,
  mail: Mail,
  play: Play,
  profile: Profile,
  users: Users,
  search: Search,
  bell: Bell,
  chevronDown: ChevronDownIcon,
  more: More,
  arrowup: ArrowUp,
  arrowdown: ArrowDown,
};

const Icon = ({ name, ...props }) => {
  let IconComponent = iconTypes[name];
  return <IconComponent {...props} />;
};

export default Icon;
