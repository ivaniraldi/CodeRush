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
import Navbar from "./components/Navbar";
import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

function App() {
  const { user } = useAuth();
  let userParsed = JSON.parse(localStorage.getItem('user')) || user;
  return (
    <main className="h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={userParsed ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={userParsed ? <Navigate to="/" />: <Register />} />
        <Route
          path="/profile"
          element={userParsed ? <Profile /> : <Navigate to="/login" />}
        />
        <Route path="/tests" element={<Tests />} />
        <Route path="/game" element={userParsed ? <Game /> : <Navigate to="/login" />} />
        <Route path="/highscores" element={<Highscores />} />
        <Route
          path="/admin"
          element={userParsed && user.role === "admin" ? <Admin /> :<Navigate to="/unauthorized" />}
        />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
    </main>
  );
}

export default App;
