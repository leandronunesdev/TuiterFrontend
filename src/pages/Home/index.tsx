import Main from "../../components/Main";
import UserProfileSidebar from "./components/UserProfileSidebar";
import RightSidebar from "./components/RightSidebar";
import UserFeedContent from "./components/UserFeedContent";
import Header from "../../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <UserProfileSidebar />
        <UserFeedContent />
        <RightSidebar />
      </Main>
    </>
  );
};

export default Home;
