import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import PostDetailPage from "./pages/PostDetailPage/PostDetailPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import MyPage from "./pages/MyPage/MyPage";
import WritePostPage from "./pages/WritePostPage/WritePostPage";

import WritePostModal from "./components/WritePostModal/WritePostModal";
import LocationFilter from "./components/LocationFilter.js/LocationFilter";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/post" element={<PostDetailPage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/write" element={<WritePostPage />}></Route>

        <Route path="/test/write" element={<WritePostModal />}></Route>
        <Route path="/test/filter" element={<LocationFilter />}></Route>
      </Routes>
    </div>
  );
}

export default App;
