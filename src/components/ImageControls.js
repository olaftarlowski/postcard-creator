import React from "react";
import styled from "styled-components";
import { BgOptionControls, ImageOptionControls } from "./";

const ImageControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  border: 1px solid #949494;

  .controls-headline {
    border-top: 1px solid #949494;
    border-bottom: 1px solid #949494;
    padding: 12px 24px;

    h2 {
      margin: 0;
      font-size: 20px;
    }
  }
`;

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
