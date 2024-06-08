import React from "react";
import Article from "../../components/Article";
import Link from "next/link";
import { PiNotePencilLight } from "react-icons/pi";

type Props = {};

const Articles = (props: Props) => {
  const articles = [
    { id: 1, title: "Article 1", body: "This is the body of Article 1" },
    { id: 2, title: "Article 2", body: "This is the body of Article 2" },
    { id: 3, title: "Article 3", body: "This is the body of Article 3" },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-5 min-w-[300px] mx-[10vw] max-w-[70vw]">
      <Link href="/post" className="ml-auto mt-[5px] text-[2rem] mr-2 text-[#7c98cd] hover:text-[#93b1e7] sm:text-[2.5rem]">
        <PiNotePencilLight />
      </Link>

      <div className="flex flex-col gap-3 w-full">
        {articles.map((article) => {
          return <Article key={article.id} article={article} />;
        })}
      </div>
    </div>
  );
};

export default Articles;
