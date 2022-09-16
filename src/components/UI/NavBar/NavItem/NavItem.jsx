import { useState } from "react";

const NavItem = ({ children, icon }) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <a
        href="/"
        className="icon-button"
        onClick={(e) => {
          e.preventDefault();
          setOpen(!open);
        }}
      >
        {icon}
      </a>
      {open && children}
    </li>
  );
};

export default NavItem;
