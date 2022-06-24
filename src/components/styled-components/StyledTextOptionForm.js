import styled from "styled-components";

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 280px;

  .form-radio {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .form-radio-wrapper {
    display: flex;
    flex-direction: row-reverse;
  }

  input[type="text"],
  select {
    width: 100%;
    height: 40px;
    padding: 6px 20px;
    font-size: 22px;
  }
  input[type="text"] {
    height: 90px;

    &:focus {
      outline: 0px;
      border: 2px solid #232323;
    }
  }
  select {
    text-transform: capitalize;
    &:focus {
      outline: 0px;
      border: 2px solid #232323;
    }
  }
`;

export default FormWrapper;
