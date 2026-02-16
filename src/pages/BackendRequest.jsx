import { useOidc, useOidcUser } from "@axa-fr/react-oidc";
import axios from "axios";

const sendAnyRequestToBE = () => {
  axios
    .get("http://localhost:/9000")
    .then((response) => console.log(response))
    .catch((err) => console.log(error));
};

function BackendRequest() {
  return (
    <div className="container-fluid mt-3">
      <div className="card">
        <div className="card-body">
          <p className="card-text">Test Backend Requests</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => sendAnyRequestToBE()}
          >
            Send Request
          </button>
        </div>
      </div>
    </div>
  );
}

export default BackendRequest;
