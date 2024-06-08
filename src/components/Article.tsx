"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { TfiCommentAlt } from "react-icons/tfi";
import { AiOutlineLike } from "react-icons/ai";

type Props = {
  article: {
    id: number;
    title: string;
    body: string;
  };
};

const Article = (props: Props) => {
  const router = useRouter();

  const [commentCount, setCommentCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);
  

  const goToArticle = () => {
    router.push(`/articles/${props.article.id}`);
  };

  return (
    <div className="border-2 border-[#606067] hover:bg-[#38383c]  bg-[#27272a] p-2 rounded-lg">
      <div className="w-full cursor-pointer" onClick={goToArticle}>
        <div className="flex gap-4 items-center w-full text-[10px] sm:text-[13px]">
          <span className="whitespace-nowrap text-ellipsis overflow-hidden">
            게시글ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㄴㅁㅇㄹㅁㄴㅇㄹ
          </span>
          <div className="flex gap-3 ml-auto">
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
  );
};

export default Article;
