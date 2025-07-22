import * as yup from "yup";

export const schema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(4, "Min 4 characters")
    .max(15, "Max 15 characters")
    .matches(/^[A-Za-z0-9_]+$/, "Only letters, numbers and _"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Min 8 characters"),
});
