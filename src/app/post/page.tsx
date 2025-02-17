"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/navigation";
import instance from "@/api/axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { postContentState, isAutoSaveState, autoSavePostContentState } from "@/store/article";

type Props = {};

interface Values {
  title: string;
  content: string;
}

const Post = (props: Props) => {
  const [postContent, setPostContent] = useRecoilState(postContentState);
  const [, setIsAutoSave] = useRecoilState(isAutoSaveState);
  const autoSavePostContent = useRecoilValue(autoSavePostContentState);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPostContent((prev) => ({ ...prev, [name]: value }));
  };

  const style =
    "border-[1px] border-[#606067] rounded-[5px] bg-[#27272a] h-[4vh] font-bold text-[1rem] sm:text-[1.5rem] p-2 font-[sans-serif]";
  const router = useRouter();

  const Swal = require("sweetalert2");

  const handleSubmit = async (data: Values) => {
    try {
      await instance.post("/api/board", data);
      setPostContent({ title: "", content: "" });
      router.push("/articles");
    } catch (error) {
      console.error("게시글 추가 중 에러 발생:", error);
    }
  };

  useEffect(() => {
    setIsAutoSave(true);
    return () => setIsAutoSave(false);
  }, []); 

  return (
    <div className="flex flex-col">
      <Formik
        initialValues={{
          title: postContent.title,
          content: postContent.content,
        }}
        onSubmit={async (data: Values, { setSubmitting }) => {
          if (data.title.length === 0 || data.content.length === 0) {
            Swal.fire({
              title: "Error!",
              text: "제목과 내용을 입력해주세요.",
              icon: "error",
              confirmButtonText: "확인",
              background: '#27272a',
              color: '#ffffff'
            });
            return;
          } else if (data.title.length < 10) {
            Swal.fire({
              title: "Error!",
              text: "제목은 10자 이상이어야 합니다.",
              icon: "error",
              confirmButtonText: "확인",
              background: '#27272a',
              color: '#ffffff'
            });
            return;
          }
          await handleSubmit(data);
          setSubmitting(false);
        }}
      >
        <Form>
          <div className="w-screen flex justify-center">
            <div className="flex flex-col gap-4 min-w-[300px] mx-[10vw] w-full max-w-[800px]">
              <div className="flex flex-col gap-1">
                <Field
                  id="title"
                  name="title"
                  type="text"
                  placeholder="글 제목을 입력해주세요."
                  className={style}
                  onKeyUp={handleInputChange}
                />
                <Field
                  id="content"
                  name="content"
                  as="textarea"
                  type="text"
                  placeholder="내용을 입력해 주세요."
                  className="border-[1px] border-[#606067] rounded-[5px] bg-[#27272a] p-2 h-[40vh] text-[0.8rem] sm:text-[1rem] font-[sans-serif]"
                  onKeyUp={handleInputChange}
                />
              </div>
              <div className="flex gap-2 ml-auto">
                <button
                  className="border-[1px] border-[#606067] hover:bg-[#38383c]  bg-[#27272a] p-2 rounded-[5px]"
                  type="submit"
                >
                  게시하기
                </button>
                <Link
                  href="/articles"
                  className="border-[1px] border-[#606067] hover:bg-[#38383c]  bg-[#27272a] p-2 rounded-[5px]"
                >
                  취소
                </Link>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Post;
