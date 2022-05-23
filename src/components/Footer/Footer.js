import Svg from "../Svg/Svg";
import MenuList from "../MenuList/MenuList";
import {
  ball,
  twitter,
  facebook,
  instagram,
  pinterest,
  dribbble,
} from "../svgDimensions";

const Footer = (props) => {
  return (
    <div className="px-[20px] md:px-[32px] xl:px-[72px] pt-[72px]">
      <div className="flex flex-wrap flex-col lg:flex-row lg:flex-nowrap gap-[40px] border-b-2 pb-16 border-slate-100">
        <div className=" w-[256px] flex-initial">
          <Svg
            pathClassNames={"hover:fill-[#ba366e] cursor-pointer"}
            color={"#ea4c89"}
            drawingPath={dribbble.paths}
            width={"100"}
            viewBox={"0 0 76 19"}
            title={"Dribbble: the community for graphic design"}
          />

          <p className="w-full py-7 leading-relaxed text-[14px] font-normal text-gray-700">
            Dribbble is the world's leading community for creatives to share,
            grow, and get hired.
          </p>
          <ul className="w-full flex flex-wrap gap-6 text-gray-700">
            <li>
              <Svg
                pathClassNames={
                  "cursor-pointer hover:fill-black transition-all"
                }
                drawingPath={ball.paths}
                width={"20"}
                viewBox={"0 0 32 32"}
                svgClassNames={"icon fill-current"}
                title={"dribbble"}
              />
            </li>
            <li>
              <Svg
                pathClassNames={
                  "cursor-pointer hover:fill-black transition-all"
                }
                drawingPath={twitter.paths}
                width={"20"}
                viewBox={"0 0 24 24"}
                svgClassNames={"icon fill-current"}
                title={"Twitter icon"}
              />
            </li>
            <li>
              <Svg
                pathClassNames={
                  "cursor-pointer hover:fill-black transition-all"
                }
                drawingPath={facebook.paths}
                width={"20"}
                viewBox={"0 0 24 24"}
                svgClassNames={"icon fill-current"}
                title={"Facebook icon"}
              />
            </li>
            <li>
              <Svg
                pathClassNames={
                  "cursor-pointer hover:fill-black transition-all"
                }
                drawingPath={instagram.paths}
                width={"20"}
                viewBox={"0 0 16 16"}
                svgClassNames={"icon fill-current"}
                title={"Instagram icon"}
              />
            </li>
            <li>
              <Svg
                pathClassNames={
                  "cursor-pointer hover:fill-black transition-all"
                }
                drawingPath={pinterest.paths}
                width={"20"}
                viewBox={"0 0 24 24"}
                svgClassNames={"icon fill-current"}
                title={"Pinterest icon"}
              />
            </li>
          </ul>
        </div>
        <div className=" grid grid-cols-2 md:flex md:flex-wrap md:flex-row justify-between flex-1 lg:flex-nowrap lg:gap-10 lg:flex-none">
          <MenuList
            title={"For designers"}
            links={[
              "Go pro!",
              "Explore design work",
              "Design blog",
              "Overtime podcasts",
              "Dribbble meetups",
              "Playoffs",
              "Code of",
            ]}
          />
          <div>
            <MenuList
              title={"Hire designers"}
              links={[
                "Post a job opening",
                "Post a freelance project",
                "Search for designers",
              ]}
            />
            <MenuList title={"Brands"} links={["Advertise with us"]} />
          </div>
          <MenuList
            title={"Company"}
            links={[
              "About",
              "Career",
              "Support",
              "Media kit",
              "Testimonials",
              "API",
              "Terms of service",
              "Privacy policy",
            ]}
          />
          <div>
            <MenuList
              title={"Directories"}
              links={[
                "Design jobs",
                "Designers for hire",
                "Freelance designers for hire",
                "Tags",
                "Places",
              ]}
            />
            <MenuList
              title={"Design assets"}
              links={["Creative Market", "Fontspring", "Font Squirrel"]}
            />
          </div>
          <MenuList
            title={"Design Resources"}
            links={[
              "Freelancing",
              "Design Hiring",
              "Design Portfolio",
              "Design Education",
              "Creative Process",
              "Design Industry Trends",
            ]}
          />
        </div>
      </div>
      <div className="px-2 py-8 md:py-10 flex flex-col gap-2 items-center md:flex-row justify-between text-[14px] text-gray-500">
        <p className=""> 2022 UrDesigner. All rights reserved</p>
        <div className="flex flex-col-reverse items-center  md:flex-row gap-2 md:items-center">
          <p>
            {" "}
            <span className="text-gray-900 font-bold">0</span> shots dribbbled
          </p>
          <img
            data-src="https://cdn.dribbble.com/assets/dribbble-ball-icon-4e54c54abecf8efe027abe6f8bc7794553b8abef3bdb49cd15797067cf80ca53.svg"
            width="24px"
            height="24px"
            alt="Dribbble ball icon"
            src="https://cdn.dribbble.com/assets/dribbble-ball-icon-4e54c54abecf8efe027abe6f8bc7794553b8abef3bdb49cd15797067cf80ca53.svg"
          ></img>
        </div>
      </div>
    </div>
  );
};
export default Footer;
