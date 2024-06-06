import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-7 h-screen mb-24">
      <Image src="/404error.png" alt="404 error" width={600} height={500} />
      <h1 className="text-4xl">해당 페이지를 찾을 수 없습니다.</h1>
      <Link className="border-2 p-2" href="/">돌아가기</Link>
    </div>
  );
}
