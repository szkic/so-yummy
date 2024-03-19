"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signIn } from "next-auth/react";

const classes = {
  input: [
    "block w-full rounded-lg border border-primary-text-color border-opacity-50 bg-secondary-light-color stroke-1 p-4 pl-[50px] text-sm text-primary-text-color outline-none placeholder:text-sm placeholder:text-primary-text-color  focus:border-primary-text-color tablet:text-lg tablet:placeholder:text-lg",
  ],
};

const initialValues = {
  email: "",
  password: "",
};

const registerSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password should be of minimum 6 characters length")
    .test(
      "no-spaces",
      "Password cannot contain spaces",
      (value) => !/\s/.test(value),
    ),
});

const SigninForm = () => {
  return (
    <>
      <div className="z-10 px-7 pb-10 pt-8 tablet:px-[50px] tablet:py-11">
        <h2 className="pb-[18px] text-2xl font-semibold text-primary-text-color tablet:pb-8 desktop:pb-[50px] desktop:text-[28px]">
          Sign In
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={async (values) => {
            await signIn("credentials", {
              email: values.email,
              password: values.password,
              redirect: true,
              callbackUrl: "/",
            });
          }}
        >
          {(formik) => {
            const { errors, touched, isValid, dirty } = formik;

            return (
              <Form>
                <div className="flex flex-col gap-3 tablet:gap-6">
                  {/* Email */}
                  <div>
                    <div className="relative opacity-80 hover:opacity-100">
                      <label htmlFor="email"></label>
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 25"
                          fill="none"
                          className="h-[18px] w-[18px] tablet:h-6 tablet:w-6"
                        >
                          <g>
                            <path
                              d="M2 7.5L10.1649 13.2154C10.8261 13.6783 11.1567 13.9097 11.5163 13.9993C11.8339 14.0785 12.1661 14.0785 12.4837 13.9993C12.8433 13.9097 13.1739 13.6783 13.8351 13.2154L22 7.5M6.8 20.5H17.2C18.8802 20.5 19.7202 20.5 20.362 20.173C20.9265 19.8854 21.3854 19.4265 21.673 18.862C22 18.2202 22 17.3802 22 15.7V9.3C22 7.61984 22 6.77976 21.673 6.13803C21.3854 5.57354 20.9265 5.1146 20.362 4.82698C19.7202 4.5 18.8802 4.5 17.2 4.5H6.8C5.11984 4.5 4.27976 4.5 3.63803 4.82698C3.07354 5.1146 2.6146 5.57354 2.32698 6.13803C2 6.77976 2 7.61984 2 9.3V15.7C2 17.3802 2 18.2202 2.32698 18.862C2.6146 19.4265 3.07354 19.8854 3.63803 20.173C4.27976 20.5 5.11984 20.5 6.8 20.5Z"
                              stroke="#FAFAFA"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        className={`${classes.input} ${
                          errors.email && touched.email ? " border-red-500" : ""
                        }`}
                        placeholder="Email"
                      />
                    </div>
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="absolute text-xs text-input-error"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <div className="relative opacity-80 hover:opacity-100">
                      <label htmlFor="password"></label>
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 25"
                          fill="none"
                          className="h-[18px] w-[18px] tablet:h-6 tablet:w-6 "
                        >
                          <g>
                            <path
                              d="M17 11.5V8.5C17 5.73858 14.7614 3.5 12 3.5C9.23858 3.5 7 5.73858 7 8.5V11.5M7.8 21.5H16.2C17.8802 21.5 18.7202 21.5 19.362 21.173C19.9265 20.8854 20.3854 20.4265 20.673 19.862C21 19.2202 21 18.3802 21 16.7V16.3C21 14.6198 21 13.7798 20.673 13.138C20.3854 12.5735 19.9265 12.1146 19.362 11.827C18.7202 11.5 17.8802 11.5 16.2 11.5H7.8C6.11984 11.5 5.27976 11.5 4.63803 11.827C4.07354 12.1146 3.6146 12.5735 3.32698 13.138C3 13.7798 3 14.6198 3 16.3V16.7C3 18.3802 3 19.2202 3.32698 19.862C3.6146 20.4265 4.07354 20.8854 4.63803 21.173C5.27976 21.5 6.11984 21.5 7.8 21.5Z"
                              stroke="#FAFAFA"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                      <Field
                        type="password"
                        id="password"
                        name="password"
                        className={`${classes.input} ${
                          errors.password && touched.password
                            ? " border-red-500"
                            : ""
                        }`}
                        placeholder="Password"
                      />
                    </div>
                    <ErrorMessage
                      name="password"
                      component="span"
                      className="absolute text-xs text-input-error"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className={`mt-7 h-[45px] w-full rounded-lg bg-inactive-color text-sm  tablet:mt-[50px] tablet:h-[56px] tablet:text-lg ${
                    !(dirty && isValid)
                      ? "cursor-not-allowed "
                      : "bg-primary-color text-primary-text-color transition-colors duration-300 ease-in-out hover:bg-[#6c8828]"
                  }`}
                  disabled={!(dirty && isValid)}
                  aria-label="Sign up"
                >
                  Sign up
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default SigninForm;
