const Home = () => {
  return (
    <main>
      <section aria-label="Login page">
        <h1>Tuiter</h1>
        <form aria-label="Login form" autoComplete="on">
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="username"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              required
            />
          </div>
          <button type="submit">Enter</button>
        </form>
        <nav aria-label="Additional actions">
          <a href="/criar-conta">Create account</a>
        </nav>
      </section>
    </main>
  );
};

export default Home;
