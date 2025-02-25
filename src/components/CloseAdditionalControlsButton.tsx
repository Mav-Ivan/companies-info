import { Classes } from "@blueprintjs/core";
import classNames from "classnames";
import React, { memo, useContext } from "react";
import { MosaicWindowContext } from "react-mosaic-component";

const CloseAdditionalControlsButton = () => {
  const context = useContext(MosaicWindowContext);

  return (
    <div className={classNames(Classes.BUTTON_GROUP, Classes.MINIMAL)}>
      <button
        onClick={() =>
          context.mosaicWindowActions.setAdditionalControlsOpen(false)
        }
        className={Classes.BUTTON}
      >
        Close button
      </button>
    </div>
  );
};

export default memo(CloseAdditionalControlsButton);
