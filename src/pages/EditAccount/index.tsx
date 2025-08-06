import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Main from "../../components/Main";
import { registerUser } from "../../api/user";
import { schema } from "./schema";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import useAuth from "../../hooks/useAuth";
import Logo from "../../components/Logo";
import FormContainer from "../../components/FormContainer";
import * as S from "./styles";
import { AtSign, Mail, Lock } from "lucide-react";

type FormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const EditAccount = () => {
  const [apiError, setApiError] = useState<string | null>(null);
  const { redirectIfAuthenticated } = useAuth();

  useEffect(() => {
    redirectIfAuthenticated();
  }, [redirectIfAuthenticated]);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const mutation = useMutation({
    mutationFn: async (data: Omit<FormData, "confirmPassword">) =>
      registerUser(data),
    onSuccess: () => {
      navigate("/login");
      reset();
    },
    onError: (err: any) => {
      setApiError(err.response?.data || "Could not connect to server.");
    },
  });

  const onSubmit = (data: FormData) => {
    setApiError(null);
    const { confirmPassword, ...submitData } = data;
    mutation.mutate(submitData);
  };

  return (
    <Main alignItems="center">
      <FormContainer aria-label="Create account page">
        <Logo />
        <h1>Join SocialHub</h1>
        <S.Paragraph>Create your account and start connecting</S.Paragraph>
        <S.Form
          aria-label="Create account form"
          autoComplete="on"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            type="text"
            id="username"
            label="Username"
            autoComplete="username"
            required
            {...register("username")}
            error={errors.username?.message}
            icon={<AtSign size={16} />}
            placeholder="username"
            disabled={mutation.isPending}
          />
          <Input
            type="email"
            id="email"
            label="Email"
            autoComplete="email"
            required
            {...register("email")}
            error={errors.email?.message}
            icon={<Mail size={16} />}
            placeholder="Enter your email"
            disabled={mutation.isPending}
          />
          <Input
            type="password"
            id="password"
            label="Password"
            autoComplete="new-password"
            required
            {...register("password")}
            error={errors.password?.message}
            icon={<Lock size={16} />}
            placeholder="Create a password"
            disabled={mutation.isPending}
          />
          <Input
            type="password"
            id="confirmPassword"
            label="Confirm Password"
            autoComplete="new-password"
            required
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
            icon={<Lock size={16} />}
            placeholder="Confirm your password"
            disabled={mutation.isPending}
          />
          <Button type="submit" disabled={mutation.isPending || isSubmitting}>
            {mutation.isPending ? "Creating..." : "Create Account"}
          </Button>
          {(apiError || mutation.isError) && (
            <ErrorMessage>
              {apiError || (mutation.error as any)?.message}
            </ErrorMessage>
          )}
        </S.Form>
        <S.Nav aria-label="Additional actions">
          <span>
            Already have an account? <a href="/login">Sign in</a>
          </span>
        </S.Nav>
      </FormContainer>
    </Main>
  );
};

export default EditAccount;
