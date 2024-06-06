import Link from 'next/link'
import React from 'react'

type Props = {}

const Login = (props: Props) => {
  return (
    <div className='flex flex-col gap-4 mx-auto p-4 w-full justify-center items-center h-screen pb-[20vh]'>
      Login 페이지
      <div className='flex gap-2'>
        <Link className="border-2 p-2" href="/signup">회원가입</Link>
        <Link className="border-2 p-2" href="/">홈으로</Link>
      </div>
    </div>
  )
}

export default Login