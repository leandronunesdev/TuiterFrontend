import * as S from "./styles";

type FormContainerProps = {
  children: React.ReactNode;
};

const FormContainer = ({ children }: FormContainerProps) => {
  return (
    <S.LoginFormContainer aria-label="Form container">
      {children}
    </S.LoginFormContainer>
  );
};

export default FormContainer;
