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

export default BgOptionControlsWrapper;
