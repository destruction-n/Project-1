import React from "react";
import { KeyButton } from "./styles";
import { IButtonsProps } from "src/client/Interfaces/Interfaces";

const KeyButtonStyle = ({ children, onClick }: IButtonsProps) => {
  return <KeyButton onClick={onClick}>{children}</KeyButton>;
};

export default KeyButtonStyle;
