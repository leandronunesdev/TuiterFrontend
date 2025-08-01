import React from "react";
import styled from "styled-components";
import Feed from "./components/Feed";
import TweetComposer from "./components/TweetComposer";
import { currentUser, tweets } from "./constants";

interface UserFeedContentProps {
  handleNewTweet: (content: string) => void;
}

const MainFeedContainer = styled.div`
  grid-column: span 6 / span 6;
  @media (min-width: 1024px) {
    grid-column: span 6 / span 6;
  }
`;

const Section = styled.div`
  margin-bottom: 1.5rem;
`;

const FeedTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: #111827;
  margin: 0 1rem;
`;

const UserFeedContent: React.FC<UserFeedContentProps> = ({
  handleNewTweet,
}) => {
  return (
    <MainFeedContainer>
      <TweetComposer onTweet={handleNewTweet} userAvatar={currentUser.avatar} />
      <Section>
        <FeedTitle>Your Feed</FeedTitle>
        <Feed tweets={tweets} />
      </Section>
    </MainFeedContainer>
  );
};

export default UserFeedContent;
