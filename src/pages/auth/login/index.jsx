import React, { useState } from "react";
import { loginValues } from "../../../utils/initialValues";
import { validateLogin } from "../../../utils/validate";
import InputField from "../../../components/globals/InputField";
import SubmitButton from "../../../components/globals/SubmitButton";
import CustomFormik from "../../../utils/CustomFormik";

const LoginPage = ({ show, setShow }) => {
  console.log({ show });

  const initialValues = loginValues();
  const validationSchema = validateLogin();

  const handleSubmit = async (values) => {
    setTimeout(() => {
      console.log(values);
    }, 3000);

    // const response = await axios.post(
    //   `${import.meta.env.VITE_API_URL}/user-auth/verify-email`,
    //   values
    // );
    // console.log(response);
    // try {
    //   if (response.status === 200) {
    //     const data = response.data;
    //     successNotification(data.message);
    //   } else {
    //     errorNotification(response?.data?.error);
    //   }
    // } catch (error) {
    //   errorNotification(error?.response?.data?.error);
    // }
  };

  return (
    <div className="w-screen h-[65vh]">
      <div className="max-w-[500px] h-full m-auto px-5 md:px-0 flex flex-col justify-center items-center">
        <h2 className="text-lg md:text-xl mb-10">Welcome, Admin</h2>
        <CustomFormik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <div className="font-bold text-[14.5px] md:text-[18px] grid grid-cols-1 gap-8 md:grid-cols-1 w-[100%] mb-2">
            <InputField name="email" placeholder="Enter your email" />
            <InputField
              name="password"
              placeholder="Account password"
              type="password"
            />
          </div>
          <SubmitButton title="Login" className="mt-6 w-[100%]" />
        </CustomFormik>
      </div>
    </div>
  );
};

export default LoginPage;
