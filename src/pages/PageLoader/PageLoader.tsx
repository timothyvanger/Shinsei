import { Routes, Route, NavLink } from "react-router-dom";

const PageLoader = () => {
  return (
    <>
      <NavLink to="Shinsei/">Home</NavLink>
      <NavLink to="Shinsei/emi">emi</NavLink>
      <NavLink to="Shinsei/tim">tim</NavLink>
      <Routes>
        <Route path="Shinsei/" element={<Home />}></Route>
        <Route path="Shinsei/emi" element={returnPage("emi")}></Route>
        <Route path="Shinsei/tim" element={returnPage("tim")}></Route>
      </Routes>
    </>
  );
};

const returnPage = (string: string) => {
  if (string === "emi") return <p>This is emi page</p>;
  if (string === "tim") return <p>This is tim page</p>;
};

export default PageLoader;

const Home = () => {
  return <p> This is the homepage </p>;
};
