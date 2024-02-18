import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Panel from "../views/main/Panel";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Panel />} />
      <Route path="/test" element={<NavBar />} />
    </Routes>
  );
};

export default Router;
