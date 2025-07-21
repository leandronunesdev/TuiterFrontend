import Button from "../../components/Button";
import Input from "../../components/Input";
import Main from "../../components/Main";
import Section from "../../components/Section";

const CreateAccount = () => {
  return (
    <Main>
      <Section aria-label="Login page">
        <h1>Tuiter</h1>
        <form aria-label="Login form" autoComplete="on">
          <Input
            type="text"
            id="username"
            name="username"
            autoComplete="username"
            required
            label="Username"
          />
          <Input
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            required
            label="Password"
          />
          <Button type="submit">Enter</Button>
        </form>
        <nav aria-label="Additional actions">
          <a href="/create-account">Create account</a>
        </nav>
      </Section>
    </Main>
  );
};

export default CreateAccount;
