import MenuList from "../MenuList/MenuList";
import NavDropdownItemGroup from "../NavDropdownItemGroup/NavDropdownItemGroup";
import svgDimensions from "../svgDimensions";

const DropDownMenu = (props) => {
  return (
    <div className="w-fit">
      {(() => {
        switch (props.heading) {
          case "Inspiration":
            return (
              <div className="flex flex-row rounded-lg shadow-2xl shadow-slate-200 m-8 bg-white absolute">
                <div className="py-4 pl-5 pr-8">
                  <ul>
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
                        caption={"Trending designs to inspire you"}
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
          default:
            return null;
        }
      })()}
    </div>
  );
};

export default DropDownMenu;
