import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/home/home.jsx";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);
