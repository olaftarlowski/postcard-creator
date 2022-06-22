import { createRef, useCallback, useState } from "react";
import { Image as KonvaImage, Layer, Stage } from "react-konva";
import useImage from "use-image";
import { v4 as uuidv4 } from "uuid";

import { backgroundImg1 } from "../assets";
import {
  BgOptionControls,
  ImageOptionControls,
  StickerItem,
  TextItem,
  TextOptionForm,
} from "../components";
import { TEXTS } from "../components/stickers.data";

function KonvaMain() {
  const [currentBackground, setCurrentBackground] = useState(backgroundImg1);
  const [background] = useImage(currentBackground);
  const [imagesData, setImagesData] = useState([]);
  const [selectedID, setSelectedID] = useState(null);
  const [textData, setTextData] = useState(TEXTS);

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
                  key={image.id}
                  image={image}
                  onDelete={() => {
                    const newImages = [...imagesData];
                    newImages.splice(i, 1);
                    setImagesData(newImages);
                  }}
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
            {textData.map((text, i) => {
              return (
                <TextItem
                  key={text.id}
                  text={text}
                  onDelete={() => {
                    const newTexts = [...textData];
                    newTexts.splice(i, 1);
                    setTextData(newTexts);
                  }}
                  isSelected={text.id === selectedID}
                  onSelect={() => {
                    setSelectedID(text.id);
                  }}
                  onChange={(newAttrs) => {
                    console.log(newAttrs);
                    const rects = textData.slice();
                    rects[i] = newAttrs;
                    setTextData(rects);
                  }}
                />
              );
            })}
          </Layer>
        </Stage>
        <TextOptionForm addNewText={setTextData} />
      </div>
    </div>
  );
}

export default KonvaMain;
