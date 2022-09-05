import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import {WorkoutsContextProvider} from './store/Workouts-context'
import { AuthContextProvider } from "./store/Auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WorkoutsContextProvider>
  <AuthContextProvider>
  
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </AuthContextProvider>
  </WorkoutsContextProvider>
);
