import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as CogIcon } from "../../../icons/cog.svg";
import { ReactComponent as ChevronIcon } from "../../../icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "../../../icons/arrow.svg";

const DropDownMenu = ({}) => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const calcHeight = (el) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };
  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        {props.leftIcon && (
          <span className="icon-button icon-left">{props.leftIcon}</span>
        )}
        {props.children}
        {props.rightIcon && (
          <span className="icon-button icon-right">{props.rightIcon}</span>
        )}
      </a>
    );
  }
  return (
    <div className="dropdown" style={{ height: `${menuHeight}px` }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<ArrowIcon />} goToMenu="main" />
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropDownMenu;
