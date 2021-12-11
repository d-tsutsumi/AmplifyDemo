import Header from "./Header";
import { Navigate } from "react-router-dom";
import { useAuthCheck } from "../useAuthCheck";

const About = () => {
  const { login, isLoading } = useAuthCheck();

  if (isLoading) return <h1>Loading...</h1>;
  return login ? (
    <>
      <Header />
      <h1>about</h1>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default About;
