import React from "react";
import { useParams } from "react-router-dom";

const RecipeDetailsPage = () => {
  const params = useParams();
  const { id } = params;
  return (
    <div>
      <h1>Recipe details of recipe item {id}</h1>
    </div>
  );
};

export default RecipeDetailsPage;
