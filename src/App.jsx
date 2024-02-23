import "./App.css";
import { Toaster } from "react-hot-toast";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <div className=" ">
        <Router />
        <Toaster />
      </div>

      {/* <FontAwesomeIcon icon={faHippo} className="text-black" /> */}
    </>
  );
}

export default App;
