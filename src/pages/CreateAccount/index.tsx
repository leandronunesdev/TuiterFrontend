import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Main from "../../components/Main";
import Section from "../../components/Section";
import { registerUser } from "../../api/user";
import { schema } from "./schema";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";

type FormData = {
  username: string;
  email: string;
  password: string;
};

const CreateAccount = () => {
  const [apiError, setApiError] = useState<string | null>(null);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setApiError(null);
    try {
      await registerUser(data);
      navigate("/login");
      reset();
    } catch (err: any) {
      setApiError(err.message || "Could not connect to server.");
    }
  };

  return (
    <Main>
      <Section aria-label="Create account page">
        <h1>Tuiter</h1>
        <h2>Create Account</h2>
        <form
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
          />
          <Input
            type="email"
            id="email"
            label="Email"
            autoComplete="email"
            required
            {...register("email")}
            error={errors.email?.message}
          />
          <Input
            type="password"
            id="password"
            label="Password"
            autoComplete="new-password"
            required
            {...register("password")}
            error={errors.password?.message}
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Create"}
          </Button>
          {apiError && <ErrorMessage>{apiError}</ErrorMessage>}
        </form>
        <nav aria-label="Additional actions">
          <a href="/login">Already have an account? Log in</a>
        </nav>
      </Section>
    </Main>
  );
};

export default CreateAccount;
