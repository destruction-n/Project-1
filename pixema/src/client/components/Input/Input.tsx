import React, { HTMLInputTypeAttribute } from "react";
import { IInputProps } from "src/client/Interfaces/Interfaces";
import { StyledInput } from "src/client/components/Input/styles";

const Input = ({ inputType, placeholder, onChange, value }: IInputProps) => {
  return (
    <div>
      <StyledInput
        type={inputType}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
