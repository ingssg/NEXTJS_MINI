"use client";

import * as Yup from "yup";
import { Formik, Field, Form, FormikHelpers } from "formik";

interface Values {
  email: string;
  password: string;
}

const LoginForm = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("올바른 이메일 형식이 아닙니다.")
            .required("이메일을 입력해주세요."),
          password: Yup.string().required("비밀번호를 입력해주세요."),
        })}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          <div className="flex flex-col gap-4 w-[20vw]">
            <Field
              id="email"
              name="email"
              type="email"
              placeholder=" EMAIL"
              className="text-black"
            />
            <Field
              id="password"
              name="password"
              type="password"
              placeholder=" PASSWORD"
              className="text-black"
            />
            <button className="border-2 p-2" type="submit">
              로그인
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
