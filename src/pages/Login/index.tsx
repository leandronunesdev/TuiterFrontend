import { useEffect, useState } from "react";
import { loginUser } from "../../api/user";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Main from "../../components/Main";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import useAuth from "../../hooks/useAuth";
import { Twitter, Mail, Lock } from "lucide-react";
import * as S from "./styles";

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
    <Main alignItems="center">
      <S.LoginFormContainer>
        <S.IconContainer>
          <Twitter size={32} />
        </S.IconContainer>
        <h1>Welcome back</h1>
        <S.Paragraph>Sign in to your SocialHub account</S.Paragraph>
        <S.Form aria-label="Login S.Form" autoComplete="on" onSubmit={onSubmit}>
          <Input
            type="text"
            id="usernameOrEmail"
            name="usernameOrEmail"
            autoComplete="usernameOrEmail"
            required
            label="Email or Username"
            placeholder="Enter your email or username"
            icon={<Mail size={20} />}
          />
          <Input
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            required
            label="Password"
            placeholder="Enter your password"
            icon={<Lock size={20} />}
          />
          <Button type="submit">Sign In</Button>
          {apiError && <ErrorMessage>{apiError}</ErrorMessage>}
        </S.Form>
        <S.Nav aria-label="Additional actions">
          <span>
            Don't have an account? <a href="/create-account">Create account</a>
          </span>
        </S.Nav>
      </S.LoginFormContainer>
    </Main>
  );
};

export default Login;
