import styled, { css } from "styled-components";

const Button = styled.button`
  width: 130px;
  height: 45px;
  padding: 6px 20px;
  font-size: 20px;
  background: #000;
  color: #fff;
  cursor: pointer;

  ${({ primary }) =>
    primary &&
    css`
      background-color: #4285f4;
      :hover {
        background-color: #377ded;
      }
    `}
`;

export default Button;
