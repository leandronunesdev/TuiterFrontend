import React from "react";
import Tweet from "../Tweet";
import * as S from "./styles";
import type { Post } from "src/types/post";

type FeedProps = {
  tweets: Post[];
};

const Feed: React.FC<FeedProps> = ({ tweets }) => (
  <S.FeedContainer>
    {tweets.map((tweet) => (
      <Tweet key={tweet.id} tweet={tweet} />
    ))}
  </S.FeedContainer>
);

export default Feed;
