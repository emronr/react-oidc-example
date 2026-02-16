import Counter from "../pages/Counter.jsx";
import { Routes, Route } from "react-router-dom";
import AuthTest from "../pages/AuthTest.jsx";
import { OidcSecure } from "@axa-fr/react-oidc";
import BackendRequest from "../pages/BackendRequest.jsx";

function RouteList() {
  return (
    <Routes>
      <Route path="/*" element={<Counter />} />
      <Route path="/auth" element={<AuthTest />} />
      <Route
        path="/secure"
        element={
          <OidcSecure>
            <Counter />
          </OidcSecure>
        }
      />
      <Route
        path="/be"
        element={
          <OidcSecure>
            <BackendRequest />
          </OidcSecure>
        }
      />
    </Routes>
  );
}

export default RouteList;
