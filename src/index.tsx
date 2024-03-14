import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SlidesProvider from "./SlidesProvider";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <SlidesProvider>
      <App />
    </SlidesProvider>
  </React.StrictMode>
);
