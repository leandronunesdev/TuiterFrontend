export type RegisterPayload = {
  username: string;
  email: string;
  password: string;
};

export async function registerUser(
  payload: RegisterPayload
): Promise<{ id: string; username: string; email: string }> {
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
