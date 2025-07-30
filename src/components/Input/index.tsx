import * as S from "./styles";
import React from "react";
import { Mail } from "lucide-react";

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
    <S.Label htmlFor={id} {...labelProps}>
      {label}
    </S.Label>
    <S.InputAndIconContainer>
      <S.IconWrapper>
        <Mail size="1.25rem" />
      </S.IconWrapper>
      <S.Input id={id} {...inputProps} />
    </S.InputAndIconContainer>
    {error && <S.Error>{error}</S.Error>}
  </S.InputContainer>
);

export default Input;
