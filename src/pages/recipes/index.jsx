import React from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";

const RecipeList = () => {
  const location = useLocation();
  const { data, loading, error } = useFetch("https://dummyjson.com/recipes");
  if (loading) return <h1>Fetching recipes! Please wait</h1>;

  return (
    <div>
      <h1>RecipeList</h1>
      <ul>
        {/* {data?.recipes?.lenght > 0 ?
        } */}
      </ul>
    </div>
  );
};

export default RecipeList;
