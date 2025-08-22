import { createRoot } from "react-dom/client";
import Routes from "./Routing/Routes.jsx";
import AuthContext from "./context/AuthContext.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <AuthContext>
    <Routes />
  </AuthContext>
);
