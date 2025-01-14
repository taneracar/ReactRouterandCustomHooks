import { Link, Route, Routes, useNavigate } from "react-router-dom";
import RecipeList from "./pages/recipes";
import CommentsList from "./pages/comments";
import RecipeDetailsPage from "./pages/recipe-details";
import NotFoundPage from "./pages/not-found";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <h1>React Router, custom hooks and more</h1>
      <div>
        <Link to={"/recipe-list"}>
          Alternative way of navigating to recipe list page
        </Link>
      </div>
      <button
        onClick={() => navigate("/recipe-list")}
        style={{ background: "black", color: "white" }}
      >
        Navigate to Recipe List Page
      </button>
      <button
        onClick={() => navigate("/comments-list")}
        style={{ background: "black", color: "white" }}
      >
        Navigate to Comments List Page
      </button>
      <Routes>
        <Route path="/recipe-list" element={<RecipeList />} />
        <Route path="/comments-list" element={<CommentsList />} />
        <Route path="/recipe-list/:id" element={<RecipeDetailsPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
