import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Profile from "./views/Profile";
import Tests from "./views/Tests";
import Game from "./views/Game";
import Highscores from "./views/Highscores";
import Admin from "./views/Admin";
import Unauthorized from "./views/Unauthorized";
import NotFound from "./views/NotFound";
import { useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";

function App() {
  const { user } = useAuth();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route
          path="/profile"
          element={user ? <Profile /> : <Unauthorized />}
        />
        <Route path="/tests" element={<Tests />} />
        <Route path="/game" element={user ? <Game /> : <Unauthorized />} />
        <Route path="/highscores" element={<Highscores />} />
        <Route
          path="/admin"
          element={user && user.role === "admin" ? <Admin /> : <Unauthorized />}
        />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
