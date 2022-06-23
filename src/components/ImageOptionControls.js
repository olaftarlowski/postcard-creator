import { stickersData } from "./stickers.data";
import styled from "styled-components";

const ImageOptionControlsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #f0f0f0;

  .img-button {
    flex-basis: 30%;
    background: transparent;
    padding: 0;
    border: 2px solid transparent;
    transition: 0.2s ease-in-out;

    &:hover {
      border: 2px solid #4263f5;
    }

    img {
      height: 90px;
      width: auto;
      margin: auto;
      display: block;
    }
  }
`;

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
                x: 100,
                y: 100,
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
