import React, { useState } from "react";
import styled, { css } from "styled-components";
import {
  Heart,
  MessageCircle,
  Repeat2,
  Share,
  MoreHorizontal,
} from "lucide-react";
import type { Post } from "../../../../../../types/post";
import { getAvatarUrl } from "../../../../../../utils/getAvatarUrl";
import type { RootState } from "../../../../../../store";
import { useSelector } from "react-redux";

interface TweetProps {
  tweet: Post;
}

const TweetContainer = styled.div`
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 0.5px 2px rgba(30, 41, 59, 0.04),
    0 1.5px 4px rgba(30, 41, 59, 0.04);
  border: 1px solid #f3f4f6;
  padding: 1.5rem;
  margin: 1rem;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 4px 12px rgba(30, 41, 59, 0.09);
  }
  max-width: 600px;
`;

const FlexRow = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 2px solid #e5e7eb;
`;

const FlexCol = styled.div`
  flex: 1;
`;

const TweetHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const AuthorName = styled.h3`
  font-weight: bold;
  color: #111827;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Username = styled.span`
  color: #6b7280;
`;

const Dot = styled.span`
  color: #6b7280;
  font-size: 1.2em;
  margin: 0 0.2em;
`;

const Timestamp = styled.span`
  color: #6b7280;
  font-size: 0.95em;
`;

const MoreBtn = styled.button`
  margin-left: auto;
  color: #9ca3af;
  padding: 0.5rem;
  border-radius: 9999px;
  background: none;
  border: none;
  transition: color 0.2s, background 0.2s;
  &:hover {
    color: #374151;
    background: #f3f4f6;
  }
  display: flex;
  align-items: center;
`;

const TweetContent = styled.p`
  color: #111827;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const TweetActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 28rem;
`;

const ActionBtn = styled.button<{
  color?: string;
  hoverBg?: string;
  isActive?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  padding: 0.5rem 0.75rem;
  border-radius: 9999px;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s, background 0.2s;

  color: ${({ color }) => color || "#6b7280"};
  &:hover {
    color: ${({ hoverBg }) => hoverBg || "#3b82f6"};
    background: ${({ hoverBg }) =>
      hoverBg?.includes("red")
        ? "#fef2f2"
        : hoverBg?.includes("green")
        ? "#f0fdf4"
        : hoverBg?.includes("blue")
        ? "#eff6ff"
        : "#f1f5f9"};
  }

  ${({ isActive, color, hoverBg }) =>
    isActive &&
    css`
      color: ${color};
      &:hover {
        color: ${hoverBg};
      }
      svg {
        fill: ${color};
      }
    `}
`;

const RetweetBtn = styled(ActionBtn)<{ isActive?: boolean }>`
  ${({ isActive }) =>
    isActive
      ? css`
          color: #22c55e;
          &:hover {
            color: #16a34a;
            background: #f0fdf4;
          }
        `
      : css`
          &:hover {
            color: #22c55e;
            background: #f0fdf4;
          }
        `}
`;

const LikeBtn = styled(ActionBtn)<{ isActive?: boolean }>`
  ${({ isActive }) =>
    isActive
      ? css`
          color: #ef4444;
          svg {
            fill: #ef4444;
          }
          &:hover {
            color: #dc2626;
            background: #fef2f2;
          }
        `
      : css`
          svg {
            fill: none;
          }
          &:hover {
            color: #ef4444;
            background: #fef2f2;
          }
        `}
`;

const Tweet: React.FC<TweetProps> = ({ tweet }) => {
  const user = useSelector((state: RootState) => state.user);

  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(tweet.likesCount);

  const handleLike = () => {
    setIsLiked((prev) => !prev);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <TweetContainer>
      <FlexRow>
        <Avatar src={getAvatarUrl(tweet.userId)} alt={"name"} />
        <FlexCol>
          <TweetHeader>
            <AuthorName>{"name"}</AuthorName>
            <Username>@{user.username}</Username>
            <Dot>·</Dot>
            <Timestamp>{tweet.createdAt}</Timestamp>
            <MoreBtn>
              <MoreHorizontal size={16} />
            </MoreBtn>
          </TweetHeader>
          <TweetContent>{tweet.content}</TweetContent>
          <TweetActions>
            <ActionBtn
              as="button"
              color="#6b7280"
              hoverBg="#3b82f6"
              type="button"
            >
              <MessageCircle size={20} />
            </ActionBtn>
            <LikeBtn
              as="button"
              type="button"
              isActive={isLiked}
              color="#ef4444"
              hoverBg="#dc2626"
              onClick={handleLike}
            >
              <Heart size={20} />
              <span>{likes}</span>
            </LikeBtn>
            <ActionBtn
              as="button"
              color="#6b7280"
              hoverBg="#3b82f6"
              type="button"
            >
              <Share size={20} />
            </ActionBtn>
          </TweetActions>
        </FlexCol>
      </FlexRow>
    </TweetContainer>
  );
};

export default Tweet;
