import { useOidc, useOidcUser } from "@axa-fr/react-oidc";

function AuthTest() {
  const { login, logout, renewTokens, isAuthenticated } = useOidc();
  const { oidcUser } = useOidcUser();
  return (
    <div className="container-fluid mt-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            Welcome{" "}
            {oidcUser
              ? `${oidcUser.given_name} ${oidcUser.family_name}`
              : "!!!"}
          </h5>
          <p className="card-text">
            React Demo Application protected by OpenId Connect
          </p>
          {!isAuthenticated && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => login()}
            >
              Login
            </button>
          )}
          {isAuthenticated && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => logout("")}
            >
              logout
            </button>
          )}
          {isAuthenticated && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => renewTokens()}
            >
              renewTokens
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthTest;
