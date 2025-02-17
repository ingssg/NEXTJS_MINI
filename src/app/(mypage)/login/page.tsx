"use client";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import instance from "@/api/axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Values {
  email: string;
  password: string;
}


const Login = () => {
  const Swal = require("sweetalert2");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const onSubmit = (values: Values) => {
    instance.post("/api/login", values)
      .then((res) => {
        router.push("/articles");
      })
      .catch(() => {
        Swal.fire({
          title: 'Error!',
          text: '유저 정보가 일치하지 않습니다.',
          icon: 'error',
          confirmButtonText: '확인',
          background: '#27272a',
          color: '#ffffff'
        });
      });
  }
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(/^[^@\s]+@[^@\s]+\.[^@\s]+$/, "올바른 이메일 형식이 아닙니다.")
      .required("이메일을 입력해주세요."),
    password: Yup.string()
    .min(8, "비밀번호는 8자 이상이어야 합니다.")
    .max(20, "비밀번호는 20자 이하여야 합니다.")
    .required("비밀번호를 입력해주세요."),
  });
  return (
    <div className="flex flex-col gap-4 mx-auto p-4 items-center">
      <div className="flex flex-col justify-center items-center gap-4">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={() => {
            onSubmit({email: email, password: password});
          }}
        >
            <Form>
              <div className="flex flex-col gap-4 w-[20vw] min-w-[200px]">
                <div className="flex flex-col gap-1">
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="EMAIL"
                    className="text-black rounded-[5px] font-[sans-serif] pl-2"
                    onKeyUp={handleEmailChange}
                  />
                  <ErrorMessage name="email" component="span" className="text-red-500"/>
                </div>
                <div className="flex flex-col gap-1">
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    placeholder="PASSWORD"
                    className="text-black rounded-[5px] font-[sans-serif] pl-2"
                    onKeyUp={handlePasswordChange}
                  />
                  <ErrorMessage name="password" component="span" className="text-red-500"/>
                </div>
                <button
                  className="border-[1px] border-[#606067] hover:bg-[#38383c]  bg-[#27272a]  p-2 rounded-lg mt-2 font-extrabold text-lg"
                  type="submit"
                >
                  로그인
                </button>
              </div>
            </Form>
        </Formik>
      </div>

      <Link
        className="ml-auto text-[#7c98cd] hover:text-[#93b1e7]"
        href="/signup"
      >
        새 계정 만들기
      </Link>
    </div>
  );
};

export default Login;
