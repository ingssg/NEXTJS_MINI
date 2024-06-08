'use client';

import React from "react";
import Link from "next/link";
import { FaRegListAlt } from "react-icons/fa";
import Button from "@/components/Button";

type Props = {
  params: {
    articleID: string;
  };
};

const dummy = (
  <>
    <p>
      헌법개정은 국회재적의원 과반수 또는 대통령의 발의로 제안된다. 원장은
      국회의 동의를 얻어 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여
      중임할 수 있다.
    </p>
    <p>
      모든 국민은 통신의 비밀을 침해받지 아니한다. 제1항의 탄핵소추는
      국회재적의원 3분의 1 이상의 발의가 있어야 하며, 그 의결은 국회재적의원
      과반수의 찬성이 있어야 한다. 다만, 대통령에 대한 탄핵소추는 국회재적의원
      과반수의 발의와 국회재적의원 3분의 2 이상의 찬성이 있어야 한다.
    </p>
    <p>
      선거에 관한 경비는 법률이 정하는 경우를 제외하고는 정당 또는 후보자에게
      부담시킬 수 없다. 모든 국민은 주거의 자유를 침해받지 아니한다. 주거에 대한
      압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한 영장을
      제시하여야 한다.
    </p>
  </>
);

const dummyWriter = "홍길동";
const dummyDate = "2024-06-08";
const handleDelete = (e: MouseEvent) => {
  console.log("Delete");
  e.stopPropagation();
};

const handleEdit = (e: MouseEvent) => {
  console.log("Edit");
  e.stopPropagation();
};

const Article = (props: Props) => {
  return (
    <div className="p-2 flex flex-col justify-center items-center min-w-[300px] mx-[10vw] max-w-[900px]">
      <p>{props.params.articleID}번 아티클 페이지 입니다.</p>
      <div className="w-full">
        <div className="border-[#606067] bg-[#27272a] p-4 rounded-t-2xl text-[18px] font-nanum font-bold relative break-all">
          <p className="mb-4">
            더미 제목입니다. 아주 긴 더미
            제목입니다~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          </p>
          <div className="flex justify-between">
            <span className="font-normal text-[16px]">
              작성자: {dummyWriter} | 작성시간: {dummyDate}
            </span>
            <div className="flex gap-4 justify-end">
              <Button className="text-[#7c98cd] hover:text-[#93b1e7]" onClick={handleEdit}>수정</Button>
              <Button className="text-[#7c98cd] hover:text-[#93b1e7]" onClick={handleDelete}>삭제</Button>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-[#606067] bg-[#27272a] p-5 rounded-b-2xl font-nanum relative w-full">
          <>{dummy}</>
        </div>
      </div>
      <Link
        className="ml-auto text-[#7c98cd] hover:text-[#93b1e7] mt-3 flex gap-2 relative"
        href="/articles"
      >
        <FaRegListAlt className="absolute top-1 left-[-25px]"/> <span>글 목록</span>
      </Link>
    </div>
  );
};

export default Article;
