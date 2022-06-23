import React from "react";
import { RadioInputWrapper } from "./styled-components";

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
