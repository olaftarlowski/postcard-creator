import React from "react";
import styled from "styled-components";

const RadioInputWrapper = styled.div`
  position: relative;
  height: 30px;
  width: 30px;
  margin: 4px;

  label {
    display: inline-block;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    transition: all 0.2s ease-in-out;

    &:before {
      box-shadow: rgba(0, 0, 0, 0.08) 0 0 1vw 0, rgba(0, 0, 0, 0.24) 0 1vw 1vw 0;
    }
  }

  .radio:checked + label {
    background: white;
    border: 4px solid;
    box-shadow: inset rgba(0, 0, 0, 0.12) 0 0 0.6vw 0,
      inset rgba(0, 0, 0, 0.24) 0 0.6vw 0.8vw 0;
    transition: all 0.2s;
  }
  #radio-1 + label {
    background: #4285f4;
  }
  #radio-2 + label {
    background: #ea4335;
  }
  #radio-3 + label {
    background: #fbbc05;
  }
  #radio-4 + label {
    background: #34a853;
  }
  #radio-5 + label {
    background: #121212;
  }
  #radio-6 + label {
    background: #f7f7f7;
  }
  #radio-7 + label {
    background: #d502d9;
  }
  #radio-8 + label {
    background: #35fc3f;
  }
  input[type="radio"] {
    display: none;
  }
`;

const RadioInput = React.forwardRef(
  ({ value, label, name, onChange, onBlur }, ref) => {
    return (
      <RadioInputWrapper color={value}>
        <input
          id={label}
          value={value}
          name={name}
          type="radio"
          className="radio"
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
        />
        <label htmlFor={label}></label>
      </RadioInputWrapper>
    );
  }
);

export default RadioInput;
