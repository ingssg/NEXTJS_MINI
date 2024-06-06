'use client';

import React from 'react'
import Button from './Button';
import { useRouter } from 'next/navigation';

type Props = {
  articleID: number;
}

const Article = (props: Props) => {
  const router = useRouter();

  const handleDelete = (e: MouseEvent) => {
    console.log("Delete");
    e.stopPropagation();
  }

  const handleEdit = (e: MouseEvent) => {
    console.log("Edit");
    e.stopPropagation();
  }

  const goToArticle = () => {
    router.push(`/articles/${props.articleID}`)
  }

  return (
    <div className='border-2 border-white p-2'>
      <div className='w-full cursor-pointer' onClick={goToArticle}>
        <div className='flex gap-4 items-center w-full'>
          <span>{props.articleID}번 게시글 보러가기</span>
          <div className='flex gap-2 ml-auto'>
            <Button className="border-2 p-2" onClick={handleEdit}>수정</Button>
            <Button className="border-2 p-2" onClick={handleDelete}>삭제</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article;
