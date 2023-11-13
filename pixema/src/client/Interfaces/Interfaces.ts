import { HTMLInputTypeAttribute } from "react";

export interface IButtonsProps {
    children: string;
    onClick?: () => void;
}

export interface IInputProps {
    inputType: HTMLInputTypeAttribute;
    placeholder: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: number | '' | string
}