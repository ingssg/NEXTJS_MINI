import React from 'react'
import Link from 'next/link'

type Props = {
  params: {
    articleID: string;
  },
}

const Article = (props: Props) => {
  return (
    <div className='p-2 pb-[20vh] flex flex-col justify-center items-center h-screen gap-4'>
      <p>{props.params.articleID}번 아티클 페이지 입니다.</p>
      <Link className="p-2 border-2" href="/articles">게시글 목록으로</Link>
    </div>
  )
}

export default Article