import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Base_Api } from "../../config/axios";

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  // const [loading, setLoading] = useState();

console.log(data, "data")

const landlogin = async (Value) => {
  // setLoading(true);
  try {
    if (Value) {
      const formData = new FormData();
      formData.append("first_name", Value.fname);
      formData.append("last_name", Value.lname);
      formData.append("username", Value.username);
      formData.append("email", Value.email);
      formData.append("password", Value.password);

      const response = await axios.post(`${Base_Api}register`, formData);
      console.log(response, "responseSignup");
    

      if (response.status) {
        // setLoading(false);
        navigate("/login");
        // setLoader(false);
      } else {
        // setLoading(false);
      }
    }
  } catch (error) {
    // setLoader(false);
    console.log(error, "errorSignup");
    // setLoading(false);
  }
};

  const userSchema = Yup.object().shape({
    fname: Yup.string().required("please fill your first name"),
    lname: Yup.string().required("please fill your last name"),
    username: Yup.string().required("please fill your user name"),
    email: Yup.string().required("please fill your email"),
    password: Yup.string().required("please fill your password"),
  });
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      username: "",
      email: "",
      password: "",
    },
    validationSchema: userSchema,
      onSubmit: (values, action) => {
        console.log(values);
        landlogin(values)
        setData(values);
        action.resetForm();
        // navigate("/login");
      },
    });
 
  return (
    <>
    <style>{`
      body {
        background-color:#B2FFDA;
      }
    `}
    </style>
    <div className="w-full flex items-center justify-center">
        <form className="max-w-sm mx-auto mt-2" onSubmit={handleSubmit}>
          <h1 className="text-4xl font-bold text-blue-800 text-center py-4">Sign up</h1>

        <label
          htmlFor="fname"
          className="block mt-2 text-sm font-medium text-blue-800 dark:text-white"
        >
          First Name
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </div>
          <input
            type="text"
            name="fname"
            id="fname"
            className="bg-gray-50 border border-gray-300 text-blue-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="First Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.fname}
          />
        </div>
        <span className="text-sm text-red-600">
          {errors ? errors.fname : null}
        </span>
        <label
          htmlFor="lname"
          className="block mt-2 text-sm font-medium text-blue-800 dark:text-white"
        >
          Last Name
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </div>
          <input
            type="text"
            name="lname"
            id="lname"
            className="bg-gray-50 border border-gray-300 text-blue-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Last Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lname}
          />
        </div>
        <span className="text-sm text-red-600">
          {errors ? errors.lname : null}
        </span>

        <label
          htmlFor="username"
          className="block mt-2 text-sm font-medium text-blue-800 dark:text-white"
        >
          User Name
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </div>
          <input
            type="text"
            name="username"
            id="username"
            className="bg-gray-50 border border-gray-300 text-blue-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="User Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
          />
        </div>
        <span className="text-sm text-red-600">
          {errors ? errors.username : null}
        </span>

        <label
          htmlFor="email"
          className="block mt-2 text-sm font-medium text-blue-800 dark:text-white"
        >
          Your Email
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </div>
          <input
            type="text"
            name="email"
            id="email-address-icon"
            className="bg-gray-50 border border-gray-300 text-blue-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
        </div>
        <span className="text-sm text-red-600">
          {errors ? errors.email : null}
        </span>

        <label
          htmlFor="password"
          className="block mt-2 text-sm font-medium text-blue-800 dark:text-white"
        >
          Password
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-blue-800 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 2C6.48 2 2 6.48 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6c0-5.52-4.48-10-10-10zm0 2a4 4 0 0 1 4 4v2h-8V8a4 4 0 0 1 4-4zm-1 12h2v2h-2v-2zm0-6h2v5h-2v-5z"
              />
            </svg>
          </span>
          <input
            type="password"
            id="website-admin"
            name="password"
            className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-blue-800 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
        </div>
        <span className="text-sm text-red-600">
          {errors ? errors.password : null}
        </span>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 mt-5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sign up
        </button>
        <p
          onClick={() => navigate("/login")}
          className="text-sm py-1 cursor-pointer underline text-blue-700 font-medium"
        >
          Sign in Your Account?
        </p>
      </form>
      </div>
      
    </>
  );
};

export default Signup;
