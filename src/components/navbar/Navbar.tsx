import React from "react";
import { Classes } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

import { useTheme } from "@/context/theme-context";
import { Themes } from "@/consts/styles.enum";

export const NavBar = () => {
  const { currentTheme, changeTheme } = useTheme();

  const addToTopRight = () => {};

  const autoArrange = () => {};

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeTheme(e.currentTarget.value);
  };

  return (
    <div className="w-[100] h-[6%] flex justify-between items-center bg-gray-700 text-white">
      <div className={Classes.NAVBAR_GROUP}>
        <div className={"ml-10"}>
          <a
            href="https://github.com/nomcopter/react-mosaic"
            className="!text-white font-bold"
          >
            react-mosaic <span className="text-gray-400">v6.1.0</span>
          </a>
        </div>
      </div>
      <div className="w-2xl flex">
        <div className="flex items-center">
          <span className="mr-2">Theme:</span>
          <select
            className="bg-gray-700 text-white p-1 border-1 border-gray-800"
            value={currentTheme}
            onChange={handleChange}
          >
            {Object.entries(Themes).map(([key, value]) => (
              <option key={key} value={value}>
                {key}
              </option>
            ))}
          </select>
        </div>
        <div className="h-8 w-px bg-gray-800 mx-3" />
        <div className="flex items-center">
          <span className="mr-2">Example Actions:</span>
          <button
            className={
              "bg-gray-700 text-white p-2 border-1 border-gray-800 border-collapse " +
              Classes.BUTTON +
              Classes.iconClass(IconNames.GRID_VIEW)
            }
            onClick={autoArrange}
          >
            Auto Arrange
          </button>
          <button
            className={
              "bg-gray-700 text-white p-2 border-1 border-gray-800 border-collapse " +
              Classes.BUTTON +
              Classes.iconClass(IconNames.ARROW_TOP_RIGHT)
            }
            onClick={addToTopRight}
          >
            Add Window to Top Right
          </button>
        </div>
      </div>
    </div>
  );
};
