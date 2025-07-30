import styled from "styled-components";
import { theme } from "../../styles/theme";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
  width: 100%;
`;

export const InputAndIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const IconWrapper = styled.span`
  position: absolute;
  left: 12px;
  display: flex;
  align-items: center;
  color: ${theme.colors.gray};
  pointer-events: none;
  z-index: 2;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px 12px 40px;
  border: 1px solid ${theme.colors.border};
  border-radius: 4px;
  font-size: 1rem;
  color: ${theme.colors.text};
  background: ${theme.colors.lightGray};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }

  &::placeholder {
    color: ${theme.colors.gray};
  }
`;

export const Error = styled.span`
  color: ${theme.colors.error};
  font-size: 0.92rem;
  margin-top: 4px;
  margin-left: 2px;
  min-height: 20px;
  line-height: 1.3;
  font-weight: 500;
  letter-spacing: 0.01em;
  transition: color 0.2s;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;
