import { backgroundData } from "../stickers.data";
import { BgOptionControlsWrapper } from "../styled-components";

const BgOptionControls = ({ pickBg }) => {
  return (
    <BgOptionControlsWrapper>
      {backgroundData.map((bg) => {
        return (
          <button className="bg-button" key={bg.id} onClick={pickBg}>
            <img alt={bg.alt} src={bg.url} width={bg.width} />
          </button>
        );
      })}
    </BgOptionControlsWrapper>
  );
};

export default BgOptionControls;
