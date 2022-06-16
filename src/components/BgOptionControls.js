import { backgroundData } from "./stickers.data";

const BgOptionControls = ({ pickBg }) => {
  return (
    <div>
      <h4>Click/Tap to change background</h4>
      {backgroundData.map((bg) => {
        return (
          <button key={bg.id} onClick={pickBg}>
            <img alt={bg.alt} src={bg.url} width={bg.width} />
          </button>
        );
      })}
    </div>
  );
};

export default BgOptionControls;
