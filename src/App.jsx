import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg";
import { ReactComponent as CogIcon } from "./icons/cog.svg";
import NavBar from "./components/UI/NavBar/NavBar";
import NavItem from "./components/UI/NavBar/NavItem/NavItem";
import DropDownMenu from "./components/UI/DropDownMenu/DropDownMenu";
import DropdownItem from "./components/UI/DropDownItem/DropdownItem";

function App() {
  return (
    <NavBar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />
      <NavItem icon={<ChevronIcon />}>
        <DropDownMenu>
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem leftIcon={<CogIcon />} />
        </DropDownMenu>
      </NavItem>
    </NavBar>
  );
}

export default App;
