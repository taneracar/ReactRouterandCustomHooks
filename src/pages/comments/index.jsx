import React from "react";
import useSWR from "swr";
//import useFetch from "../../hooks/use-fetch";

const CommentsList = () => {
  /* const { data, loading, error } = useFetch("https://dummyjson.com/comments");
  if (loading) return <h1>Fetching Comments! Please wait</h1>; */
  /*  console.log(data?.comments); */
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/comments",
    fetcher
  );
  console.log(data, error, isLoading);
  return (
    <div>
      <ul>
        {data?.comments?.length > 0
          ? data.comments.map((commentItem, key) => (
              <div key={key}>
                <h4>{commentItem?.body}</h4>
                <h5>{commentItem?.user?.fullName}</h5>
              </div>
            ))
          : null}

        {/*   {data?.comments?.length > 0
          ? data.comments.map((commentItem, key) => (
              <div key={key}>
                <h4>{commentItem?.body}</h4>
                <h5>{commentItem?.user?.fullName}</h5>
              </div>
            ))
          : null} */}
      </ul>
    </div>
  );
};

export default CommentsList;
