import * as S from "./styles";

type ErrorMessageProps = {
  children: string;
};

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return <S.ErrorMessage>{children}</S.ErrorMessage>;
};

export default ErrorMessage;
