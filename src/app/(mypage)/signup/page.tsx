"use client";

import React from "react";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

type Props = {};

interface Values {
  email: string;
  password: string;
  passwordConfirm: string;
}

const SignUp = (props: Props) => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "올바른 이메일 형식이 아닙니다.")
      .required("이메일을 입력해주세요."),
    password: Yup.string()
      .min(8, "비밀번호는 8자 이상이어야 합니다.")
      .max(20, "비밀번호는 20자 이하여야 합니다.")
      .required("비밀번호를 입력해주세요."),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), undefined], '비밀번호와 일치하지 않습니다.')
  });
  return (
    <div className="flex flex-col gap-4 mx-auto p-4 items-center">
      <div className="flex flex-col justify-center items-center gap-4">
        <Formik
          initialValues={{ email: "", password: "", passwordConfirm: "" }}
          validationSchema={validationSchema}
          onSubmit={(values: Values) => {
            alert("submitted!");
          }}
        >
          <Form>
            <div className="flex flex-col gap-4 w-[20vw] min-w-[200px]">
              <div className="flex flex-col gap-1">
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder=" EMAIL"
                  className="text-black rounded-[5px] font-[sans-serif] pl-1"
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="text-red-500"
                />
              </div>
              <div className="flex flex-col gap-1">
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder=" PASSWORD"
                  className="text-black rounded-[5px] font-[sans-serif] pl-1"
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className="text-red-500"
                />
              </div>
              <div className="flex flex-col gap-1">
                <Field
                  id="
                passwordConfirm"
                  name="passwordConfirm"
                  type="password"
                  placeholder=" PW CONFIRM"
                  className="text-black rounded-[5px] font-[sans-serif] pl-1"
                />
                <ErrorMessage
                  name="passwordConfirm"
                  component="span"
                  className="text-red-500"
                />
              </div>
              <button
                className="border-[1px] border-[#606067] hover:bg-[#38383c]  bg-[#27272a] p-2 rounded-lg mt-2 font-extrabold text-lg"
                type="submit"
              >
                회원가입
              </button>
            </div>
          </Form>
        </Formik>
      </div>
      <Link
        className="ml-auto text-[#7c98cd] hover:text-[#93b1e7]"
        href="/login"
      >
        취소
      </Link>
    </div>
  );
};

export default SignUp;
