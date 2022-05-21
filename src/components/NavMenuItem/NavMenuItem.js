import { useState } from "react";
import DropDownMenu from "../DropDownMenu/DropDownMenu";

const NavMenuItem = (props) => {
  const [menuItemHover, setMenuItemHover] = useState(true);
  const [popupMenu, setPopupMenu] = useState("");

  const handleDisplayPopup = (e) => {
    setMenuItemHover(true);
    setPopupMenu(e.target.textContent);
  };

  const handleCollapsePopup = (e) => {
    setMenuItemHover(false);
  };

  return (
    <li onMouseLeave={handleCollapsePopup}>
      <p className="hover:text-gray-800 cursor-pointer text-sm font-[550] text-slate-500" onMouseEnter={handleDisplayPopup} >
        {props.navItem}
      </p>
      {menuItemHover && <DropDownMenu heading={popupMenu} />}
    </li>
  );
};

export default NavMenuItem;
