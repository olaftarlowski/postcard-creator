import { stickersData } from "../stickers.data";
import { ImageOptionControlsWrapper } from "../styled-components";

const ImageOptionControls = ({ pickImage }) => {
  return (
    <ImageOptionControlsWrapper>
      {stickersData.map((sticker) => {
        return (
          <button
            className="img-button"
            key={sticker.id}
            onMouseDown={() => {
              pickImage({
                src: sticker.url,
                width: sticker.width,
              });
            }}
          >
            <img alt={sticker.alt} src={sticker.url} width={sticker.width} />
          </button>
        );
      })}
    </ImageOptionControlsWrapper>
  );
};

export default ImageOptionControls;
