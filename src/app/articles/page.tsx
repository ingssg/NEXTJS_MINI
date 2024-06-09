'use client';

import React, {useState} from "react";
import Article from "../../components/Article";
import Link from "next/link";
import { PiNotePencilLight } from "react-icons/pi";
import { getArticles } from "@/api/articles";
import { useFetchData } from "@/api/hooks";

type Props = {};

type article = {
  id: number;
  title: string;
  content: string;
};

type Articles = {
  id: string;
  title: string;
  date: string;
};

const Articles = (props: Props) => {

  const { data, loading, error } = useFetchData<Articles[]>("/board");
  if(loading) {
    return <div>로딩 중입니다.</div>
  }
  if(error) {
    return <div>에러가 발생했습니다.</div>
  }

  const articles = data;
  if (!articles) {
    return <div>게시글이 없습니다.</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5 min-w-[300px] mx-[10vw] max-w-[70vw]">
      <Link href="/post" className="ml-auto mt-[5px] text-[2rem] mr-2 text-[#7c98cd] hover:text-[#93b1e7] sm:text-[2.5rem]">
        <PiNotePencilLight />
      </Link>

      <div className="flex flex-col gap-3 w-full">
        {articles.map((article: any) => {
          return <Article key={article.id} article={article} />;
        })}
      </div>
    </div>
  );
};

export default Articles;
