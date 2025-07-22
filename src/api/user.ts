export type RegisterPayload = {
  username: string;
  email: string;
  password: string;
};

type User = {
  id: string;
  username: string;
  email: string;
};

export type LoginPayload = {
  usernameOrEmail: string;
  password: string;
};

type LoginResponse = {
  token: string;
  user: User;
};

export async function registerUser(payload: RegisterPayload): Promise<User> {
  const response = await fetch(
    "https://tuiterbackend.onrender.com/api/User/Register",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    const errorMsg = await response.text();
    throw new Error(errorMsg);
  }

  return response.json();
}

export async function loginUser(payload: LoginPayload): Promise<LoginResponse> {
  const response = await fetch(
    "https://tuiterbackend.onrender.com/api/User/Login",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    const errorMsg = await response.text();
    throw new Error(errorMsg);
  }

  return response.json();
}
