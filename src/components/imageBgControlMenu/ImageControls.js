import React from "react";
import { BgOptionControls, ImageOptionControls } from "..";
import { ImageControlsWrapper } from "../styled-components";

const ImageControls = ({ pickBg, pickImage }) => {
  return (
    <ImageControlsWrapper>
      <div className="controls-headline">
        <h2>Step 1 : Choose your background</h2>
      </div>
      <BgOptionControls pickBg={pickBg} />
      <div className="controls-headline">
        <h2>Step 2 : Choose your photos</h2>
      </div>
      <ImageOptionControls pickImage={pickImage} />
    </ImageControlsWrapper>
  );
};

export default ImageControls;
