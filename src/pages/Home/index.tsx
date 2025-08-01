import Main from "../../components/Main";
import UserProfileSidebar from "./components/UserProfileSidebar";
import UserFeedContent from "./components/UserFeedContent";
import Header from "../../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <UserProfileSidebar />
        <UserFeedContent handleNewTweet={(content) => console.log(content)} />
      </Main>
    </>
  );
};

export default Home;
