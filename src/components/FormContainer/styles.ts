import styled from "styled-components";
import { theme } from "../../styles/theme";

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

  @media (max-width: 500px) {
    padding: 12px 4vw;
    max-width: 98vw;
    border-radius: 0.7rem;
  }
`;
