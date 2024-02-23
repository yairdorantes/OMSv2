import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Panel from "../views/main/Panel";
import Test from "../components/Test";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Panel />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
};

export default Router;
