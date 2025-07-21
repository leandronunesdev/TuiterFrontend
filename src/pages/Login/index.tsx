import * as S from "./styles";

const Login = () => {
  return (
    <S.Main>
      <S.Section aria-label="Login page">
        <h1>Tuiter</h1>
        <form aria-label="Login form" autoComplete="on">
          <S.InputContainer>
            <label htmlFor="username">Username</label>
            <S.Input
              type="text"
              id="username"
              name="username"
              autoComplete="username"
              required
            />
          </S.InputContainer>
          <S.InputContainer>
            <label htmlFor="password">Password</label>
            <S.Input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              required
            />
          </S.InputContainer>
          <S.Button type="submit">Enter</S.Button>
        </form>
        <nav aria-label="Additional actions">
          <a href="/create-account">Create account</a>
        </nav>
      </S.Section>
    </S.Main>
  );
};

export default Login;
