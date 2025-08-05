import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../types/user";

type UserState = User;

const initialState: UserState = {
  id: "",
  username: "",
  email: "",
  bio: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (_: unknown, action: PayloadAction<UserState>) => {
      return action.payload;
    },
    clearUser: () => initialState,
  },
});

export const { setUser, clearUser } = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
