import { useEffect, useState } from "react";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import Svg from "../Svg/Svg";
import { expand } from "../svgDimensions";

const NavMenuItem = ({navItem, winWidth}) => {
  const [menuItemHover, setMenuItemHover] = useState(true);
  const [menuItemClick, isMenuItemClicked] = useState(false);
  const [popupMenu, setPopupMenu] = useState("");

  const handleDisplayPopup = (e) => {
    winWidth > 1024 && setMenuItemHover(true);
    winWidth < 1024 && isMenuItemClicked(!menuItemClick);
    setPopupMenu(e.target.textContent);
  };

  const handleCollapsePopup = (e) => {
    setMenuItemHover(false);
  };  

  return winWidth > 1024 ? (
    <li onMouseLeave={handleCollapsePopup} className="py-2 lg:py-0 ">
      <p
        className="hover:text-gray-800 cursor-pointer tracking-tight text-[14px] font-[550] text-slate-500 w-max px-3"
        onMouseEnter={handleDisplayPopup}
      >
        {navItem}
      </p>
      {menuItemHover && <DropDownMenu heading={popupMenu} winWidth={winWidth}/>}
    </li>
  ) : (
    <li onClick={handleDisplayPopup} className="cursor-pointer select-none">
      <div className="flex justify-between py-2">
        <p className="cursor-pointer text-[17px] tracking-tight font-[550] text-slate-500 w-max">
          {navItem}
        </p>
        <Svg
          width={"22"}
          height={"22"}
          color={"gray"}
          strokeColor={"gray"}
          strokeWidth={"2.5"}
          viewBox={"0 0 48 48"}
          drawingPath={expand.paths}
          svgClassNames={`${winWidth > 1024 ? "hidden" : ""} `}
        />
      </div>
      {menuItemClick && <DropDownMenu heading={popupMenu} winWidth={winWidth}/>}
    </li>
  );
};

export default NavMenuItem;
