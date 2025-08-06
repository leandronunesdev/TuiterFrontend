import React, { useState } from "react";
import { Send } from "lucide-react";
import * as S from "./styles";
import { useMutation } from "@tanstack/react-query";
import { createPost } from "src/api/post";
import type { CreatePostPayload } from "src/types/post";

interface TweetComposerProps {
  userAvatar: string;
}

const TweetComposer: React.FC<TweetComposerProps> = ({ userAvatar }) => {
  const [content, setContent] = useState("");
  const [apiError, setApiError] = useState<string | null>(null);

  const maxLength = 280;

  const mutation = useMutation({
    mutationFn: async (data: CreatePostPayload) => {
      return createPost(data);
    },
    onSuccess: () => {
      setContent("");
      setApiError(null);
    },
    onError: (err: any) => {
      setApiError(err.response?.data || "Could not connect to server.");
    },
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      mutation.mutate({ content, userId: "68840290a800f6cd82099863" });
      setContent("");
    }
  };

  const remainingChars = maxLength - content.length;
  const isOverLimit = remainingChars < 0;
  const warning = remainingChars < 20 && !isOverLimit;

  return (
    <S.ComposerContainer>
      <S.FlexRow>
        <S.Avatar src={userAvatar} alt="Your avatar" />
        <S.ComposerForm onSubmit={onSubmit}>
          <S.ComposerTextarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's happening?"
            rows={3}
            maxLength={maxLength + 25}
          />

          <S.ControlsRow>
            <S.ButtonRow>
              <S.CharCount isOverLimit={isOverLimit} warning={warning}>
                {remainingChars}
              </S.CharCount>
              <S.TweetButton
                type="submit"
                disabled={!content.trim() || isOverLimit}
              >
                <Send size={18} />
                <span>Tweet</span>
              </S.TweetButton>
            </S.ButtonRow>
            {apiError && <S.ErrorMessage>{apiError}</S.ErrorMessage>}
          </S.ControlsRow>
        </S.ComposerForm>
      </S.FlexRow>
    </S.ComposerContainer>
  );
};

export default TweetComposer;
