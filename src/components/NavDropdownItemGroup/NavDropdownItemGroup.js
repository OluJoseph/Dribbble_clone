import { useState } from "react";
import { rightArrow } from "../svgDimensions";
import Svg from "../Svg/Svg";

const NavDropdownItemGroup = ({
  header,
  caption,
  accentColor,
  svgIcon,
  accentDropdownColor,
  iconStrokeWidth,
  iconFillOpacity,
  iconViewBox,
  iconWidth,
  iconHeight
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="w-full flex justify-between items-center gap-10 cursor-pointer py-3 pl-10 pr-6 w-full"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="flex flex-row gap-4 items-center">
        {svgIcon.paths && (
          <div
            className={`rounded-md p-2 w-[36px] h-[36px] items-start ${
              isHover ? accentDropdownColor : "bg-slate-50"
            } transition-all`}
          >
            <Svg
              viewBox={iconViewBox ? iconViewBox : "0 0 20 22"}
              width={iconWidth ? iconWidth : "20"}
              height={iconHeight ? iconHeight : '22'}
              color={accentColor}
              drawingPath={svgIcon.paths}
              strokeWidth={iconStrokeWidth}
              fillOpacity={iconFillOpacity}
              svgClassNames="site-nav-dropdown-icon"
              strokeColor={accentColor}
              rect={svgIcon.rect}
              circle={svgIcon.circle}
            />
          </div>
        )}
        <div>
          <h6 className="text-[14px] w-max mb-1 text-gray-800 font-bold tracking-tight">
            {header}
          </h6>
          <p className="text-[12px] w-full text-slate-500">{caption}</p>
        </div>
      </div>

      {svgIcon.paths && (
        <div
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
            drawingPath={rightArrow.paths}
          />
        </div>
      )}
    </div>
  );
};
export default NavDropdownItemGroup;
