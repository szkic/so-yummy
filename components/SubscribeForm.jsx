"use client";

import { Button } from "@material-tailwind/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const classes = {
  input: [
    "block h-[38px] w-[204px] rounded-lg border border-primary-text-color border-opacity-50 bg-secondary-light-color stroke-1 p-3.5 pl-[42px] text-[10px] text-primary-text-color outline-none placeholder:text-[10px] placeholder:tracking-[-0.2px] placeholder:text-primary-text-color focus:border-primary-text-color tablet:h-[50px] tablet:w-[259px] tablet:text-sm tablet:placeholder:text-sm desktop:h-[60px] desktop:w-full desktop:pl-[51px] desktop:text-lg desktop:placeholder:text-lg",
  ],
};

const initialValues = {
  email: "",
};

const registerSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
});

const SubscribeForm = () => {
  return (
    <div className="m-auto mb-11 flex flex-col gap-2 tablet:mb-10 tablet:basis-full tablet:flex-row tablet:justify-center desktop:m-0 desktop:max-w-[339px] desktop:basis-2/5 desktop:flex-col desktop:gap-0">
      <div className="hidden text-primary-text-color desktop:mb-7 desktop:block">
        <h4 className="mb-3.5 text-lg font-bold">
          Subscribe to our Newsletter
        </h4>
        <p className="text-sm">
          Subscribe up to our newsletter. Be in touch with latest news and
          special offers, etc.
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => {
          const { errors, touched, isValid, dirty } = formik;

          return (
            <Form className="flex flex-col gap-2 tablet:flex-row tablet:gap-3 desktop:flex-col desktop:gap-4">
              <div className="relative opacity-80 hover:opacity-100">
                <label htmlFor="email"></label>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 25"
                    fill="none"
                    className="h-[12px] w-[16px] tablet:h-4 tablet:w-5 desktop:h-5 desktop:w-6"
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
                  placeholder="Enter your email address"
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="absolute text-xs text-input-error"
                />
              </div>
              <Button
                type="submit"
                className=" h-[38px] w-full rounded-md bg-primary-color text-sm text-primary-text-color transition-colors
                  duration-300 ease-in-out hover:bg-[#6c8828] tablet:h-[50px] tablet:w-[187px] tablet:text-base desktop:h-[60px] desktop:w-full"
              >
                Subscribe
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SubscribeForm;
