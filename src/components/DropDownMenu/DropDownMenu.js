import MenuList from "../MenuList/MenuList";
import NavDropdownItemGroup from "../NavDropdownItemGroup/NavDropdownItemGroup";
import svgDimensions from "../svgDimensions";
import Svg from "../Svg/Svg";
import { rightArrow } from "../svgDimensions";
import { useState } from "react";

const DropDownMenu = (props) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="w-fit absolute">
      {(() => {
        switch (props.heading) {
          case "Inspiration":
            return (
              <div className="flex flex-row rounded-lg shadow-2xl shadow-slate-200 m-8 bg-white ">
                <div className="py-4">
                  <ul className="border-b-2 pb-4 border-slate-100">
                    <li>
                      <NavDropdownItemGroup
                        header={"Explore Design Work"}
                        caption={"Trending designs to inspire you"}
                        accentColor={"#724e91"}
                        svgIcon={svgDimensions.window}
                        accentDropdownColor={"bg-purple-50"}
                      />
                    </li>
                    <li>
                      <NavDropdownItemGroup
                        header={"New & Noteworthy"}
                        caption={"Up-and-coming designers"}
                        accentColor={"#e54f6d"}
                        svgIcon={svgDimensions.heart}
                        accentDropdownColor={"bg-red-50"}
                      />
                    </li>
                    <li>
                      <NavDropdownItemGroup
                        header={"Playoffs"}
                        caption={"Work designers are riffing on"}
                        accentColor={"#74c4ba"}
                        svgIcon={svgDimensions.stackRear}
                        svgRect={svgDimensions.stackFront}
                        accentDropdownColor={"bg-green-50"}
                      />
                    </li>
                    <li>
                      <NavDropdownItemGroup
                        header={"Blog"}
                        caption={"Interviews, tutorials, and more"}
                        accentColor={"#f8c630"}
                        svgIcon={svgDimensions.documentRear}
                        svgRect={svgDimensions.documentFront}
                        accentDropdownColor={"bg-yellow-50"}
                      />
                    </li>
                  </ul>
                  <div
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    className="flex items-center pl-10 pr-14 gap-6 content-center pt-3"
                  >
                    <div className="">
                      <h6 className="text-[14px] w-max mb-1 text-graytracking-tight">
                        Participate in this week's Playoff
                      </h6>
                      <p className="text-[12px] w-max text-slate-500">
                        Sponsored by Uizard
                      </p>
                    </div>
                    <div className="flex items-center justify-end gap-4 overflow-hidden rounded-full h-[48px] w-[48px]">
                      <div
                        className={`${
                          isHover ? "translate-x-[50px]" : "translate-x-[-50px]"
                        } transition-all duration-300 ease-in-out`}
                      >
                        <Svg
                          viewBox={"0 0 12 12"}
                          width={"16"}
                          color={"#e54f6d"}
                          svgClassNames={
                            "site-nav-dropdown-arrow icon-12 fill-current"
                          }
                          drawingPath={rightArrow}
                        />
                      </div>
                      <img
                        className={`${
                          isHover ? "animate-rollOut" : "animate-rollIn"
                        } transition-all`}
                        alt="Uizard"
                        data-src="https://cdn.dribbble.com/users/2453182/avatars/normal/043395f574e22588751dca3e9b3fedc6.png?1537815315"
                        src="https://cdn.dribbble.com/users/2453182/avatars/normal/043395f574e22588751dca3e9b3fedc6.png?1537815315"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-8 px-9 bg-slate-100 w-full rounded-r-lg">
                  <MenuList
                    title={"Browse Categories"}
                    links={[
                      "Animation",
                      "Branding",
                      "Illustration",
                      "Mobile",
                      "Print",
                      "Product Design",
                      "Typography",
                      "Web Design",
                    ]}
                  />
                </div>
              </div>
            );
          case "Find Work":
            return (
               <div>
                  okay
               </div>
            );
          default:
            return null;
        }
      })()}
    </div>
  );
};

export default DropDownMenu;
