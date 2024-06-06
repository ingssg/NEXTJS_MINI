import React from 'react'
import Link from 'next/link'

type Props = {}

const SignUp = (props: Props) => {
  return (
    <div className='flex flex-col gap-4 mx-auto p-4 w-full justify-center items-center h-screen pb-[20vh]'>
      회원가입 페이지
      <div className='flex gap-2'>
        <Link className="border-2 p-2" href="/login">로그인</Link>
        <Link className="border-2 p-2" href="/">홈으로</Link>
      </div>
    </div>
  )
}

export default SignUp