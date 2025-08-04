import styled, { css } from "styled-components";

export const ComposerContainer = styled.div`
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 0.5px 2px rgba(30, 41, 59, 0.04),
    0 1.5px 4px rgba(30, 41, 59, 0.04);
  border: 1px solid #f3f4f6;
  padding: 1.5rem;
  margin: 1rem;
  max-width: 600px;
`;

export const FlexRow = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 2px solid #e5e7eb;
`;

export const ComposerForm = styled.form`
  flex: 1;
`;

export const ComposerTextarea = styled.textarea`
  width: 100%;
  font-size: 1.125rem;
  color: #111827;
  border: none;
  resize: none;
  outline: none;
  background: transparent;
  padding: 0;
  font-family: "Inter", sans-serif;
  &::placeholder {
    color: #6b7280;
    opacity: 1;
    font-family: inherit;
  }
`;

export const ControlsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #f3f4f6;
`;

export const CharCount = styled.div<{ isOverLimit: boolean; warning: boolean }>`
  font-size: 0.95rem;
  color: #6b7280;
  ${(props) =>
    props.isOverLimit &&
    css`
      color: #ef4444;
    `}
  ${(props) =>
    props.warning &&
    !props.isOverLimit &&
    css`
      color: #f59e42;
    `}
`;

export const TweetButton = styled.button<{ disabled: boolean }>`
  background: #3b82f6;
  color: #fff;
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.2s, opacity 0.2s;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover:not(:disabled) {
    background: #2563eb;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: 0.95rem;
  margin-top: 0.5rem;
  font-weight: 500;
`;
