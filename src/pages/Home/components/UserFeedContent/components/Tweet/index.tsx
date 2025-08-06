import React, { useState } from "react";
import { Heart, MessageCircle, Share, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import * as S from "./styles";
import type { RootState } from "src/store";
import type { Post } from "src/types/post";
import { getAvatarUrl } from "src/utils/getAvatarUrl";

interface TweetProps {
  tweet: Post;
}

const Tweet: React.FC<TweetProps> = ({ tweet }) => {
  const user = useSelector((state: RootState) => state.user);

  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(tweet.likesCount);

  const handleLike = () => {
    setIsLiked((prev) => !prev);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <S.TweetContainer>
      <S.FlexRow>
        <S.Avatar src={getAvatarUrl(tweet.userId)} alt={"name"} />
        <S.FlexCol>
          <S.TweetHeader>
            <S.AuthorName>{"name"}</S.AuthorName>
            <S.Username>@{user.username}</S.Username>
            <S.Dot>·</S.Dot>
            <S.Timestamp>{tweet.createdAt}</S.Timestamp>
            <S.MoreBtn>
              <MoreHorizontal size={16} />
            </S.MoreBtn>
          </S.TweetHeader>
          <S.TweetContent>{tweet.content}</S.TweetContent>
          <S.TweetActions>
            <S.ActionBtn
              as="button"
              color="#6b7280"
              hoverBg="#3b82f6"
              type="button"
            >
              <MessageCircle size={20} />
            </S.ActionBtn>
            <S.LikeBtn
              as="button"
              type="button"
              isActive={isLiked}
              color="#ef4444"
              hoverBg="#dc2626"
              onClick={handleLike}
            >
              <Heart size={20} />
              <span>{likes}</span>
            </S.LikeBtn>
            <S.ActionBtn
              as="button"
              color="#6b7280"
              hoverBg="#3b82f6"
              type="button"
            >
              <Share size={20} />
            </S.ActionBtn>
          </S.TweetActions>
        </S.FlexCol>
      </S.FlexRow>
    </S.TweetContainer>
  );
};

export default Tweet;
