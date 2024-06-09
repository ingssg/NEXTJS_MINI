'use client';
import { useFetchData, usePostData } from "./hooks";

type Articles = {
  id: string;
  title: string;
  date: string;
};

export const getArticles = () => {
  console.log(123);
  const { data, loading, error } = useFetchData<Articles[]>("/api/board");
  console.log(data,loading, error)
  if (loading) {
    return "loading";
  }
  if (error) {
    return "error";
  }
  return data;
};

export const postArticle = (data: object) => {
  const { loading, error } = usePostData("/board", data);
  if (loading) {
    return <div>로딩 중입니다.</div>;
  }
  if (error) {
    return <div>에러가 발생했습니다.</div>;
  }
  return <div>게시글이 등록되었습니다.</div>;
};
