import { Link, Route, Routes, useNavigate } from "react-router-dom";
import RecipeList from "./pages/recipes";
import CommentsList from "./pages/comments";
import RecipeDetailsPage from "./pages/recipe-details";
import NotFoundPage from "./pages/not-found";
import Layout from "./component/layout";
import ReactHookFormExamplePage from "./pages/react-hook-form-example";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <h1>React Router, custom hooks and more</h1>
      <div>
        <Link to={"/home/recipe-list"}>
          Alternative way of navigating to recipe list page
        </Link>
      </div>
      <button
        onClick={() => navigate("/home/recipe-list")}
        style={{ background: "black", color: "white" }}
      >
        Navigate to Recipe List Page
      </button>
      <button
        onClick={() => navigate("/home/comments-list")}
        style={{ background: "black", color: "white" }}
      >
        Navigate to Comments List Page
      </button>
      <Routes>
        <Route path="/home" element={<Layout />}>
          <Route path="recipe-list" element={<RecipeList />} />
          <Route
            path="react-hook-form"
            element={<ReactHookFormExamplePage />}
          />

          <Route path="comments-list" element={<CommentsList />} />
          <Route path="recipe-list/:id" element={<RecipeDetailsPage />} />
        </Route>

        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
