import MenuList from "../MenuList/MenuList";
import NavDropdownItemGroup from "../NavDropdownItemGroup/NavDropdownItemGroup";
import svgDimensions from "../svgDimensions";
import Svg from "../Svg/Svg";
import { useState } from "react";

const DropDownMenu = ({ heading, winWidth }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="w-fit lg:absolute lg:translate-x-[-50px] lg:translate-y-[0px] pt-4 ">
      {(() => {
        switch (heading) {
          case "Inspiration":
            return (
              <div className="flex flex-row rounded-lg myShadow bg-white ">
                <div className="py-4  w-[450px] max-w-[450px]">
                  <ul className="border-b-2 pb-4 border-slate-100">
                    <li>
                      <NavDropdownItemGroup
                        header={"Explore Design Work"}
                        caption={"Trending designs to inspire you"}
                        accentColor={"#724e91"}
                        svgIcon={svgDimensions.window}
                        accentDropdownColor={"bg-purple-50"}
                        iconFillOpacity={"0.2"}
                        iconStrokeWidth={"1.5"}
                      />
                    </li>
                    <li>
                      <NavDropdownItemGroup
                        header={"New & Noteworthy"}
                        caption={"Up-and-coming designers"}
                        accentColor={"#e54f6d"}
                        svgIcon={svgDimensions.heart}
                        accentDropdownColor={"bg-red-50"}
                        iconFillOpacity={"0.2"}
                        iconStrokeWidth={"1.5"}
                      />
                    </li>
                    <li>
                      <NavDropdownItemGroup
                        header={"Playoffs"}
                        caption={"Work designers are riffing on"}
                        accentColor={"#74c4ba"}
                        svgIcon={svgDimensions.stack}
                        accentDropdownColor={"bg-green-50"}
                        iconFillOpacity={"0.2"}
                        iconStrokeWidth={"1.5"}
                      />
                    </li>
                    <li>
                      <NavDropdownItemGroup
                        header={"Blog"}
                        caption={"Interviews, tutorials, and more"}
                        accentColor={"#f8c630"}
                        svgIcon={svgDimensions.document}
                        accentDropdownColor={"bg-yellow-50"}
                        iconFillOpacity={"0.2"}
                        iconStrokeWidth={"1.5"}
                      />
                    </li>
                  </ul>
                  <div
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    className="flex items-center pl-10 pr-14 gap-6 content-center pt-3 cursor-pointer"
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
                          drawingPath={svgDimensions.rightArrow.paths}
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
                <div className="p-8 px-9 bg-slate-100 rounded-r-lg lg:block hidden">
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
              <div className="flex flex-row rounded-lg myShadow bg-white w-[450px] max-w-[450px]">
                <div className="py-4 w-full">
                  <ul className="pb-4">
                    <li>
                      <NavDropdownItemGroup
                        header={"Job Board"}
                        caption={"Find your dream design job"}
                        accentColor={"#724e91"}
                        svgIcon={svgDimensions.windowIrregular}
                        accentDropdownColor={"bg-purple-50"}
                        iconFillOpacity={"0.2"}
                        iconStrokeWidth={"1.5"}
                      />
                    </li>
                    <li>
                      <NavDropdownItemGroup
                        header={"Freelance Projects"}
                        caption={"An exclusive list for contract work"}
                        accentColor={"#e54f6d"}
                        svgIcon={svgDimensions.teaCup}
                        accentDropdownColor={"bg-red-50"}
                        iconFillOpacity={"0.2"}
                        iconStrokeWidth={"1.5"}
                      />
                    </li>
                    <li>
                      <NavDropdownItemGroup
                        header={"Want freelance design projects?"}
                        caption={"Get new leads in your inbox everyday"}
                        accentColor={"#74c4ba"}
                        svgIcon={svgDimensions.message}
                        accentDropdownColor={"bg-green-50"}
                        iconFillOpacity={"0.2"}
                        iconStrokeWidth={"1.5"}
                      />
                    </li>
                    <li>
                      <NavDropdownItemGroup
                        header={"Personalize your profile with video"}
                        caption={"Introduce yourself to new clients with Pitch"}
                        accentColor={"#f8c630"}
                        svgIcon={svgDimensions.profile}
                        accentDropdownColor={"bg-yellow-50"}
                        iconFillOpacity={"0.2"}
                        iconStrokeWidth={"1.5"}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            );
          case "Learn Design":
            return (
              <div className="flex flex-row rounded-lg myShadow bg-white  w-[450px] max-w-[450px]">
                <div className="py-4 w-full">
                  <ul className="pb-4 w-full">
                    <li>
                      <NavDropdownItemGroup
                        header={"Certified Product Design Course"}
                        caption={"Learn product design in just 12 weeks"}
                        accentColor={"#724e91"}
                        svgIcon={svgDimensions.pencilAndRuler}
                        accentDropdownColor={"bg-purple-50"}
                        iconFillOpacity={"0.2"}
                        iconStrokeWidth={"1.5"}
                      />
                    </li>
                    <li>
                      <NavDropdownItemGroup
                        header={"Browse our courses & workshops"}
                        caption={
                          "Level up your skills with our interactive courses and workshops..."
                        }
                        accentColor={"#f8c630"}
                        svgIcon={svgDimensions.video}
                        accentDropdownColor={"bg-yellow-50"}
                        iconFillOpacity={"0.2"}
                        iconStrokeWidth={"1.5"}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            );
          case "Go Pro":
            return (
              <div className="flex flex-row rounded-lg myShadow bg-white  w-[450px] max-w-[450px]">
                <div className="py-4 w-full">
                  <ul className="pb-4">
                    <li>
                      <NavDropdownItemGroup
                        header={"For Designers"}
                        caption={"Portfolio creation made easy"}
                        accentColor={"#724e91"}
                        svgIcon={svgDimensions.pen}
                        accentDropdownColor={"bg-purple-50"}
                        iconFillOpacity={"0.2"}
                        iconStrokeWidth={"1.5"}
                      />
                    </li>
                    <li>
                      <NavDropdownItemGroup
                        header={"For Freelancers"}
                        caption={"Fresh leads in your inbox everyday"}
                        accentColor={"#e54f6d"}
                        svgIcon={svgDimensions.toolCup}
                        accentDropdownColor={"bg-red-50"}
                        iconFillOpacity={"0.2"}
                        iconStrokeWidth={"1.5"}
                      />
                    </li>
                    <li>
                      <NavDropdownItemGroup
                        header={"For Teams"}
                        caption={"Build your team's pipeline or profile"}
                        accentColor={"#74c4ba"}
                        svgIcon={svgDimensions.team}
                        accentDropdownColor={"bg-green-50"}
                        iconFillOpacity={"0.2"}
                        iconStrokeWidth={"1.5"}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            );
          case "Marketplace":
            return (
              <div className="flex flex-row rounded-lg myShadow bg-white w-[450px] max-w-[450px]">
                <div className="py-4 w-full">
                  <ul className="pb-4">
                    <li>
                      <NavDropdownItemGroup
                        header={"Discover"}
                        caption={"A marketplace of digital assets"}
                        accentColor={"#724e91"}
                        svgIcon={svgDimensions.windowDiscover}
                        accentDropdownColor={"bg-purple-50"}
                        iconFillOpacity={"0.2"}
                        iconStrokeWidth={"1.5"}
                      />
                    </li>
                    <li>
                      <NavDropdownItemGroup
                        header={"Graphics"}
                        caption={"Icons, Illustrations, Patterns, Textures..."}
                        accentColor={"#e54f6d"}
                        svgIcon={svgDimensions.graphics}
                        accentDropdownColor={"bg-red-50"}
                        iconFillOpacity={"0.2"}
                        iconStrokeWidth={"1.5"}
                      />
                    </li>
                    <li>
                      <NavDropdownItemGroup
                        header={"Fonts"}
                        caption={"Display, Script, Sans Serif, Serif..."}
                        accentColor={"#74c4ba"}
                        svgIcon={svgDimensions.fonts}
                        accentDropdownColor={"bg-green-50"}
                        iconStrokeWidth={"0.5"}
                      />
                    </li>
                    <li>
                      <NavDropdownItemGroup
                        header={"Templates"}
                        caption={"Mock Ups, Social Media, Presentations..."}
                        accentColor={"#f8c630"}
                        svgIcon={svgDimensions.templates}
                        accentDropdownColor={"bg-yellow-50"}
                        iconFillOpacity={"0.2"}
                        iconStrokeWidth={"1.5"}
                      />
                    </li>
                    <li>
                      <NavDropdownItemGroup
                        header={"3D"}
                        caption={"Characters, Objects, Textures..."}
                        accentColor={"#724e91"}
                        svgIcon={svgDimensions.cube}
                        accentDropdownColor={"bg-purple-50"}
                        iconFillOpacity={"0.2"}
                        iconStrokeWidth={"1.5"}
                      />
                    </li>
                    <li>
                      <NavDropdownItemGroup
                        header={"Themes"}
                        caption={"Wordpress, Shopify, Bootstrap, HTML5..."}
                        accentColor={"#e54f6d"}
                        svgIcon={svgDimensions.themes}
                        accentDropdownColor={"bg-red-50"}
                        iconFillOpacity={"0.2"}
                        iconStrokeWidth={"1.5"}
                      />
                    </li>
                    <li className="flex flex-col items-center">
                      <NavDropdownItemGroup
                        header={"Add Ons"}
                        caption={"Procreate, Affinity, Photoshop, Indesign..."}
                        accentColor={"#74c4ba"}
                        svgIcon={svgDimensions.windowAddOn}
                        accentDropdownColor={"bg-green-50"}
                        iconFillOpacity={"0.2"}
                        iconStrokeWidth={"1.5"}
                      />
                      <hr className="w-96 my-3" />
                    </li>
                    <NavDropdownItemGroup
                      header={"Open a Shop"}
                      caption={"Earn money doing what you love"}
                      accentColor={"#74c4ba"}
                      svgIcon={svgDimensions.tag}
                      accentDropdownColor={"bg-green-50"}
                      iconFillOpacity={"0.2"}
                      iconStrokeWidth={"1.5"}
                      iconViewBox={"0 0 26 24"}
                      iconWidth={"24"}
                      iconHeight={"24"}
                    />
                  </ul>
                </div>
              </div>
            );
          case "Hire Designers":
            return (
              <div className="flex flex-row rounded-lg myShadow bg-white  w-[450px] max-w-[450px]">
                <div className="py-4 w-full">
                  <ul className="pb-4">
                    <li>
                      <NavDropdownItemGroup
                        header={"Designer Search"}
                        caption={"Find, contact, and hire designers"}
                        accentColor={"#724e91"}
                        svgIcon={svgDimensions.find}
                        accentDropdownColor={"bg-purple-50"}
                        iconFillOpacity={"0.2"}
                        iconStrokeWidth={"1.5"}
                      />
                    </li>
                    <li>
                      <NavDropdownItemGroup
                        header={"List my Job Opening"}
                        caption={"The #1 job board for creatives"}
                        accentColor={"#e54f6d"}
                        svgIcon={svgDimensions.plus}
                        accentDropdownColor={"bg-red-50"}
                        iconFillOpacity={"0.2"}
                        iconStrokeWidth={"1.5"}
                        iconViewBox={"0 0 14 14"}
                        iconWidth={"14"}
                      />
                    </li>
                    <li>
                      <NavDropdownItemGroup
                        header={"Post a Freelance Project"}
                        caption={"Board for freelance & contract work"}
                        accentColor={"#74c4ba"}
                        svgIcon={svgDimensions.plus}
                        accentDropdownColor={"bg-green-50"}
                        iconFillOpacity={"0.2"}
                        iconStrokeWidth={"1.5"}
                        iconViewBox={"0 0 14 14"}
                        iconWidth={"14"}
                      />
                    </li>
                  </ul>
                </div>
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
