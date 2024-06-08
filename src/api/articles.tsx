import useFetchData from "./hooks";

export const getArticles = async () => {
  const {data, loading, error} = useFetchData("/board");
  if (loading) {
    return <div>로딩 중입니다.</div>;
  }
  if (error) {
    return <div>에러가 발생했습니다.</div>
  }
  return data;
}
