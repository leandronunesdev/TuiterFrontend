import styled from "styled-components";

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
