const DropdownItem = ({ rightIcon, leftIcon, children }) => (
  <a href="#" className="menu-item">
    {rightIcon && (
      <span className="icon-button dropdown-right-icon">{rightIcon}</span>
    )}
    {children}
    {leftIcon && (
      <span className="icon-button dropdown-left-icon">{leftIcon}</span>
    )}
  </a>
);
export default DropdownItem;
