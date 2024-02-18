import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHippo } from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import { Toaster } from "react-hot-toast";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <div className="font-medium">
        <Router />
        <Toaster />
      </div>
      {/* <FontAwesomeIcon icon={faHippo} className="text-black" /> */}
    </>
  );
}

export default App;
