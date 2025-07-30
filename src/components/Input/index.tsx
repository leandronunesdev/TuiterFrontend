import * as S from "./styles";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  error?: string;
  icon?: React.ReactNode;
};

const Input: React.FC<InputProps> = ({
  label,
  labelProps,
  id,
  error,
  icon,
  type,
  ...inputProps
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <S.InputContainer>
      <S.Label htmlFor={id} {...labelProps}>
        {label}
      </S.Label>
      <S.InputAndIconContainer>
        {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
        <S.Input
          id={id}
          type={isPassword && showPassword ? "text" : type}
          {...inputProps}
        />
        {isPassword && (
          <S.VisibilityToggle
            type="button"
            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            onClick={() => setShowPassword((v) => !v)}
            tabIndex={0}
          >
            {showPassword ? <EyeOff size="1.25rem" /> : <Eye size="1.25rem" />}
          </S.VisibilityToggle>
        )}
      </S.InputAndIconContainer>
      {error && <S.Error>{error}</S.Error>}
    </S.InputContainer>
  );
};

export default Input;
