import { useEffect } from "react";
import Main from "../../components/Main";
import Section from "../../components/Section";
import { meUser } from "../../api/user";

const Home = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await meUser();
        console.log(user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Main>
      <Section aria-label="Home page">
        <h1>Tuiter</h1>
        <p>Welcome to Tuiter!</p>
      </Section>
    </Main>
  );
};

export default Home;
