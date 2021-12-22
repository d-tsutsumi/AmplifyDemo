import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Users from "./components/Users";
import Home from "./components/Home";
import Login from "./components/Login";
import PrivateRoute from "./privateRoute";

const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="about"
          element={
              <About />
          }
        />
        <Route
          path="users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoute;
