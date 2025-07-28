import Main from "../../components/Main";
import UserProfileSidebar from "./components/UserProfileSidebar";
import RightSidebar from "./components/RightSidebar";
import UserFeedContent from "./components/UserFeedContent";

const Home = () => {
  return (
    <Main>
      <UserProfileSidebar />
      <UserFeedContent />
      <RightSidebar />
    </Main>
  );
};

export default Home;
