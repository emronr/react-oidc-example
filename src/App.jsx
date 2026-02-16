import { BrowserRouter as Router } from "react-router-dom";
import RouteList from "./routes/RouteList.jsx";
import { useAxiosInterceptors } from "./hooks/useAxiosInterceptors.js";

function App() {
  useAxiosInterceptors();
  return (
    <>
      <Router>
        <RouteList />
      </Router>
    </>
  );
}

export default App;
