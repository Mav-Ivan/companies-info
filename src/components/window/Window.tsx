import React, { memo } from "react";
import { MosaicBranch, MosaicWindow } from "react-mosaic-component";
import { Button } from "@blueprintjs/core";

import WindowContent from "@/components/window-content/WindowContent";
import CloseAdditionalControlsButton from "@/components/CloseAdditionalControlsButton";
import { WindowData } from "@/consts/types";
import { Buttons } from "./Window.consts";

interface WindowProps {
  path: MosaicBranch[];
  data: WindowData;
}

function Window({ path, data }: WindowProps) {
  const additionalControls = React.Children.toArray([
    <CloseAdditionalControlsButton />,
  ]);

  return (
    <MosaicWindow
      additionalControls={additionalControls}
      title={"Company Info"}
      path={path}
      toolbarControls={Buttons.map((btn, indx) => (
        <Button title={btn.title} icon={btn.icon} key={indx} />
      ))}
    >
      <WindowContent data={data} />
    </MosaicWindow>
  );
}

export default memo(Window);
