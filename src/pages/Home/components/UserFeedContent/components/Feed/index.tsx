import React from "react";
import styled from "styled-components";
import Tweet from "../Tweet";

interface FeedProps {
  tweets: Array<{
    id: string;
    author: {
      name: string;
      username: string;
      avatar: string;
    };
    content: string;
    timestamp: string;
    likes: number;
    retweets: number;
    replies: number;
    isLiked: boolean;
    isRetweeted: boolean;
  }>;
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
