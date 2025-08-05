import { useQuery } from "@tanstack/react-query";
import { MapPin, Calendar, ExternalLink } from "lucide-react";
import * as S from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { meUser } from "api/user";
import type { User } from "types/user";
import { getAvatarUrl } from "utils/getAvatarUrl";
import { setUser } from "features/userSlice";
import type { RootState, AppDispatch } from "store";

const mockedData = {
  name: "John Doe",
  bio: "This is a user bio. Passionate about coding and tech.",
  location: "San Francisco, CA",
  joinedDate: "Jan 2022",
  website: "https://socialhub.com/johndoe",
  posts: 42,
  following: 123,
  followers: 456,
};

const UserProfileSidebar = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  const {
    data: userData,
    isLoading,
    isError,
  } = useQuery<User>({
    queryKey: ["meUser"],
    queryFn: meUser,
  });

  useEffect(() => {
    if (userData) {
      dispatch(setUser(userData));
    }
  }, [userData, dispatch]);

  if (isLoading) return null;
  if (isError || !user) return null;

  const avatarUrl = getAvatarUrl(user.username || user.id);

  return (
    <S.ProfileContainer>
      <S.CenterColumn>
        <S.Avatar src={avatarUrl} alt={mockedData.name} />
        <S.Name>{mockedData.name}</S.Name>
        <S.Username>@{user.username}</S.Username>
        <S.Bio>{mockedData.bio}</S.Bio>
        <S.InfoColumn>
          <S.InfoRow>
            <MapPin size={16} />
            <span>{mockedData.location}</span>
          </S.InfoRow>
          <S.InfoRow>
            <Calendar size={16} />
            <span>Joined {mockedData.joinedDate}</span>
          </S.InfoRow>
          <S.InfoRow>
            <ExternalLink size={16} />
            <S.WebsiteLink
              href={mockedData.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {mockedData.website}
            </S.WebsiteLink>
          </S.InfoRow>
        </S.InfoColumn>
        <S.StatsRow>
          <S.Stat>
            <S.StatValue>{mockedData.posts}</S.StatValue>
            <S.StatLabel>Posts</S.StatLabel>
          </S.Stat>
          <S.Stat>
            <S.StatValue>{mockedData.following}</S.StatValue>
            <S.StatLabel>Following</S.StatLabel>
          </S.Stat>
          <S.Stat>
            <S.StatValue>{mockedData.followers}</S.StatValue>
            <S.StatLabel>Followers</S.StatLabel>
          </S.Stat>
        </S.StatsRow>
      </S.CenterColumn>
    </S.ProfileContainer>
  );
};

export default UserProfileSidebar;
