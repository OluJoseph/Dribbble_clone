import { useState } from "react";
import { rightArrow } from "../svgDimensions";
import Svg from "../Svg/Svg";

const NavDropdownItemGroup = ({
  header,
  caption,
  accentColor,
  svgIcon,
  accentDropdownColor,
  svgRect,
}) => {

  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="w-full flex justify-between items-center gap-10 px-4 cursor-pointer py-4 pl-10 pr-6"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="flex flex-row gap-4 items-center">
        {svgIcon && <div
          className={`rounded-md p-2 w-fit items-start ${isHover ? accentDropdownColor :'bg-slate-50'} transition-all`}
        >
          <Svg
            viewBox={"0 0 20 20"}
            width={"20"}
            color={accentColor}
            drawingPath={svgIcon}
            strokeWidth={"1.5"}
            fillOpacity={"0.2"}
            svgClassNames="site-nav-dropdown-icon"
            strokeColor={accentColor}
            rect={svgRect}
          />
        </div>}
        <div>
          <h6 className="text-[14px] w-max mb-1 text-gray tracking-tight">
            {header}
          </h6>
          <p className="text-[12px] w-max text-slate-500">{caption}</p>
        </div>
      </div>
      {svgIcon && <div
        className={
          isHover
            ? "opacity-100 transition-all duration-300 translate-x-[3px] mr-8 ml-8"
            : "opacity-0 transition-all duration-300 translate-x-0 mr-8 ml-8"
        }
      >
        <Svg
          viewBox={"0 0 12 12"}
          width={"12"}
          color={accentColor}
          svgClassNames={"site-nav-dropdown-arrow icon-12 fill-current"}
          drawingPath={rightArrow}
        />
      </div>}
    </div>
  );
};
export default NavDropdownItemGroup;
