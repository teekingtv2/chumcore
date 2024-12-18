import React, { useState } from "react";
import CustomFormik from "../../utils/CustomFormik";
import { signUpValues } from "../../utils/initialValues";
import { validateSignup } from "../../utils/validate";
import InputField from "../globals/InputField";
import SubmitButton from "../globals/SubmitButton";
import { errorNotification, successNotification } from "../../utils/helpers";
import axios from "axios";

const Signup = ({ show, setShow }) => {
  console.log({ show });

  const initialValues = signUpValues();
  const validationSchema = validateSignup();

  const handleSubmit = async (values) => {
    console.log(values);
    console.log({ VITE_API_URL: import.meta.env.VITE_API_URL });

    // try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/user-profile/register`,
      values
    );
    console.log(response);
    if (response.status === 200) {
      const data = response.data;
      successNotification(data.message);
      setShow(false); //
    } else {
      errorNotification(response?.data?.error);
    }
    // } catch (error) {
    //   errorNotification(error?.response?.data?.error);
    // }
  };

  return (
    <div
      className={
        show === true
          ? "fixed z-[150] left-0 top-0 w-full h-screen bg-black/80 flex justify-center items-center"
          : "hidden"
      }
    >
      <div
        className={
          show === true
            ? "w-[90%] md:w-[45%] bg-white h-max py-12 md:py-16 px-8 md:px-16"
            : ""
        }
      >
        <div className="flex justify-between items-center mb-10 text-[#000000a9]">
          <h2 className="text-lg md:text-xl">
            Be Part of the Chumcore Community!
          </h2>
          <div
            onClick={() => setShow(false)}
            className="cursor-pointer rounded-full border-[2px] border-[#000] h-10 w-10 flex justify-center items-center text-2xl font-semibold"
          >
            x
          </div>
        </div>
        <CustomFormik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <div className="font-bold text-[14.5px] md:text-[18px] grid grid-cols-1 gap-8 md:grid-cols-1 w-[100%] mb-2">
            <InputField name="email" placeholder="Enter your email" />
          </div>
          <SubmitButton title="Sign Up" className="mt-6 w-[100%]" />
        </CustomFormik>
      </div>
    </div>
  );
};

export default Signup;
