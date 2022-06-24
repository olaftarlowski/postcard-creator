import { useRef } from "react";
import { createRef, useCallback, useState } from "react";
import { Image as KonvaImage, Layer, Stage } from "react-konva";
import useImage from "use-image";
import { v4 as uuidv4 } from "uuid";

import { backgroundImg1 } from "../assets";
import {
  Button,
  ImageControls,
  StickerItem,
  TextItem,
  TextOptionForm,
} from "../components";
// import { TEXTS } from "../components/stickers.data";
import { KonvaMainWrapper } from "../components/styled-components";

function KonvaMain() {
  const stageRef = useRef(null);
  const [currentBackground, setCurrentBackground] = useState(backgroundImg1);
  const [background] = useImage(currentBackground);
  const [imagesData, setImagesData] = useState([]);
  const [textData, setTextData] = useState([]);
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

  //download created canvas

  const downloadURI = (uri, name) => {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExport = () => {
    const uri = stageRef.current.toDataURL();
    downloadURI(uri, "stage-postcard.png");
  };

  return (
    <KonvaMainWrapper>
      <ImageControls pickBg={changeBgHandler} pickImage={addStickerToPanel} />
      <div className="stage-wrapper">
        <Stage
          ref={stageRef}
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
      </div>
      <div className="form-column">
        <div className="form-column-headline">
          <h1>CDESIGNER</h1>
          <p>
            Save your postcard
            <br /> to desktop
          </p>
          <Button primary onClick={handleExport}>
            Save
          </Button>
        </div>
        <div>
          <h4>Custom postcard</h4>
          <p>Add your text</p>
          <TextOptionForm addNewText={setTextData} />
        </div>
      </div>
    </KonvaMainWrapper>
  );
}

export default KonvaMain;
