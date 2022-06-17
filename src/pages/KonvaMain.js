import { createRef, useCallback, useState } from "react";
import { Image as KonvaImage, Layer, Stage } from "react-konva";
import useImage from "use-image";
import { v4 as uuidv4 } from "uuid";

import { backgroundImg1 } from "../assets";
import {
  BgOptionControls,
  ImageOptionControls,
  StickerItem,
} from "../components";

function KonvaMain() {
  const [currentBackground, setCurrentBackground] = useState(backgroundImg1);
  const [background] = useImage(currentBackground);
  const [imagesData, setImagesData] = useState([]);
  const [selectedID, setSelectedID] = useState(null);

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

  const canvasClickHandler = useCallback(
    (event) => {
      if (event.target.attrs.id === "backgroundImage") {
        resetAllButtons();
        setSelectedID(null);
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
        <ImageOptionControls pickImage={addStickerToPanel} />
      </div>
      <Stage
        width={600}
        height={400}
        onClick={canvasClickHandler}
        onTap={canvasClickHandler}
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
                key={image.id}
                image={image}
                isSelected={image.id === selectedID}
                onSelect={() => {
                  setSelectedID(image.id);
                }}
                onChange={(newAttrs) => {
                  const rects = imagesData.slice();
                  rects[i] = newAttrs;
                  setImagesData(rects);
                }}
              />
            );
          })}
        </Layer>
      </Stage>
    </div>
  );
}

export default KonvaMain;
