import Button from "../Button/Button";
import Svg from "../Svg/Svg";
import {
  search,
  dribbble,
  menuOpen,
  menuClose,
} from "../svgDimensions";
import NavMenuItem from "../NavMenuItem/NavMenuItem";
import { useState } from "react";

const Navigation = (props) => {
  const [menuClick, setMenuClick] = useState(false);

  const handleMenuClick = () => {
    setMenuClick(!menuClick);
  };

  return (
    <div className="pl-6 py-5 pr-10 flex justify-between items-center">
      <div className="flex-1 flex flex-row lg:flex-1 lg:justify-start justify-between lg:gap-5 items-center">
        <div className="w-fit order-last lg:order-first translate-x-[40px] lg:translate-x-[0]">
          <Svg
            pathClassNames={"hover:fill-slate-600"}
            svgClassNames={"cursor-pointer"}
            color={"black"}
            width={"76"}
            viewBox={"0 0 76 19"}
            drawingPath={dribbble.paths}
          />
        </div>

        <button className="lg:hidden " onClick={handleMenuClick}>
          {!menuClick && (
            <Svg
              viewBox={"0 0 18 16"}
              drawingPath={menuOpen.paths}
              svgClassNames={
                "icon js-site-nav-mobile-menu-open site-nav-mobile-menu-open icon-18 fill-current"
              }
              width={"18"}
              color={"gray"}
            />
          )}

          {menuClick && (
            <Svg
              width={"22"}
              viewBox={"0 0 22 22"}
              drawingPath={menuClose.paths}
              color={"gray"}
            />
          )}
        </button>
        <ul className="lg:flex flex-col lg:flex-row gap-8 lg:items-center hidden flex-initial">
          <NavMenuItem navItem={"Inspiration"} />
          <NavMenuItem navItem={"Find Work"} />
          <NavMenuItem navItem={"Learn Design"} />
          <NavMenuItem navItem={"Go Pro"} />
          <NavMenuItem navItem={"Marketplace"} />
          <NavMenuItem navItem={"Hire Designers"} />
        </ul>
      </div>

      <div className="grid lg:grid-flow-col gap-4 flex-1 lg:flex-none lg:max-w-[300px] content-center justify-items-end lg:justify-items-center">
        <a
          href="#0"
          className="self-center justify-self-end text-slate-400 hidden lg:block"
        >
          <Svg
            width={"16"}
            viewBox={"0 0 16 16"}
            svgClassNames={"icon icon-18 fill-current"}
            drawingPath={search.paths}
          />
        </a>
        <a href="#0" className="self-center">
          <p className="text-slate-500">Sign in</p>
        </a>

        <div className="hidden lg:block">
          <Button title={"Share my work"} padding={"px-2.5"} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
