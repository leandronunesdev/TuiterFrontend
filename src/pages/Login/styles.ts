import styled from "styled-components";

export const Section = styled.section`
  min-width: 320px;
  min-height: 320px;
  padding: 2rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.surface};
  align-content: center;
  text-align: center;
`;

export const Main = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.surface};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Button = styled.button`
  padding: 12px 16px;
  border: none;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};
  font-size: 1rem;
  cursor: pointer;
  margin: 16px;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;
