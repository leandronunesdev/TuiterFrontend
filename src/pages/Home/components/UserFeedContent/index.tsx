import React from "react";
import Feed from "./components/Feed";
import TweetComposer from "./components/TweetComposer";
import { currentUser } from "./constants";
import { useQuery } from "@tanstack/react-query";
import * as S from "./styles";
import { getPostsByUserId } from "src/api/post";
import type { Post } from "src/types/post";

type UserFeedContentProps = {
  handleNewTweet: (content: string) => void;
};

const UserFeedContent: React.FC<UserFeedContentProps> = () => {
  const userId = "68840290a800f6cd82099863";

  const { data: tweets } = useQuery<Post[]>({
    queryKey: ["getPostsByUserId", userId],
    queryFn: ({ queryKey }) => getPostsByUserId(queryKey[1] as string),
  });

  return (
    <S.MainFeedContainer>
      <TweetComposer userAvatar={currentUser.avatar} />
      <S.Section>
        <S.FeedTitle>Your Feed</S.FeedTitle>
        {tweets && <Feed tweets={tweets} />}
      </S.Section>
    </S.MainFeedContainer>
  );
};

export default UserFeedContent;
