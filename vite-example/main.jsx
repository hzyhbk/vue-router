import { React, ReactDOM } from "es-react";
import "./index.css";
import { router } from "./Root";
import App from "./App";

router.init();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
