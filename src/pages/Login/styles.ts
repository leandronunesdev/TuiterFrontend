import styled from "styled-components";
import { theme } from "../../styles/theme";

export const IconContainer = styled.div`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.surface};
  border-radius: 50%;
  height: 56px;
  width: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${theme.spacing.sm};
`;

export const LoginFormContainer = styled.section`
  background-color: ${theme.colors.surface};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  border-radius: 1rem;
  width: 100%;
  max-width: 28rem;

  --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1);
  box-shadow: var(--tw-shadow);
`;

export const Paragraph = styled.p`
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Nav = styled.nav`
  display: flex;

  a {
    font-weight: 600;
  }
`;
