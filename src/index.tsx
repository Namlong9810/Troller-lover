import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SurprisePage from "./page/surprisePage";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    {/* <App /> */}
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/happyBirthDay" element={<SurprisePage/>} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);
