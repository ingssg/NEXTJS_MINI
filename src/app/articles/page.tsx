import React from "react";
import Article from "../../components/Article";
import Link from "next/link";

type Props = {};

const Articles = (props: Props) => {
  const articles = [
    { id: 1, title: "Article 1", body: "This is the body of Article 1" },
    { id: 2, title: "Article 2", body: "This is the body of Article 2" },
    { id: 3, title: "Article 3", body: "This is the body of Article 3" },
  ];

  return (
    <div className="flex flex-col gap-5 mx-auto mt-[100px] w-[50%] p-[50px] border-2">
      {articles.map((article) => {
        return <Article key={article.id} articleID={article.id} />;
      })}
      <Link className="ml-auto border-2 p-2" href="/">홈으로</Link>
    </div>
  );
};

export default Articles;
