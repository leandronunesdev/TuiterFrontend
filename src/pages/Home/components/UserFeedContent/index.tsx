import React from "react";
import styled from "styled-components";
import Feed from "./components/Feed";
import TweetComposer from "./components/TweetComposer";
import { currentUser } from "./constants";
import { useQuery } from "@tanstack/react-query";
import { getPostsByUserId } from "../../../../api/post";
import type { Post } from "../../../../types/post";

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

const UserFeedContent: React.FC<UserFeedContentProps> = () => {
  const userId = "68840290a800f6cd82099863";

  const { data: tweets } = useQuery<Post[]>({
    queryKey: ["getPostsByUserId", userId],
    queryFn: ({ queryKey }) => getPostsByUserId(queryKey[1] as string),
  });

  return (
    <MainFeedContainer>
      <TweetComposer userAvatar={currentUser.avatar} />
      <Section>
        <FeedTitle>Your Feed</FeedTitle>
        {tweets && <Feed tweets={tweets} />}
      </Section>
    </MainFeedContainer>
  );
};

export default UserFeedContent;
