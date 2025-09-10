import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx"; // <-- ensure this matches the actual file name

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
