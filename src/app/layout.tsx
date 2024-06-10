import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import RecoilRootWrapper from "@/store/recoilWrapper";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="flex flex-col justify-center items-center h-screen pb-[20vh] min-w-[360px] font-nanum">
          <Link
            className="flex justify-center items-center mb-10 w-[30vw] min-w-[250px]"
            href="/"
          >
            <Image
              src="/logo.png"
              alt="TORO"
              width={400}
              height={100}
              priority
            />
          </Link>
          <RecoilRootWrapper>{children}</RecoilRootWrapper>
        </div>
      </body>
    </html>
  );
}
