'use client';

import React, {useState} from 'react';
import { Formik, Form, Field } from 'formik'
import instance from '@/api/axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import { useFetchData } from '@/api/hooks';

type Props = {
  params: {
    articleID: string;
  }
}

type Values = {
  title: string;
  content: string;
}

const EditArticle = (props: Props) => {
  const router = useRouter();
  const { data, loading, error } = useFetchData<Values>(`/api/board/${props.params.articleID}`);
  if (loading) {
    return <span className="loader"></span>;
  }

  if (error || !data) {
    router.push("/error");
    return;
  }

  const style =
    "border-[1px] border-[#606067] rounded-[5px] bg-[#27272a] h-[4vh] font-bold text-[14px] sm:text-[18px] p-2 font-[sans-serif]";

  const Swal = require("sweetalert2");

  const handleSubmit = async (data: Values) => {
    try {
      await instance.put(`/api/board/${props.params.articleID}`, data);
      router.push("/articles");
    } catch (error) {
      console.error("게시글 추가 중 에러 발생:", error);
    }
  };

  return (
    <div className="flex flex-col">
      <Formik
        initialValues={{ title: data.title, content: data.content}}
        onSubmit={async (data: Values, { setSubmitting }) => {
          if(data.title.length === 0 || data.content.length === 0) {
            Swal.fire({
              title: 'Error!',
              text: '제목과 내용을 입력해주세요.',
              icon: 'error',
              confirmButtonText: '확인',
              background: '#27272a',
              color: '#ffffff'
            })
            return;
          }

          else if(data.title.length < 10) {
            Swal.fire({
              title: 'Error!',
              text: '제목은 10자 이상이어야 합니다.',
              icon: 'error',
              confirmButtonText: '확인',
              background: '#27272a',
              color: '#ffffff'
            })
            return;
          }
          await handleSubmit(data);
          setSubmitting(false);
        }}
        validateOnChange={false}
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
                />
                <Field
                  id="content"
                  name="content"
                  as="textarea"
                  type="text"
                  placeholder="내용을 입력해 주세요."
                  className="border-[1px] border-[#606067] rounded-[5px] bg-[#27272a] p-2 h-[40vh] text-[14px] sm:text-[18px] font-[sans-serif]"
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
}

export default EditArticle