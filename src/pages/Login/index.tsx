import { useEffect, useState } from "react";
import { loginUser } from "../../api/user";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Main from "../../components/Main";
import Section from "../../components/Section";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [apiError, setApiError] = useState<string | null>(null);
  const { redirectIfAuthenticated } = useAuth();

  useEffect(() => {
    redirectIfAuthenticated();
  }, [redirectIfAuthenticated]);

  const navigate = useNavigate();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const usernameOrEmail = formData.get("usernameOrEmail") as string;
    const password = formData.get("password") as string;

    try {
      const response = await loginUser({ usernameOrEmail, password });
      localStorage.setItem("authToken", response.token);
      navigate("/home");
    } catch (err: any) {
      setApiError(err.message || "Error logging in. Please try again.");
    }
  };

  return (
    <Main>
      <Section aria-label="Login page">
        <h1>Tuiter</h1>
        <form aria-label="Login form" autoComplete="on" onSubmit={onSubmit}>
          <Input
            type="text"
            id="usernameOrEmail"
            name="usernameOrEmail"
            autoComplete="usernameOrEmail"
            required
            label="Username or Email"
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
          {apiError && <ErrorMessage>{apiError}</ErrorMessage>}
        </form>
        <nav aria-label="Additional actions">
          <a href="/create-account">Create account</a>
        </nav>
      </Section>
    </Main>
  );
};

export default Login;
