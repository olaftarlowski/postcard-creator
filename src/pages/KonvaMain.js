import { createRef, useCallback, useState } from "react";
import { Image as KonvaImage, Layer, Stage } from "react-konva";
import useImage from "use-image";
import { v4 as uuidv4 } from "uuid";

import { backgroundImg1 } from "../assets";
import BgOptionControls from "../components/BgOptionControls";
import ImageOptionControls from "../components/ImageOptionControls";
import StickerItem from "../components/StickerItem";

function KonvaMain() {
  const [currentBackground, setCurrentBackground] = useState(backgroundImg1);
  const [background] = useImage(currentBackground);
  const [imagesData, setImagesData] = useState([]);

  const addStickerToPanel = ({ src, width, x, y }) => {
    setImagesData((currentImages) => [
      ...currentImages,
      {
        id: uuidv4(),
        width,
        x,
        y,
        src,
        resetButtonRef: createRef(),
      },
    ]);
  };
  const resetAllButtons = useCallback(() => {
    imagesData.forEach((image) => {
      if (image.resetButtonRef.current) {
        image.resetButtonRef.current();
      }
    });
  }, [imagesData]);

  const handleCanvasClick = useCallback(
    (event) => {
      if (event.target.attrs.id === "backgroundImage") {
        resetAllButtons();
      }
    },
    [resetAllButtons]
  );

  const changeBgHandler = (e) => {
    setCurrentBackground(e.target.currentSrc);
  };

  return (
    <div>
      <h5>Canvas</h5>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <BgOptionControls pickBg={changeBgHandler} />
        <ImageOptionControls pickImage={addStickerToPanel}/>
      </div>
      <Stage
        width={600}
        height={400}
        onClick={handleCanvasClick}
        onTap={handleCanvasClick}
      >
        <Layer>
          <KonvaImage
            image={background}
            height={400}
            width={600}
            id="backgroundImage"
          />
          {imagesData.map((image, i) => {
            return (
              <StickerItem
                onDelete={() => {
                  const newImages = [...imagesData];
                  newImages.splice(i, 1);
                  setImagesData(newImages);
                }}
                onDragEnd={(event) => {
                  image.x = event.target.x();
                  image.y = event.target.y();
                }}
                key={i}
                image={image}
              />
            );
          })}
        </Layer>
      </Stage>
    </div>
  );
}

export default KonvaMain;
