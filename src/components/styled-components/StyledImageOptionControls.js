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

export default ImageOptionControlsWrapper;
