import { Image as KonvaImage, Layer, Stage } from "react-konva";
import useImage from "use-image";

import { backgroundImg } from "../assets";

function KonvaMain() {
  const [background] = useImage(backgroundImg);

  return (
    <div>
      <h5>Canvas</h5>
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
