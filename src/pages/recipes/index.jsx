import React from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";

const RecipeList = () => {
  const location = useLocation();
  const { data, loading, error } = useFetch("https://dummyjson.com/recipes");
  if (loading) return <h1>Fetching recipes! Please wait</h1>;
  console.log(data);

  return (
    <div>
      <h1>RecipeList</h1>
      <ul>
        {data?.recipes?.length > 0
          ? data?.recipes?.map((recipeItem,key) => (
              <div key={key}>
                <img src={recipeItem.image} />
                <label htmlFor="image">{recipeItem.name}</label>
              </div>
            ))
          : null}
      </ul>
    </div>
  );
};

export default RecipeList;
