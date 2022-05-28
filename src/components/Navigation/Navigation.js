import Button from "../Button/Button";
import Svg from "../Svg/Svg";
import { search, dribbble, menuOpen, menuClose } from "../svgDimensions";
import NavMenuItem from "../NavMenuItem/NavMenuItem";
import { useState, useEffect } from "react";
import Search from "../Search/Search";

const Navigation = (props) => {
  const main = document.querySelector(".main");
  const [menuClick, setMenuClick] = useState(false);
  const [winWidth, setWinWidth] = useState(window.innerWidth);

  const handleMenuClick = () => {
    setMenuClick(!menuClick);
    document.querySelector(".main").classList.toggle("fixed");
  };

  const detectWidth = () => {
    setWinWidth(window.innerWidth);
    if (window.innerWidth > 1024 && menuClick) {
      main.classList.remove("fixed");
    }
    if (window.innerWidth < 1024 && menuClick) {
      main.classList.add("fixed");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", detectWidth);

    return () => {
      window.removeEventListener("resize", detectWidth);
    };
  });

  return (
    <div className="pl-6 py-5 pr-10 flex justify-between items-center">
      <div className="flex-1 flex flex-row lg:flex-1 lg:justify-start justify-between lg:gap-8 items-center">
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

        <ul
          className={`overflow-auto lg:grid flex-col lg:grid-flow-col lg:items-center lg:static bg-white lg:bg-transparent h-full w-[100vw] lg:w-max top-[64px] left-0 flex-initial ${
            !menuClick ? "hidden" : "fixed"
          } border-t-2 lg:border-t-0 border-slate-100 pt-4 lg:pt-0 px-6 lg:px-0 pb-20 lg:pb-0`}
        >
          {menuClick && (
            <li className="lg:hidden mb-4">
              <Search placeholder={"Search"} />
            </li>
          )}
          <NavMenuItem navItem={"Inspiration"} winWidth={winWidth} />
          <NavMenuItem navItem={"Find Work"} winWidth={winWidth} />
          <NavMenuItem navItem={"Learn Design"} winWidth={winWidth} />
          <NavMenuItem navItem={"Go Pro"} winWidth={winWidth} />
          <NavMenuItem navItem={"Marketplace"} winWidth={winWidth} />
          <NavMenuItem navItem={"Hire Designers"} winWidth={winWidth} />
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
