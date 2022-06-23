import styled from "styled-components";

const ImageControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  border: 1px solid #949494;

  .controls-headline {
    border-top: 1px solid #949494;
    border-bottom: 1px solid #949494;
    padding: 12px 24px;

    h2 {
      margin: 0;
      font-size: 20px;
    }
  }
`;

export default ImageControlsWrapper;
