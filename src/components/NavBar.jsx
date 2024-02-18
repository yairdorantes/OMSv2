import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OMSPNG from "../media/oms.png";
import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const NavBar = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <>
      <nav
        onClick={() => console.log("ajaj")}
        className="w-screen fixed top-0 z-30 bg-white select-none border-b-2 shadow-sm py-1 px-3"
      >
        <div className="flex justify-between items-center">
          <div
            className="cursor-pointer"
            onClick={() => setShowSideBar(!showSideBar)}
          >
            <img src={OMSPNG} alt="" className="w-8" />
          </div>
          <div className="space-x-3">
            <FontAwesomeIcon
              icon={faUser}
              className="text-gray-500 cursor-pointer w-4 h-4"
            />
            <FontAwesomeIcon
              onClick={() => {
                document.documentElement.requestFullscreen();
              }}
              icon={faExpandArrowsAlt}
              className="text-gray-500 cursor-pointer w-4 h-4"
            />
          </div>
        </div>
      </nav>
      <div className="px-3 pt-10">{children}</div>
      <div
        id="side-bar"
        className={`fixed z-40  transition-all w-72 h-screen duration-300 top-0 ${
          !showSideBar ? "-left-full" : "left-0"
        } bg-slate-100 p-2`}
      >
        <div
          className="flex gap-2 border-b-2  pb-2 items-center shadow-sm"
          onClick={() => setShowSideBar(!showSideBar)}
        >
          <img src={OMSPNG} alt="" className="w-9" />
          <div>EuroCotton</div>
        </div>
        <ul>
          <li>jaja</li>
          <li>jaja</li>
        </ul>
      </div>
      <div
        id="dark-background"
        onClick={() => {
          setShowSideBar(false);
          console.log("jaja");
        }}
        className={`fixed top-0 transition-all  z-30 w-screen h-screen ${
          showSideBar
            ? "bg-black bg-opacity-40 "
            : "opacity-0 pointer-events-none"
        }`}
      />
    </>
  );
};

export default NavBar;
