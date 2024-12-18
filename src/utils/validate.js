import * as yup from "yup";

export const validateLogin = () => {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email")
      .required("Account email is missing"),
    password: yup
      .string()
      .trim()
      .min(8, "Password is too short")
      .required("Account password is missing"),
  });
  return validationSchema;
};

export const validateSignup = () => {
  const phoneRegExp = /^[\d|\+|\(]+[\)|\d|\s|-]*[\d]$/;
  const validationSchema = yup.object({
    email: yup.string().email("Invalid email").required("Email is missing"),
  });
  return validationSchema;
};

export const validateUpdateProfile = () => {
  const phoneRegExp = /^[\d|\+|\(]+[\)|\d|\s|-]*[\d]$/;
  const validationSchema = yup.object({
    email: yup.string().email("Invalid email").required("Email is missing"),
    username: yup.string().trim().required("Name is missing"),
    password: yup
      .string()
      .required("Account Password is required")
      .min(8, "Password is too short"),
  });
  return validationSchema;
};

export const validateUpdatePassword = () => {
  const validationSchema = yup.object({
    oldPassword: yup.string().required("Old Password is required"),
    newPassword: yup
      .string()
      .required("Account Password is required")
      .min(8, "Password is too short"),
    confirmNewPassword: yup
      .string()
      .required("Confirm Account Password")
      .oneOf([yup.ref("newPassword"), null], "Passwords must match"),
  });
  return validationSchema;
};

export const validateForgotPassword = () => {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email")
      .required("Account email is missing"),
  });
  return validationSchema;
};

export const validateResetPassword = () => {
  const validationSchema = yup.object({
    password: yup
      .string()
      .trim()
      .min(8, "Password is too short")
      .required("Password is missing"),
    confirmPassword: yup
      .string()
      .required("Confirm Account Password")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
  return validationSchema;
};

export const validateOtp = () => {
  const validationSchema = yup.object().shape({
    otp: yup
      .string()
      .trim()
      .min(4, "OTP is incomplete")
      .max(5, "OTP digits cannot be more than 4 characters long")
      .required("Please provide the OTP"),
  });
  return validationSchema;
};

export const validateRequestService = () => {
  const validationSchema = yup.object({
    walletValue: yup
      .string()
      .trim()
      .required("What is the estimated wallet value?"),
    social: yup
      .string()
      .trim()
      .required("Select a social network we can reach you through"),
    socialHandle: yup
      .string()
      .trim()
      .required("Provide your social media username"),
    walletAddress: yup.string().trim().required("Wallet address is missing"),
  });
  return validationSchema;
};
