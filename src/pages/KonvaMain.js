import { useState } from "react";
import { Image as KonvaImage, Layer, Stage } from "react-konva";
import useImage from "use-image";

import { backgroundImg1 } from "../assets";
import BgOptionControls from "../components/BgOptionControls";
import ImageOptionControls from "../components/ImageOptionControls";

function KonvaMain() {
  const [currentBackgroudn, setCurrentBackgroudn] = useState(backgroundImg1);
  const [background] = useImage(currentBackgroudn);

  const changeBgHandler = (e) => {
    setCurrentBackgroudn(e.target.currentSrc);
  };

  return (
    <div>
      <h5>Canvas</h5>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <BgOptionControls pickBg={changeBgHandler} />
        <ImageOptionControls />
      </div>
      <Stage width={600} height={400}>
        <Layer>
          <KonvaImage
            image={background}
            height={400}
            width={600}
            id="backgroundImage"
          />
        </Layer>
      </Stage>
    </div>
  );
}

export default KonvaMain;
