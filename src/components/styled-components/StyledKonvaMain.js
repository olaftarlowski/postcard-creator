import styled from "styled-components";

const KonvaMainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: auto;
  padding: 0 32px;

  .form-column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h4,
    p {
      margin: 20px 0;
    }

    .form-column-headline {
      margin-bottom: 120px;
      font-size: 20px;
      text-align: right;

      h1 {
        margin: 0;
      }
      p {
        margin: 0;
      }
    }
  }

  .konvajs-content {
    border: 2px solid #949494;
    margin: 0 auto;
    box-sizing: initial;
  }
`;

export default KonvaMainWrapper;