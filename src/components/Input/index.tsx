import * as S from "./styles";
import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  error?: string;
};

const Input: React.FC<InputProps> = ({
  label,
  labelProps,
  id,
  error,
  ...inputProps
}) => (
  <S.InputContainer>
    <label htmlFor={id} {...labelProps}>
      {label}
    </label>
    <S.Input id={id} {...inputProps} />
    {error && <S.Error>{error}</S.Error>}
  </S.InputContainer>
);

export default Input;
