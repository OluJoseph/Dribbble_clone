import Button from "../Button/Button";
import Svg from "../Svg/Svg";
import { search, dribbble } from "../svgDimensions";
import NavMenuItem from "../NavMenuItem/NavMenuItem";

const Navigation = (props) => {
  return (
    <div className="pl-6 py-5 pr-10 flex justify-between items-center">
      <div className="flex flex-row">
        <Svg
          pathClassNames={"hover:fill-slate-600"}
          svgClassNames={"cursor-pointer"}
          color={"black"}
          width={"76"}
          viewBox={"0 0 76 19"}
          drawingPath={dribbble}
        />

        <ul className="flex flex-row pl-8 gap-8 items-center">
          <NavMenuItem navItem={"Inspiration"} />
          <NavMenuItem navItem={"Find Work"} />
          <NavMenuItem navItem={"Learn Design"} />
          <NavMenuItem navItem={"Go Pro"} />
          <NavMenuItem navItem={"Marketplace"} />
          <NavMenuItem navItem={"Hire Designers"} />
        </ul>
      </div>

      <div className="grid grid-cols-3 gap-2 content-center justify-items-center">
        <a href="#0" className="self-center justify-self-end text-slate-400">
          <Svg
            width={"16"}
            viewBox={"0 0 16 16"}
            svgClassNames={"icon icon-18 fill-current"}
            drawingPath={search}
          />
        </a>
        <a href="#0" className="self-center">
          <p className="text-slate-500">Sign in</p>
        </a>

        <Button title={"Sign up"} padding={"px-2.5"} />
      </div>
    </div>
  );
};

export default Navigation;
