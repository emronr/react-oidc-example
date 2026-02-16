import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import oidcConfig from "./configs/authConfig.js";
import { OidcProvider } from "@axa-fr/react-oidc";

createRoot(document.getElementById("root")).render(
  <OidcProvider configuration={oidcConfig}>
    <App />
  </OidcProvider>,
);
