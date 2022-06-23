import { createRef, useCallback, useState } from "react";
import { Image as KonvaImage, Layer, Stage } from "react-konva";
import useImage from "use-image";
import { v4 as uuidv4 } from "uuid";

import { backgroundImg1 } from "../assets";
import {
  BgOptionControls,
  ImageControls,
  ImageOptionControls,
  StickerItem,
  TextItem,
  TextOptionForm,
} from "../components";

const TEXTS = [
  {
    id: uuidv4(),
    x: 50,
    y: 50,
  },
  {
    id: uuidv4(),
    x: 189,
    y: 256,
  },
  {
    id: uuidv4(),
    x: 500,
    y: 240,
  },
];

function KonvaMain() {
  const [currentBackground, setCurrentBackground] = useState(backgroundImg1);
  const [background] = useImage(currentBackground);
  const [imagesData, setImagesData] = useState([]);
  const [selectedID, setSelectedID] = useState(null);

  /////////////////////////////texts
  const [textData, setTextData] = useState(TEXTS);
  /////////////////////////////
  // console.log(textData);

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
        <ImageControls pickBg={changeBgHandler} pickImage={addStickerToPanel} />
        {/* <Stage
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
                  onDelete={() => {
                    const newImages = [...imagesData];
                    newImages.splice(i, 1);
                    setImagesData(newImages);
                  }}
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
            {textData.map((text) => {
              return <TextItem key={text.id} text={text} />;
            })}
          </Layer>
        </Stage> */}
        {/* <TextOptionForm addNewText={setTextData}/> */}
      </div>
    </div>
  );
}

export default KonvaMain;
