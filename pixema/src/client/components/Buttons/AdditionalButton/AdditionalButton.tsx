import React from "react";
import { IButtonsProps } from "src/client/Interfaces/Interfaces";
import { AdditionalStyledButton } from "src/client/components/Buttons/AdditionalButton/styles";

const AdditionalButton = ({ children, onClick }: IButtonsProps) => {
  return <AdditionalStyledButton onClick={onClick}>
    {children}
  </AdditionalStyledButton>;
};

export default AdditionalButton;
