import styled from "styled-components";

export const Button = styled.button`
  padding: 12px 16px;
  border: none;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};
  font-size: 1rem;
  cursor: pointer;
  margin: 24px 0;
  width: 100%;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    transition: background-color 0.3s ease;
  }
`;
