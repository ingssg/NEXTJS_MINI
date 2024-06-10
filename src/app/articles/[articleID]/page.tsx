'use client';

import React from "react";
import Link from "next/link";
import { FaRegListAlt } from "react-icons/fa";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { useFetchData } from "@/api/hooks";
import instance from "@/api/axios";

type Props = {
  params: {
    articleID: string;
  };
};

type Article = {
  title: string;
  date: string;
  nickname: string;
  content: string;
};



const Article = (props: Props) => {
  const _id = props.params.articleID;
  const router = useRouter();
  const { data, loading, error } = useFetchData<Article>(`/api/board/${_id}`);
  const handleEdit = () => {
    router.push(`/articles/edit/${_id}`)
  };
  const handleDelete = () => {
    instance.delete(`/api/board/${_id}`);
    router.push("/articles")
  };
  if (loading) {
    return <span className="loader"></span>;
  }

  if (error || !data) {
    router.push("/error");
    return;
  }

  const parsingTime = (time: string) => {
    const date = new Date(time);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); 
    const day = String(date.getDate()).padStart(2, "0"); 
    const hours = String(date.getHours()).padStart(2, "0"); 
    const minutes = String(date.getMinutes()).padStart(2, "0"); 
    const seconds = String(date.getSeconds()).padStart(2, "0"); 
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedDate;
  }

  const articles = data; 

  return (
    <div className="p-2 flex flex-col justify-center items-center w-[65vw] min-w-[300px] max-w-[900px]">
      <div className="w-full text-[14px] sm:text-[18px]">
        <div className="border-[#606067] bg-[#27272a] p-4 rounded-t-2xl font-nanum font-bold relative break-all border-[1px]">
          <p className="mb-4">
            {articles.title}
          </p>
          <div className="flex justify-between">
            <span className="font-normal text-[12px] sm:text-[16px]">
              {parsingTime(articles.date)}
            </span>
            <div className="flex gap-2 sm:gap-4 justify-end w-[20vw]">
              <Button className="text-[#7c98cd] hover:text-[#93b1e7] text-[12px] sm:text-[16px]" onClick={handleEdit}>수정</Button>
              <Button className="text-[#7c98cd] hover:text-[#93b1e7] text-[12px] sm:text-[16px]" onClick={handleDelete}>삭제</Button>
            </div>
          </div>
        </div>
        <div className="border-[#606067] bg-[#27272a] p-5 rounded-b-2xl font-nanum relative w-full border-[1px] break-all">
          {articles.content}
        </div>
      </div>
      <Link
        className="ml-auto text-[#7c98cd] hover:text-[#93b1e7] mt-3 flex gap-2 relative"
        href="/articles"
      >
        <FaRegListAlt className="absolute top-1 left-[-25px]"/> <span className="mr-2">글 목록</span>
      </Link>
    </div>
  );
};

export default Article;
