import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-7 h-screen mb-[-10vh]">
      <Image src="/404error.png" alt="404 error" width={400} height={400} priority />
      <h1 className="text-2xl">해당 페이지를 찾을 수 없습니다.</h1>
    </div>
  );
}
