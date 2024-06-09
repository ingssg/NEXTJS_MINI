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

  return (
    <div className="border-2 border-[#606067] hover:bg-[#38383c] bg-[#27272a] p-2 rounded-lg w-[60vw] min-w-[300px] max-w-[800px]">
      <div className="w-full cursor-pointer" onClick={goToArticle}>
        <div className="flex w-full text-[12px] sm:text-[16px] justify-between">
          <span className="flex items-center whitespace-nowrap text-ellipsis overflow-hidden">
            {props.article.title}
          </span>
          <div className="flex flex-col items-end w-[25%]">
            <p className="text-[10px] sm:text-[16px]">{props.article.nickname}</p>
            <div className="flex gap-3">
              <div className="flex gap-[7px]">
                <TfiCommentAlt className="relative top-[4px] text-[14px] sm:text-[16px] sm:top-[5px]" />
                <span className="text-[13px] sm:text-[17px]">{commentCount}</span>
              </div>
              <div className="flex gap-[4px]">
                <AiOutlineLike className="relative text-[16px] sm:text-[22px]" />
                <span className="text-[13px] sm:text-[17px]">{likeCount}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
