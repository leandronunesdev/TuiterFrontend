import React from "react";
import styled from "styled-components";
import Tweet from "../Tweet";
import type { Post } from "../../../../../../types/post";

interface FeedProps {
  tweets: Post[];
}

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const Feed: React.FC<FeedProps> = ({ tweets }) => (
  <FeedContainer>
    {tweets.map((tweet) => (
      <Tweet key={tweet.id} tweet={tweet} />
    ))}
  </FeedContainer>
);

export default Feed;
