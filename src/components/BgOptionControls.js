import { backgroundData } from "./stickers.data";
import styled from "styled-components";

const BgOptionControlsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  .bg-button {
    background: transparent;
    height: auto;
    padding: 0;
    border: 2px solid transparent;
    transition: 0.2s ease-in-out;

    &:hover {
      border: 2px solid #4263f5;
    }

    img {
      display: block;
      width: 100%;
    }
  }
`;

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
