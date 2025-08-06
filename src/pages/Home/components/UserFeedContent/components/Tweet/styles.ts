import styled, { css } from "styled-components";

export const TweetContainer = styled.div`
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

export const FlexRow = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 2px solid #e5e7eb;
`;

export const FlexCol = styled.div`
  flex: 1;
`;

export const TweetHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const AuthorName = styled.h3`
  font-weight: bold;
  color: #111827;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Username = styled.span`
  color: #6b7280;
`;

export const Dot = styled.span`
  color: #6b7280;
  font-size: 1.2em;
  margin: 0 0.2em;
`;

export const Timestamp = styled.span`
  color: #6b7280;
  font-size: 0.95em;
`;

export const MoreBtn = styled.button`
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

export const TweetContent = styled.p`
  color: #111827;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

export const TweetActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 28rem;
`;

export const ActionBtn = styled.button<{
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

export const LikeBtn = styled(ActionBtn)<{ isActive?: boolean }>`
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
