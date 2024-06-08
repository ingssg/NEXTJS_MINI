import Link from "next/link";
import React from "react";

type Props = {};

const Main = (props: Props) => {
  return (
    <div className="mx-auto flex flex-col gap-5 justify-center items-center">
      <Link
        className="border-[1px] border-[#606067] hover:bg-[#38383c]  bg-[#27272a] p-2 rounded-2xl w-[25vw] text-center text-2xl font-bold min-w-[250px] max-w-[450px]"
        href="/login"
      >
        시작하기
      </Link>
    </div>
  );
};
export default Main;
