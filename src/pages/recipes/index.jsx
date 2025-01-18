import React from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";
import useWindowResize from "../../hooks/use-window-resize";

const RecipeList = () => {
  const location = useLocation();
  const { data, loading, error } = useFetch("https://dummyjson.com/recipes");
  //const windowSize = useWindowResize();
  const { width, height } = useWindowResize();
  if (loading) return <h1>Fetching recipes! Please wait</h1>;
  console.log(data);

  return (
    <div>
      <h1 style={{ color: width < 768 ? "red" : "black" }}>RecipeList</h1>
      <h3>
        Current window width is {width} and current height is {height}
      </h3>
      <ul>
        {data?.recipes?.length > 0
          ? data?.recipes?.map((recipeItem, key) => (
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
