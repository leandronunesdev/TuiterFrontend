import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../api/user";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Main from "../../components/Main";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import useAuth from "../../hooks/useAuth";
import { Mail, Lock } from "lucide-react";
import * as S from "./styles";
import Logo from "../../components/Logo";
import FormContainer from "../../components/FormContainer";

const Login = () => {
  const [apiError, setApiError] = useState<string | null>(null);
  const { redirectIfAuthenticated } = useAuth();

  useEffect(() => {
    redirectIfAuthenticated();
  }, [redirectIfAuthenticated]);

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (response) => {
      localStorage.setItem("authToken", response.token);
      navigate("/home");
    },
    onError: (err: any) => {
      setApiError(err.message || "Error logging in. Please try again.");
    },
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const usernameOrEmail = formData.get("usernameOrEmail") as string;
    const password = formData.get("password") as string;

    setApiError(null);
    mutation.mutate({ usernameOrEmail, password });
  };

  return (
    <Main alignItems="center">
      <FormContainer>
        <Logo />
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
            icon={<Mail size={16} />}
            disabled={mutation.isPending}
          />
          <Input
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            required
            label="Password"
            placeholder="Enter your password"
            icon={<Lock size={16} />}
            disabled={mutation.isPending}
          />
          <Button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? "Signing In..." : "Sign In"}
          </Button>
          {(apiError || mutation.isError) && (
            <ErrorMessage>{apiError || mutation.error?.message}</ErrorMessage>
          )}
        </S.Form>
        <S.Nav aria-label="Additional actions">
          <span>
            Don't have an account? <a href="/create-account">Create account</a>
          </span>
        </S.Nav>
      </FormContainer>
    </Main>
  );
};

export default Login;
