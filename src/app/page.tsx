import Link from 'next/link'
import React from 'react'

type Props = {}

const Main = (props: Props) => {
  return (
    <div className='mx-auto flex gap-5 w-[50%] pt-14 justify-center'>
      <Link className="p-2 border-2" href="/login">로그인</Link>
      <Link className="p-2 border-2" href="/signup">회원가입</Link>
      <Link className="p-2 border-2" href="/articles">게시글보러가기</Link>
    </div>
  )
}
export default Main