import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
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

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.92rem;
  margin-top: 4px;
  margin-left: 2px;
  min-height: 20px;
  line-height: 1.3;
  font-weight: 500;
  letter-spacing: 0.01em;
  transition: color 0.2s;
`;
