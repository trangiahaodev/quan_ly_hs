"use client";

import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { useFormik } from "formik";
import { basicSchema } from "./schemas/schemas";
import { useRouter } from "next/navigation";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const onSubmit = async (values, actions) => {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        username,
        password,
      });
      console.log(response.data);
      setTimeout(() => {
        actions.resetForm();
      }, 1000);
      // setTimeout(() => {
      //   router.push("/quiz");
      // }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  const { values, errors, touched, handleBlur, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
            Đăng nhập để thực hiện bài thi
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6"
              >
                Tài khoản
              </label>
              <div className="mt-2">
                <input
                  value={values.username}
                  onChange={(e) => setUsername(e.target.value)}
                  onBlur={handleBlur}
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  required
                  className="mb-2 block w-full rounded-md border-0 py-1.5 pl-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                />
                {errors.username && touched.username ? (
                  <p className="text-bold text-left text-red-500">
                    {errors.username}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6"
                >
                  Mật khẩu
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={values.password}
                  onChange={(e) => setUsername(e.target.value)}
                  onBlur={handleBlur}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mb-2 block w-full rounded-md border-0 py-1.5 pl-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                />
                {errors.password && touched.password ? (
                  <p className="text-bold text-left text-red-500">
                    {errors.password}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div>
              <button
                className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="submit"
                disabled={isSubmitting}
              >
                Đăng nhập
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
