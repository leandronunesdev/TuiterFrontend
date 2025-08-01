import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Send, Image as ImageIcon, Smile } from "lucide-react";

interface TweetComposerProps {
  onTweet: (content: string) => void;
  userAvatar: string;
}

const ComposerContainer = styled.div`
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 0.5px 2px rgba(30, 41, 59, 0.04),
    0 1.5px 4px rgba(30, 41, 59, 0.04);
  border: 1px solid #f3f4f6;
  padding: 1.5rem;
  margin: 1rem;
  max-width: 600px;
`;

const FlexRow = styled.div`
  display: flex;
  gap: 1rem;
`;

const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 2px solid #e5e7eb;
`;

const ComposerForm = styled.form`
  flex: 1;
`;

const ComposerTextarea = styled.textarea`
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

const ControlsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #f3f4f6;
`;

const IconButton = styled.button`
  color: #3b82f6;
  padding: 0.5rem;
  border-radius: 9999px;
  background: none;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;

  &:hover {
    background: #f0f6ff;
  }
`;

const CharCount = styled.div<{ isOverLimit: boolean; warning: boolean }>`
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

const TweetButton = styled.button<{ disabled: boolean }>`
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

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const TweetComposer: React.FC<TweetComposerProps> = ({
  onTweet,
  userAvatar,
}) => {
  const [content, setContent] = useState("");
  const maxLength = 280;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onTweet(content);
      setContent("");
    }
  };

  const remainingChars = maxLength - content.length;
  const isOverLimit = remainingChars < 0;
  const warning = remainingChars < 20 && !isOverLimit;

  return (
    <ComposerContainer>
      <FlexRow>
        <Avatar src={userAvatar} alt="Your avatar" />
        <ComposerForm onSubmit={handleSubmit}>
          <ComposerTextarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's happening?"
            rows={3}
            maxLength={maxLength + 25}
          />

          <ControlsRow>
            <ButtonRow>
              <IconButton type="button">
                <ImageIcon size={20} />
              </IconButton>
              <IconButton type="button">
                <Smile size={20} />
              </IconButton>
            </ButtonRow>
            <ButtonRow>
              <CharCount isOverLimit={isOverLimit} warning={warning}>
                {remainingChars}
              </CharCount>
              <TweetButton
                type="submit"
                disabled={!content.trim() || isOverLimit}
              >
                <Send size={18} />
                <span>Tweet</span>
              </TweetButton>
            </ButtonRow>
          </ControlsRow>
        </ComposerForm>
      </FlexRow>
    </ComposerContainer>
  );
};

export default TweetComposer;
