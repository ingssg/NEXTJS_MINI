"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { TfiCommentAlt } from "react-icons/tfi";
import { AiOutlineLike } from "react-icons/ai";

type Props = {
  article: {
    _id: string;
    title: number;
    nickname: string;
    date: string;
  };
};

const Article = (props: Props) => {
  const router = useRouter();

  const [commentCount, setCommentCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);

  const goToArticle = () => {
    router.push(`/articles/${props.article._id}`);
  };

  const parsingTime = (time: string) => {
    const date = new Date(time);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); 
    const day = String(date.getDate()).padStart(2, "0"); 
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }

  return (
    <div className="border-2 border-[#606067] hover:bg-[#38383c] bg-[#27272a] p-2 rounded-lg w-[60vw] min-w-[300px] max-w-[800px]">
      <div className="w-full cursor-pointer" onClick={goToArticle}>
        <div className="flex w-full text-[12px] sm:text-[16px] justify-between">
          <span className="flex items-center whitespace-nowrap text-ellipsis overflow-hidden">
            {props.article.title}
          </span>
          <div className="flex flex-col items-end w-[25%]">
            <p className="text-[10px] sm:text-[16px]">
              {parsingTime(props.article.date)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
