"use client";

import React from "react";
import Article from "../../components/Article";
import Link from "next/link";
import { PiNotePencilLight } from "react-icons/pi";
import { useFetchData } from "@/api/hooks";
import { useRouter } from "next/navigation";

type Props = {};

type article = {
  _id: number;
  title: string;
  date: string;
  nickname: string;
};

type Articles = {
  board: article[];
};

const Articles = (props: Props) => {
  const router = useRouter();
  const { data, loading, error } = useFetchData<Articles>("/api/board");
  if (loading) {
    return <span className="loader"></span>;
  }

  if (error) {
    router.push("/error");
    return;
  }
  if (!data || !data.board || data.board.length === 0) {
    return <div>게시글이 없습니다.</div>;
  }
  const articles = data.board;
  console.log(123, articles);

  return (
    <div className="flex flex-col justify-center items-center gap-5 min-w-[300px] mx-[10vw] max-w-[900px]">
      <Link
        href="/post"
        className="ml-auto mt-[5px] text-[2rem] mr-2 text-[#7c98cd] hover:text-[#93b1e7] sm:text-[2.5rem]"
      >
        <PiNotePencilLight />
      </Link>

      <div className="flex flex-col gap-3 w-full">
        {articles.map((article: any) => {
          return <Article key={article._id} article={article} />;
        })}
      </div>
    </div>
  );
};

export default Articles;
