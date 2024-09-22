import "./assets/css/style.css"
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import PostDetail from "./pages/Post-detail";
import CategoriesPage from "./pages/Categories";
import {Routes, Route} from "react-router-dom";
import PostByCategory from "./pages/PostByCategory-page";
function App() {
  return (
    <>
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/category/posts/:id" element={<PostByCategory />} />
      </Routes>
      </main>
    </>
  );
}

export default App;
