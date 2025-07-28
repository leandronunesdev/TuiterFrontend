import { useEffect, useState } from "react";
import { meUser } from "../../../../api/user";
import * as S from "./styles";
import type { User } from "../../../../types/user";

const UserProfileSidebar = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await meUser();
        setUser(response);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const avatarUrl = `https://randomuser.me/api/portraits/men/${Math.floor(
    Math.random() * 100
  )}.jpg`;

  return (
    <S.Aside>
      <S.Avatar src={avatarUrl} alt="User Avatar" />
      <h2>{user?.username}</h2>
      <p>{user?.email}</p>
      <p>{user?.bio}</p>
    </S.Aside>
  );
};

export default UserProfileSidebar;
