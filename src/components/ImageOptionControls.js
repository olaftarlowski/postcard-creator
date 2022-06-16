import { stickersData } from "./stickers.data";

const ImageOptionControls = ({ pickImage }) => {
  return (
    <div>
      <h4>Click/Tap to add sticker to photo!</h4>
      {stickersData.map((sticker) => {
        return (
          <button
            key={sticker.id}
            onMouseDown={() => {
              pickImage({
                src: sticker.url,
                width: sticker.width,
                x: 100,
                y: 100,
              });
            }}
          >
            <img alt={sticker.alt} src={sticker.url} width={sticker.width} />
          </button>
        );
      })}
    </div>
  );
};

export default ImageOptionControls;
