import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>NotFoundPage</h1>
      <Link to={"/recipe-list"}>Go to Recipe List Page</Link>
    </div>
  );
};

export default NotFoundPage;
